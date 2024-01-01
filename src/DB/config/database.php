<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

if ("{$_SERVER['HTTP_HOST']}" == "backend") {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "teste";
}

if ("{$_SERVER['HTTP_HOST']}" == "smkassist.com.br") {
    $servername = "sql100.unaux.com";
    $username = "unaux_31132569";
    $password = "Cpf@0545";
    $dbname = "unaux_31132569_App";
}

try {
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) { 
        die("Connection failed: " . $conn->connect_error); 
    } 
} catch (Exception $e) {
    echo "Connection failed: " . $e->getMessage();
}

?>