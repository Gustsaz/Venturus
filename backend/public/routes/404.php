<?php 
header('Content-Type: application/json; charset=UTF-8');

echo json_encode([
    "status"=>'error',
    "error_message"=> "Not found",

]);
exit;
?>