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

if ("{$_SERVER['HTTP_HOST']}" == "backend") {
    $servername = "sql10.freemysqlhosting.net";
    $username = "sql10665879";
    $password = "lJBMYbGmu1";
    $dbname = "sql10665879";
}

if ("{$_SERVER['HTTP_HOST']}" == "smkassist.com.br") {
    $servername = "sql100.unaux.com";
    $username = "unaux_31132569";
    $password = "Cpf@0545";
    $dbname = "unaux_31132569_App";
}

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

?>