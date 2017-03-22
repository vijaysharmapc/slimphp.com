<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app = new \Slim\App;

//Get all services
$app->get('/api/services',function(Request $request,Response $response){

//echo 'services';
$sql = "SELECT * FROM services";

try{
   //GET DB OBJECT
	$db = new db();
	//CONNECT
	$db = $db->connect();

    $stmt = $db->query($sql);
    $customers = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;
    echo json_encode($customers);



}catch(PDOException $e){
   echo '{"error":{"text": '.$e->getMessage().'}';
}



})

?>
