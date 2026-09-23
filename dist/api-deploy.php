<?php
/**
 * ESC Clinical Research - Direct Deployment Handler
 * Safely receives dist zip from GitHub Actions and extracts to public_html.
 */

// Override memory & execution limits
@ini_set('memory_limit', '256M');
@ini_set('max_execution_time', '300');
@set_time_limit(300);

header('Content-Type: application/json; charset=utf-8');

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
    $errCode = $_FILES['zip_file']['error'] ?? 'missing';
    $errMsg = match((int)$errCode) {
        UPLOAD_ERR_INI_SIZE   => 'File exceeds upload_max_filesize in php.ini',
        UPLOAD_ERR_FORM_SIZE  => 'File exceeds MAX_FILE_SIZE directive',
        UPLOAD_ERR_PARTIAL    => 'File was only partially uploaded',
        UPLOAD_ERR_NO_FILE    => 'No file was uploaded',
        UPLOAD_ERR_NO_TMP_DIR => 'Missing temporary upload directory',
        UPLOAD_ERR_CANT_WRITE => 'Failed to write file to disk',
        UPLOAD_ERR_EXTENSION  => 'A PHP extension stopped the file upload',
        default               => 'Upload error'
    };
    http_response_code(400);
    echo json_encode([
        'status' => 0,
        'error' => "Upload error (code $errCode): $errMsg",
        'max_upload_size' => ini_get('upload_max_filesize'),
        'post_max_size' => ini_get('post_max_size')
    ]);
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
