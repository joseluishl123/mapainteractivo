<?php

include('../conexion/dbconnection.php');

$data = json_decode(file_get_contents('php://input'), true);
$id = $data['id'] ;


$sql="DELETE FROM logar WHERE id = $id";
$query=$dbh->prepare($sql);

$query->bindParam(':id',$nombre);  


 $query->execute();
 $data['imagen']="";
 $retornar["respuesta"]= "datos insertados";
 $retornar["recibe"]= $data;
 $retornar["sql"]= $sql;
 $retornar["cnn"]= $dbh;
 echo json_encode($retornar);

 ?>