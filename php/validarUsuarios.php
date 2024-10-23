<?php

include 'conexion.php';

$usuario = $_POST["usuario"];
$contraseña = $_POST["contraseña"];

$sql = "SELECT * FROM users WHERE usuario='$usuario' AND contraseña='$contraseña' ";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  while($row = mysqli_fetch_assoc($result)) {
    echo "Usuario: " . $row["usuario"]. "Tipo Usuario " . $row["rol"]. "<br>";
    
        $tipoUsuario = $row["rol"];
        echo $tipoUsuario;
        
        switch ($tipoUsuario)
        {
          case "1": header ("Location: /pages/admin.html");
          break;

          case "2": header ("Location: ../index.html");
        }
  }
} else {
  echo "0 results";
}

mysqli_close($conn);

?>