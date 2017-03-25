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
    $services = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;
    echo json_encode($services);



}catch(PDOException $e){
   echo '{"error":{"text": '.$e->getMessage().'}';
}



});


//Get one service
$app->get('/api/service/{id}',function(Request $request,Response $response){

$id = $request->getAttribute('id');
//echo 'services';
$sql = "SELECT * FROM services where srv_id = $id";

try{
   //GET DB OBJECT
	$db = new db();
	//CONNECT
	$db = $db->connect();

    $stmt = $db->query($sql);
    $service = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;
    echo json_encode($service);



}catch(PDOException $e){
   echo '{"error":{"text": '.$e->getMessage().'}';
}



});



//Save the message
$app->post('/api/contact/add',function(Request $request,Response $response){

$name = $request->getParam('name');
$email = $request->getParam('email');
$contact = $request->getParam('contact');
$message = $request->getParam('message');


//echo 'services';
$sql = "INSERT INTO contact (name,email,contact,message) values (:name,:email,:contact,:message)";

try{
   //GET DB OBJECT
	$db = new db();
	//CONNECT
	$db = $db->connect();
    $stmt = $db->prepare($sql);

    $stmt->bindParam(':name',$name);
    $stmt->bindParam(':email',$email);
    $stmt->bindParam(':contact',$contact);
    $stmt->bindParam(':message',$message);
    
    $stmt->execute();

    echo '{"notice":{"text":"0"}}';

}catch(PDOException $e){
   echo '{"error":{"text": '.$e->getMessage().'}';
}



})








?>
