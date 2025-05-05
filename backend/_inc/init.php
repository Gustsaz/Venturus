<?php

use bng\System\Database;

// as portas que pode, mudar quando realizar o deploy
header("Access-Control-Allow-Origin: http://127.0.0.1:5500");

// metodos que pode 
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

// headers que pode 
header("Access-Control-Allow-Headers: Content-Type, Authorization");


header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

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

$mysql_config = [
    'server' => MYSQL_HOST,
    'dbname' => MYSQL_DBNAME,
    'user' => MYSQL_USER,
    'pass' => MYSQL_PASS
];

$db = new Database($mysql_config);
