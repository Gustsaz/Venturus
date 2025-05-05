<?php
require("../../_inc/init.php");

require_once __DIR__ . '/../../_inc/validation/singupValidator.php';

if ($_SERVER['REQUEST_METHOD'] != "POST") {
    http_response_code(405);
    $res->set_status("error");
    $res->set_error_message("Method Not Allowed");
    $res->response();

    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$errors = validateSignup($data);

if (!empty($errors)) {
    http_response_code(400);
    $res->set_status("error");
    $res->set_error_message("Invalid Form");
    $res->set_response_data($errors);
    $res->response();
    exit;
}



$email = $data['email'];
$name = $data['name'];
$password = password_hash($data['password'], PASSWORD_DEFAULT);
$token = bin2hex(random_bytes(32));


$sql = "INSERT INTO user (name, email,password,email_verification_token) VALUES (:name, :email,:password,:token)";
$params = ['name' => $name, 'email' => $email, "password" => $password, "token" => $token];
$response = $db->execute_non_query($sql, $params);

if ($response->status != 'success') {
    $res->set_status('error');
    $res->set_error_message($response->mensagem);
    $res->response();
    exit;
}


//mudar dps
$verificationLink = "https://localhost/verify-email?token=$token";
$subject = "Confirme seu e-mail";
$message = "Ola $name,\n\nClique no link abaixo para confirmar seu e-mail:\n$verificationLink";
$headers = "From: etec.connect0@gmail.com";

$sen = mail($email, $subject, $message, $headers);
if ($sen) {
    $res->response();
} else {
    $res->set_status('error');
    $res->set_error_message("erro interno");
    $res->response();
}
exit;
?>