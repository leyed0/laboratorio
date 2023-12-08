<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    exit(0);
}


require_once(__DIR__ . '/../models/UserModel.php');


class UserController {
    private $userModel;

    

    public function __construct($conn) {
        $this->userModel = new UserModel($conn);
    }

    public function register($data) {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $login = $data['login'];
            $password = $data['password'];
            $email = $data['email'];

            $this->userModel->registerUser($login, $password, $email);
            echo json_encode(['status' => 'success', 'message' => 'User registered successfully']);
        }
    }

    public function login($data) {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $login = $data['login'];
            $password = $data['password'];

            if ($this->userModel->loginUser($login, $password)) {
                echo json_encode(['status' => 'success', 'message' => 'Login successful']);
            } else {
                echo json_encode(['status' => 'error', 'message' => 'Invalid login or password']);
            }
        }
    }

    // Add other methods as needed
}
