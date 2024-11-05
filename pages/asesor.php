<?php
include '../php/conexion.php';

$sql = "SELECT * FROM transactions";
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
    <title>ProLegal Solution - Transacciones</title>
    <link rel="stylesheet" href="../styles.css">
    <link rel="icon" href="../images/justicia.png" type="image/x-icon">
</head>
<body class="admin">
    <header>
        <a href="../index.html" onclick="cerrarSesion()"><button>Cerrar sesión</button></a>
        <div>
            <img class='logo' src="../images/justicia.png" />
            <h5>PLS</h5>
        </div>
    </header>

    <section>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>IdCliente</th>
                    <th>Valor</th>
                    <th>Tipo</th>
                    <th>Descripcion</th>
                    <th>Mensaje</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <?php
                if (mysqli_num_rows($result) > 0) {
                    while ($row = mysqli_fetch_assoc($result)) {
                        echo "<tr>";
                        echo "<td>" . htmlspecialchars($row['id']) . "</td>";
                        echo "<td>" . htmlspecialchars($row['idCliente']) . "</td>";
                        echo "<td>" . htmlspecialchars($row['valor']) . "</td>";
                        echo "<td>" . htmlspecialchars($row['tipo']) . "</td>";
                        echo "<td>" . htmlspecialchars($row['descripcion']) . "</td>";
                        echo "<td><textarea data-id='" . $row['id'] . "' class='mensaje'>" . htmlspecialchars($row['mensaje']) . "</textarea></td>";
                        echo "<td><button onclick='actualizarMensaje(" . $row['id'] . ")'><img class='logo' src='../images/mensaje.png' /></button></td>";
                        echo "</tr>";
                    }
                } else {
                    echo "<tr><td colspan='7'>No hay transacciones disponibles</td></tr>";
                }
                ?>
            </tbody>
        </table>
    </section>

    <script>
        function cerrarSesion() {
            localStorage.clear();
        }

        function actualizarMensaje(id) {
            const mensaje = document.querySelector(`textarea[data-id='${id}']`).value;
            fetch('../php/actualizarMensaje.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id, mensaje })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Mensaje actualizado correctamente');
                } else {
                    alert('Error al actualizar el mensaje');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error al actualizar el mensaje');
            });
        }
    </script>
</body>
</html>

<?php
mysqli_close($conn);
?>
