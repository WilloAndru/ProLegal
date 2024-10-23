<?php

include "conexion.php";

$identificacion = $_POST["identificacion"];

echo $identificacion;

$sql = "DELETE FROM users WHERE identificacion='$identificacion'";

if (mysqli_query($conn, $sql)) {
  echo "User deleted successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>







