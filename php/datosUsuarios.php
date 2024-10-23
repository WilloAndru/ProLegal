<?php

include "conexion.php";

$usuario = $_POST["usuario"];
$fechaNacimiento = $_POST["fechaNacimiento"];
$identificacion = $_POST["identificacion"];
$contraseña = $_POST["contraseña"];
$telefono = $_POST["telefono"];
$rol = $_POST["rol"];

$sql = "INSERT INTO usuarios (usuario, fechaNacimiento, telefono, identificacion, contraseña, rol)
VALUES ('$usuario', '$fechaNacimiento', '$telefono', '$identificacion', '$contraseña', '$rol')";

if (mysqli_query($conn, $sql)) {
  echo "New user created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>




