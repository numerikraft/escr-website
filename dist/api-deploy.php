<?php
/**
 * ESC Clinical Research - Direct Deployment Handler
 * Safely receives dist zip from GitHub Actions and extracts to public_html.
 */

header('Content-Type: application/json; charset=utf-8');

// Disable execution limit for extraction
@set_time_limit(300);

$DEPLOY_KEY = 'esclinical_deploy_key_2026_numerikraft';

// Check Auth Token
$authHeader = $_SERVER['HTTP_X_DEPLOY_TOKEN'] ?? $_POST['deploy_token'] ?? '';
if (empty($authHeader) || $authHeader !== $DEPLOY_KEY) {
    http_response_code(403);
    echo json_encode(['status' => 0, 'error' => 'Unauthorized - Invalid or missing token']);
    exit;
}

// Check uploaded file
if (!isset($_FILES['zip_file']) || $_FILES['zip_file']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['status' => 0, 'error' => 'No zip file provided or upload error code: ' . ($_FILES['zip_file']['error'] ?? 'none')]);
    exit;
}

$tmpPath = $_FILES['zip_file']['tmp_name'];
$targetDir = __DIR__; // /public_html

if (!class_exists('ZipArchive')) {
    http_response_code(500);
    echo json_encode(['status' => 0, 'error' => 'ZipArchive PHP extension is not enabled on server']);
    exit;
}

$zip = new ZipArchive();
$res = $zip->open($tmpPath);

if ($res === TRUE) {
    $zip->extractTo($targetDir);
    $zip->close();
    @unlink($tmpPath);
    echo json_encode([
        'status' => 1,
        'message' => 'Deployment successful! Site updated in public_html.',
        'timestamp' => date('Y-m-d H:i:s')
    ]);
    exit;
} else {
    http_response_code(500);
    echo json_encode(['status' => 0, 'error' => 'Failed to open zip archive, error code: ' . $res]);
    exit;
}
