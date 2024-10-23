<?php

include "conexion.php";

$usuario = $_POST["usuario"];
$fechaNacimiento = $_POST["fechaNacimiento"];
$identificacion = $_POST["identificacion"];
$contraseña = $_POST["contraseña"];
$telefono = $_POST["telefono"];
$rol = $_POST["rol"];

echo $identificacion;

$sql = "UPDATE users SET usuario='$usuario', fechaNacimiento='$fechaNacimiento', identificacion='$identificacion', contraseña='$contraseña', telefono='$telefono', rol='$rol' WHERE identificacion='$identificacion'";

if (mysqli_query($conn, $sql)) {
  echo "User udated successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>







