<?php

include "conexion.php";

$identificacion = $_POST["identificacion"];

$sql = "SELECT * FROM users WHERE identificacion='$identificacion' ";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  while($row = mysqli_fetch_assoc($result)) {
    echo "Usuario: " . $row["usuario"]. "Tipo Usuario " . $row["rol"]. "<br>";
    ?>
     <form action="insertarEditarUsuario.php" method="post">
        <input type="text" name="usuario" id="usuario" value="<?php echo $row["usuario"]?>" required><br>
        <input type="date" name="fechaNacimiento" id="fechaNacimiento" value="<?php echo $row["fechaNacimiento"]?>" required><br>
        <input type="text" name="identificacion" id="identificacion" value="<?php echo $row["identificacion"]?>" required><br>
        <input type="text" name="telefono" id="telefono" value="<?php echo $row["telefono"]?>" required><br>
        <select name="tipoUsuario">
            <option value="1">Administrador</option>
            <option value="2">Asesor</option>
            <option value="3">Cliente</option>
        </select><br>
        <input type="submit" value="Enviar"><br>
    </form>

<?php
  }
} else {
  echo "0 results";
}

mysqli_close($conn);




?>







