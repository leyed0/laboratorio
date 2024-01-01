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



class UserModel {
    private $conn;

    public function __construct($conn) {
        $this->conn = $conn;
    }

    public function registerUser($login, $password, $email) {
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

        $stmt = $this->conn->prepare("INSERT INTO usuario (Login, Senha, Email, Criado, Desde) VALUES (?, ?, ?, ?, ?)");
        $datetime = date('Y-m-d H:i:s');
        $stmt->execute([$login, $hashedPassword, $email, $datetime, $datetime]);
    }

    public function loginUser($login, $password) {
        $stmt = $this->conn->prepare("SELECT * FROM `usuario` WHERE `Login` = ?;");
        $stmt->execute([$login]);
        $result = $stmt->get_result();
        $user = $result->fetch_assoc();

        if($user){
            if(password_verify($password, $user['Senha'])){
                $now = date('Y-m-d H:i:s');
                $stmt2 = $this->conn->prepare("UPDATE usuario SET UltLogin = ? WHERE ID = ?;");
                $stmt2->execute([$now, $user['ID']]);

                return ([true, $user]); // Login successful
            }
            else{
                return ([false, 'senha']);
            }
        }
        else{
            return([false, 'login']);
        }
    }

    // Add other methods as needed
}
