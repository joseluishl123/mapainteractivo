<?php

include('../conexion/dbconnection.php');
$data = json_decode(file_get_contents('php://input') );
$nombre = $data['nombre'];
$descripcion = $data['descripcion'] ;
$latitud = $data['latitud '] ;
$longitud = $data['longitud'] ;
$imagen = $data['imagen'] ;


$sql="INSERT INTO `logar`( `nombre`, `descripcion`, `fecha`, `latitud`, `longitud`, `imagen`, `estadoid`) 
VALUES (:nombre,:descripcion,NOW(),:latitud,:longitud,:imagen,1)";
$query=$dbh->prepare($sql);

$query->bindParam(':nombre',$nombre);
$query->bindParam(':descripcion',$descripcion);
$query->bindParam(':latitud',$latitud);
$query->bindParam(':longitud',$longitud);
$query->bindParam(':imagen',$imagen);

 $query->execute();
 $retornar["respuesta"]= "datos insertados";
 $retornar["recibe"]= $data;
 echo json_encode($data);

 ?>