<?php

include "conexion.php";

$usuario = $_POST["usuario"];
$identificaion = $_POST["identificacion"];
$fechaNacimiento = $_POST["fechaNacimiento"];
$telefono = $_POST["telefono"];

$tipoCaso = $_POST["tipoCaso"];
$descriptionCaso = $_POST["descriptionCaso"];
$valorCaso = $_POST["valorCaso"];

echo $tipoCaso;
echo $descriptionCaso;
echo $valorCaso;

$sql = "INSERT INTO transactions (idCliente, valor, tipo, descripcion)
VALUES ('$identificacion', '$valorCaso', '$tipoCaso', '$descripcionCaso')";

if (mysqli_query($conn, $sql)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>




