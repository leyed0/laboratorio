<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

require_once(__DIR__ . '/../config/database.php');
require_once(__DIR__ . '/../controllers/UserController.php');

$userController = new UserController($conn);

$data = json_decode(file_get_contents('php://input'), true);

// Define your routes
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($data['action'] === 'register') {
        $userController->register($data);
    } elseif ($data['action'] === 'login') {
        $userController->login($data);
    }
    // Add more routes as needed
}