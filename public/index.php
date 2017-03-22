<?php
/* http://slimphp.com/public/index.php/hello/vijay */
/* http://slimphp.com/public/index.php/api/services*/

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';
require '../src/config/db.php';

$app = new \Slim\App;
$app->get('/hello/{name}', function (Request $request, Response $response) {
    $name = $request->getAttribute('name');
    $response->getBody()->write("Hello, $name");

    return $response;
});

//Customers routes
require '../src/routes/services.php';

$app->run();