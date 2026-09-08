<?php
/**
 * ES-CR Contact Form Backend
 * Uses Direct Send / Native Mail to route emails to Microsoft 365
 */

header('Content-Type: application/json; charset=utf-8');

// 1. CORS Headers
// Allow requests only from esclinical.com (and localhost for dev)
$allowed_origins = [
    'https://esclinical.com',
    'https://www.esclinical.com',
    'http://localhost:3000',
    'http://localhost:3002'
];

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: " . $origin);
    header("Access-Control-Allow-Headers: Content-Type");
} else if ($origin !== '') {
    // If there's an origin and it's not allowed, block it
    http_response_code(403);
    echo json_encode(['error' => 'Forbidden']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit;
}

// 2. Rate Limiting via Sessions
session_start();
$now = time();
if (!isset($_SESSION['email_history'])) {
    $_SESSION['email_history'] = [];
}

// Keep only timestamps from the last 1 hour
$_SESSION['email_history'] = array_filter($_SESSION['email_history'], function($timestamp) use ($now) {
    return ($now - $timestamp) < 3600;
});

// Max 5 emails per hour per session
if (count($_SESSION['email_history']) >= 5) {
    http_response_code(429);
    echo json_encode(['error' => 'Too many requests. Please try again later.']);
    exit;
}

// Get the raw POST data
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON payload']);
    exit;
}

// 3. Honeypot check
if (!empty($data['website_url'])) {
    // If the hidden website_url field is filled, it's a bot. Silently drop the request.
    http_response_code(200);
    echo json_encode(['ok' => true]);
    exit;
}

// ---------------------------------------------------------
// 4. Extract and sanitize fields
// ---------------------------------------------------------

// Helper to remove newlines for fields used in headers to prevent header injection
function sanitizeForHeader($input) {
    $input = trim(strip_tags($input));
    $input = str_replace(["\r", "\n", "%0a", "%0d"], '', $input);
    return $input;
}

$subject = isset($data['Sujet']) ? sanitizeForHeader($data['Sujet']) : 'Nouveau message depuis le site web';
$firstName = isset($data['Prénom']) ? sanitizeForHeader($data['Prénom']) : '';
$lastName = isset($data['Nom']) ? sanitizeForHeader($data['Nom']) : '';
$visitorEmail = isset($data['email']) ? sanitizeForHeader($data['email']) : '';
$phone = isset($data['Téléphone']) ? trim(strip_tags($data['Téléphone'])) : 'N/A';
$company = isset($data['Entreprise']) ? trim(strip_tags($data['Entreprise'])) : 'N/A';
$position = isset($data['Fonction']) ? trim(strip_tags($data['Fonction'])) : 'N/A';
$message = isset($data['Message']) ? trim(strip_tags($data['Message'])) : '';

// ---------------------------------------------------------
// 5. Validation
// ---------------------------------------------------------
if (empty($firstName) || empty($lastName) || empty($visitorEmail) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

if (!filter_var($visitorEmail, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address format']);
    exit;
}

// ---------------------------------------------------------
// 6. Email Configuration (Direct Send to M365)
// ---------------------------------------------------------
$to = 'contact@esclinical.com';
$fromEmail = 'website@esclinical.com';

// ---------------------------------------------------------
// 7. Construct Email Body
// ---------------------------------------------------------
$body = "Un nouveau message a été envoyé depuis le formulaire du site web ES-CR.\n\n";
$body .= "---------------------------------------------------\n";
$body .= "Sujet      : " . $subject . "\n";
$body .= "Nom        : " . $lastName . "\n";
$body .= "Prénom     : " . $firstName . "\n";
$body .= "E-mail     : " . $visitorEmail . "\n";
$body .= "Téléphone  : " . $phone . "\n";
$body .= "Entreprise : " . $company . "\n";
$body .= "Fonction   : " . $position . "\n";
$body .= "---------------------------------------------------\n\n";
$body .= "Message :\n\n" . $message . "\n";

// ---------------------------------------------------------
// 8. Construct Email Headers
// ---------------------------------------------------------
$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/plain; charset=utf-8';
$headers[] = 'From: ES-CR Website <' . $fromEmail . '>';
$headers[] = 'Reply-To: ' . $firstName . ' ' . $lastName . ' <' . $visitorEmail . '>';
$headers[] = 'X-Mailer: PHP/' . phpversion();

// ---------------------------------------------------------
// 9. Send the Email
// ---------------------------------------------------------
$mailSent = mail($to, $subject, $body, implode("\r\n", $headers));

if ($mailSent) {
    // Record successful attempt for rate limiting
    $_SESSION['email_history'][] = $now;
    
    http_response_code(200);
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Internal server error while sending email']);
}
