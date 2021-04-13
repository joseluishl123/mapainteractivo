<?php
include('../conexion/dbconnection.php');
// establecer y realizar consulta. guardamos en variable.
$sql = "SELECT * FROM logar";
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