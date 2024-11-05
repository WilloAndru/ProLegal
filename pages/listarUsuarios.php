<?php
include '../php/conexion.php';

$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql);

if (!$result) {
    die("Error en la consulta: " . mysqli_error($conn));
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ProLegal Solution - Lista de Usuarios</title>
    <link rel="stylesheet" href="../styles.css">
    <link rel="icon" href="../images/justicia.png" type="image/x-icon">
</head>
<body class="admin">
    <header>
        <a href="../index.html" onclick="()=>localStorage.clear()"><button>Cerrar sesión</button></a>
        <div>
            <img class='logo' src="../images/justicia.png" />
            <h5>PLS</h5>
        </div>
    </header>

    <section>
        <form method="post" action="../php/editarUsuarios.php"> 
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Usuario</th>
                        <th>Identificación</th>
                        <th>fechaNacimiento</th>
                        <th>Teléfono</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    if (mysqli_num_rows($result) > 0) {
                        while ($row = mysqli_fetch_assoc($result)) {
                            echo "<tr>";
                            echo "<td>" . htmlspecialchars($row['id']) . "</td>";
                            echo "<td><input type='text' name='usuario[" . $row['id'] . "]' value='" . htmlspecialchars($row['usuario']) . "' /></td>";
                            echo "<td><input type='text' name='identificacion[" . $row['id'] . "]' value='" . htmlspecialchars($row['identificacion']) . "' /></td>";
                            echo "<td><input type='text' name='fechaNacimiento[" . $row['id'] . "]' value='" . htmlspecialchars($row['fechaNacimiento']) . "' /></td>";
                            echo "<td><input type='text' name='telefono[" . $row['id'] . "]' value='" . htmlspecialchars($row['telefono']) . "' /></td>";
                            echo "<td><input type='text' name='rol[" . $row['id'] . "]' value='" . htmlspecialchars($row['rol']) . "' /></td>";
                            echo "</tr>";
                        }
                    } else {
                        echo "<tr><td colspan='7'>No hay usuarios disponibles</td></tr>";
                    }
                    ?>
                </tbody>
            </table>
        </form>
    </section>

</body>
</html>

<?php
mysqli_close($conn);
?>
