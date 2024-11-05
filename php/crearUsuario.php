<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = trim($_POST["username"]);
    $identificacion = trim($_POST["identificaion"]);
    $fechaNacimiento = trim($_POST["date"]);
    $telefono = trim($_POST["telefono"]);
    $contraseña = trim($_POST["password"]);
    $confirmarContraseña = trim($_POST["confirm_password"]);

    if ($contraseña !== $confirmarContraseña) {
        header("Location: ../pages/register.php?error=password_mismatch");
        exit();
    }

    $sql = "SELECT * FROM users WHERE usuario = ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "s", $usuario);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    if (mysqli_num_rows($result) > 0) {
        header("Location: ../pages/register.php?error=user_exists");
        exit();
    } else {
        $hashedPassword = password_hash($contraseña, PASSWORD_DEFAULT);
        $rol = 3;
        $sqlInsert = "INSERT INTO users (usuario, identificacion, fechaNacimiento, telefono, contraseña, rol) VALUES (?, ?, ?, ?, ?, ?)";
        $stmtInsert = mysqli_prepare($conn, $sqlInsert);
        mysqli_stmt_bind_param($stmtInsert, "ssssss", $usuario, $identificacion, $fechaNacimiento, $telefono, $hashedPassword, $rol);

        if (mysqli_stmt_execute($stmtInsert)) {
            $userId = mysqli_insert_id($conn);
            header("Location: ../index.html?userId=$userId&username=$usuario&telefono=$telefono&identificacion=$identificacion&fechaNacimiento=$fechaNacimiento");
            exit();
        } else {
            header("Location: ../pages/register.html?error=registration_failed");
            exit();
        }
    }

    mysqli_close($conn);
}
?>
