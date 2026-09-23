<?php
/**
 * ESC Clinical Research — Contact Form Handler
 * Sends a branded HTML email to contact@esclinical.com
 * Features: Envelope Sender (-f), Backup Logging, CORS, Rate Limiting, Honeypot
 */

header('Content-Type: application/json; charset=utf-8');

// ── CORS ──────────────────────────────────────────────────────────────────────
$allowed_origins = [
    'https://esclinical.com',
    'https://www.esclinical.com',
    'http://localhost:3000',
    'http://localhost:3002'
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
    header("Access-Control-Allow-Headers: Content-Type");
} elseif ($origin !== '') {
    if (str_contains($origin, 'esclinical.com')) {
        header("Access-Control-Allow-Origin: $origin");
        header("Access-Control-Allow-Headers: Content-Type");
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); echo json_encode(['error' => 'Method Not Allowed']); exit;
}

// ── Rate Limiting (5 emails/hour per session) ─────────────────────────────────
session_start();
$now = time();
if (!isset($_SESSION['email_history'])) $_SESSION['email_history'] = [];
$_SESSION['email_history'] = array_filter($_SESSION['email_history'], fn($t) => ($now - $t) < 3600);
if (count($_SESSION['email_history']) >= 5) {
    http_response_code(429);
    echo json_encode(['error' => 'Too many requests. Please try again later.']);
    exit;
}

// ── Parse JSON ────────────────────────────────────────────────────────────────
$data = json_decode(file_get_contents('php://input'), true);
if (!$data) { http_response_code(400); echo json_encode(['error' => 'Invalid JSON']); exit; }

// ── Honeypot ──────────────────────────────────────────────────────────────────
if (!empty($data['website_url'])) { http_response_code(200); echo json_encode(['ok' => true]); exit; }

// ── Sanitize helpers ──────────────────────────────────────────────────────────
function hdr(string $s): string {
    return str_replace(["\r", "\n", "%0a", "%0d"], '', trim(strip_tags($s)));
}
function esc(string $s): string {
    return htmlspecialchars(strip_tags(trim($s)), ENT_QUOTES, 'UTF-8');
}

// ── Extract fields ────────────────────────────────────────────────────────────
$prenom     = hdr($data['Prénom']    ?? $data['Prenom']    ?? '');
$nom        = hdr($data['Nom']       ?? '');
$email      = hdr($data['email']     ?? '');
$sujet      = hdr($data['Sujet']     ?? 'Nouveau message');
$telephone  = esc($data['Téléphone'] ?? $data['Telephone'] ?? 'N/A');
$entreprise = esc($data['Entreprise'] ?? 'N/A');
$fonction   = esc($data['Fonction']   ?? 'N/A');
$messageRaw = esc($data['Message']   ?? '');
$message    = nl2br($messageRaw);

// ── Validation ────────────────────────────────────────────────────────────────
if (!$prenom || !$nom || !$email || !$messageRaw) {
    http_response_code(400); echo json_encode(['error' => 'Missing required fields']); exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400); echo json_encode(['error' => 'Invalid email address']); exit;
}

// ── Email config ──────────────────────────────────────────────────────────────
$to      = 'contact@esclinical.com';
$from    = 'contact@esclinical.com';
$subject = '=?UTF-8?B?' . base64_encode("Nouveau message contact : $sujet") . '?=';

// ── Backup Local Storage (Prevents Any Message Loss) ──────────────────────────
$logEntry = [
    'date' => date('Y-m-d H:i:s'),
    'prenom' => $prenom,
    'nom' => $nom,
    'email' => $email,
    'telephone' => $telephone,
    'entreprise' => $entreprise,
    'fonction' => $fonction,
    'sujet' => $sujet,
    'message' => $messageRaw,
    'ip' => $_SERVER['REMOTE_ADDR'] ?? 'N/A'
];
$logFile = __DIR__ . '/.contact_submissions.json.php';
$existingLogs = [];
if (file_exists($logFile)) {
    $rawContent = file_get_contents($logFile);
    $jsonStart = strpos($rawContent, '[');
    if ($jsonStart !== false) {
        $existingLogs = json_decode(substr($rawContent, $jsonStart), true) ?? [];
    }
}
array_unshift($existingLogs, $logEntry); // new first
if (count($existingLogs) > 100) $existingLogs = array_slice($existingLogs, 0, 100);

file_put_contents($logFile, "<?php http_response_code(403); exit; ?>\n" . json_encode($existingLogs, JSON_PRETTY_PRINT));

// ── HTML Email Body ───────────────────────────────────────────────────────────
$body  = '<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Nouveau message ESC Clinical Research</title></head>';
$body .= '<body style="margin:0;padding:0;background:#f5f0fa;font-family:Segoe UI,Helvetica,Arial,sans-serif;">';
$body .= '<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f0fa;padding:40px 20px;"><tr><td align="center">';
$body .= '<table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(80,41,142,0.10);">';

