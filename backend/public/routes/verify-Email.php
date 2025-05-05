<?php
require("../../_inc/init.php");
if ($_SERVER['REQUEST_METHOD'] != "GET") {
    http_response_code(405);
    $res->set_status("error");
    $res->set_error_message("Method Not Allowed");
    $res->response();

    exit;
}

$token = $_GET['token'] ?? '';

$sql = "SELECT id FROM user WHERE email_verification_token = :token";
$params = ['token' => $token];
$response = $db->execute_query($sql, $params);



if ($response->status === 'success') {
    foreach ($response->results as $user) {
        $sql = "UPDATE user SET email_verified = 1, email_verification_token = NULL WHERE id = :id";
        $params = ['id' => $user->id];
        $response = $db->execute_query($sql, $params);

        $res->response();
    }
} else {
    $res->set_status('error');
    $res->set_error_message($response->mensagem);
    $res->response();
    exit;
}
