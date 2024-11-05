<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $usuario = $_POST['usuario'][$id];
    $identificacion = $_POST['identificacion'][$id];
    $telefono = $_POST['telefono'][$id];
    $rol = $_POST['rol'][$id];

    $sql = "UPDATE users SET usuario=?, identificacion=?, telefono=?, rol=? WHERE id=?";
    $stmt = mysqli_prepare($conn, $sql);
    
    mysqli_stmt_bind_param($stmt, "ssssi", $usuario, $identificacion, $telefono, $rol, $id);

    if (mysqli_stmt_execute($stmt)) {
        header("Location: ../pages/listarUsuarios.php");
        exit();
    } else {
        echo "Error al actualizar el usuario: " . mysqli_error($conn);
    }

    mysqli_stmt_close($stmt);
}

mysqli_close($conn);
?>
