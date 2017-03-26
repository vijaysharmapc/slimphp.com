<?php

//NOT IN USE

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app = new \Slim\App;

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
