<?php

use bng\System\Database;

header('Content-Type: application/json; charset=UTF-8');

require_once('config.php');
require_once('Database.php');
require_once('response.php');
require_once('helper.php');

date_default_timezone_set('America/Sao_Paulo');

$res = new Response();

if(!API_ACTIVE)
{
    $res->set_status('error');
    $res->set_response_data(API_MESSAGE);
    $res->response();
}

$request_method = $_SERVER['REQUEST_METHOD'];

if(!isset($_SERVER['PHP_AUTH_USER']))
{
    $res->set_status('error');
    $res->set_error_message('Missing the credentials.');
    $res->response();
}

$mysql_config = [
    'server' => MYSQL_HOST,
    'dbname' => MYSQL_DBNAME,
    'user' => MYSQL_USER,
    'pass' => MYSQL_PASS
];

$db = new Database($mysql_config);

$user = $_SERVER['PHP_AUTH_USER'];
$pass = $_SERVER['PHP_AUTH_PW'];

$params = [
    ':user' => $user
];

$results = $db->execute_query('SELECT * FROM users WHERE name = :user', $params);
if($results->affected_rows == 0 )
{
    $res->set_status('error');
    $res->set_error_message('The system didn´t find any users with this username.');
    $res->response();
}

if($pass !== $results->results[0]->passwrd)
{
    $res->set_status('error');
    $res->set_error_message("This password is incorrect");
    $res->response();
}