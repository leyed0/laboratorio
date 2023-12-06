<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');


header("Content-Type: application/json; charset=UTF-8");

set_include_path('C:\Leyed\REPO\laboratorio\src\DB');
require_once(__DIR__ . '/routes/api.php');

//$rqst = explode("/", $_SERVER["REQUEST_URI"]);

// If it's a preflight request, respond with 204 No Content
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
}


?>