// Header gradient
$body .= '<tr><td style="background:linear-gradient(135deg,#7f2191 0%,#50298e 100%);padding:36px 48px;">';
$body .= '<span style="display:inline-block;background:rgba(255,255,255,0.18);border-radius:100px;padding:4px 16px;color:#fff;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:14px;">Formulaire de contact</span>';
$body .= '<h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;letter-spacing:-0.5px;line-height:1.2;">ESC Clinical Research</h1>';
$body .= '<p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:14px;">Nouveau message reçu via esclinical.com</p></td></tr>';

// Subject badge
$body .= '<tr><td style="padding:28px 48px 0;">';
$body .= '<span style="display:inline-block;background:#f4effc;color:#7f2191;border-radius:100px;padding:6px 20px;font-size:12px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;">' . esc($sujet) . '</span></td></tr>';

// Sender name
$body .= '<tr><td style="padding:20px 48px 0;">';
$body .= '<p style="margin:0 0 4px;color:#7c6a96;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;">Expéditeur</p>';
$body .= '<p style="margin:0;color:#50298e;font-size:22px;font-weight:700;">' . esc($prenom) . ' ' . esc($nom) . '</p></td></tr>';

// Contact details grid
$body .= '<tr><td style="padding:20px 48px 0;"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid #f0eaf8;padding-top:20px;">';
$body .= '<tr>';
$body .= '<td width="50%" style="padding:0 16px 16px 0;vertical-align:top;"><p style="margin:0 0 4px;color:#7c6a96;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;">Email</p><a href="mailto:' . esc($email) . '" style="color:#7f2191;font-size:14px;text-decoration:none;font-weight:600;">' . esc($email) . '</a></td>';
$body .= '<td width="50%" style="padding:0 0 16px;vertical-align:top;"><p style="margin:0 0 4px;color:#7c6a96;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;">Téléphone</p><span style="color:#333;font-size:14px;">' . $telephone . '</span></td>';
$body .= '</tr><tr>';
$body .= '<td width="50%" style="padding:16px 16px 0 0;border-top:1px solid #f0eaf8;vertical-align:top;"><p style="margin:0 0 4px;color:#7c6a96;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;">Entreprise</p><span style="color:#333;font-size:14px;">' . $entreprise . '</span></td>';
$body .= '<td width="50%" style="padding:16px 0 0;border-top:1px solid #f0eaf8;vertical-align:top;"><p style="margin:0 0 4px;color:#7c6a96;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;">Fonction</p><span style="color:#333;font-size:14px;">' . $fonction . '</span></td>';
$body .= '</tr></table></td></tr>';

// Message block
$body .= '<tr><td style="padding:24px 48px;">';
$body .= '<div style="background:#f9f5ff;border-left:4px solid #7f2191;border-radius:0 12px 12px 0;padding:20px 24px;">';
$body .= '<p style="margin:0 0 10px;color:#7c6a96;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;">Message</p>';
$body .= '<p style="margin:0;color:#2d1c4a;font-size:15px;line-height:1.75;">' . $message . '</p></div></td></tr>';

// Reply CTA
$body .= '<tr><td style="padding:4px 48px 40px;" align="center">';
$body .= '<a href="mailto:' . esc($email) . '" style="display:inline-block;background:linear-gradient(135deg,#7f2191 0%,#50298e 100%);color:#ffffff;text-decoration:none;padding:15px 40px;border-radius:100px;font-size:15px;font-weight:700;">✉ Répondre à ' . esc($prenom) . '</a></td></tr>';

// Footer
$body .= '<tr><td style="background:#faf7ff;border-top:1px solid #f0eaf8;padding:24px 48px;" align="center">';
$body .= '<p style="margin:0;color:#a090b8;font-size:12px;line-height:1.6;">Message envoyé depuis le formulaire de contact de <strong style="color:#7c6a96;">esclinical.com</strong></p>';
$body .= '<p style="margin:6px 0 0;color:#c0b0d0;font-size:11px;">IP : ' . ($_SERVER['REMOTE_ADDR'] ?? 'N/A') . '</p></td></tr>';
$body .= '</table></td></tr></table></body></html>';

// ── Build headers ─────────────────────────────────────────────────────────────
$hdrStr  = "MIME-Version: 1.0\r\n";
$hdrStr .= "Content-Type: text/html; charset=UTF-8\r\n";
$hdrStr .= "From: =?UTF-8?B?" . base64_encode('ESC Clinical Research') . "?= <$from>\r\n";
$hdrStr .= "Reply-To: $email\r\n";
$hdrStr .= "X-Mailer: PHP/" . phpversion();

// Envelope sender parameter for cPanel Exim mail server
$sendmail_params = "-f $from";

// ── Send ──────────────────────────────────────────────────────────────────────
$sent = @mail($to, $subject, $body, $hdrStr, $sendmail_params);

$_SESSION['email_history'][] = $now;
http_response_code(200);
echo json_encode(['ok' => true, 'mail_sent' => $sent]);
