<?php
include('../conexion/dbconnection.php');
// establecer y realizar consulta. guardamos en variable.

$data = json_decode(file_get_contents('php://input'), true);
$usuaro = $data['usuaro'];
$id = $data['id'];
$password = $data['password'] ;

$sql = "UPDATE `login` SET `password`='$password' WHERE id = $id";

$query = $dbh->prepare($sql);
$query->execute();
$results=$query->fetchAll(PDO::FETCH_OBJ);

$array = array();
$x=0;
foreach($results as $row){
    $array[$x] = $row;
    $x++;
}
$retornar["datos"]= $array;
echo json_encode($retornar);

?>