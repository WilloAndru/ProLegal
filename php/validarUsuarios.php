<?php

include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = trim($_POST["username"]);
    $contraseña = trim($_POST["password"]);

    $sql = "SELECT * FROM users WHERE usuario = ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "s", $usuario);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        if (password_verify($contraseña, $row["contraseña"])) {
            echo "Usuario: " . $row["usuario"] . " Tipo Usuario: " . $row["rol"] . "<br>";

            $tipoUsuario = $row["rol"];
            $userId = $row["id"];
            $username = $row["usuario"];
            $identificacion = $row["identificacion"];
            $fechaNacimiento = $row["fechaNacimiento"];
            $telefono = $row["telefono"];
        
            switch ($tipoUsuario) {
                case "1":
                    header("Location: ../pages/admin.html?userId=$userId&username=$username&telefono=$telefono&identificacion=$identificacion&fechaNacimiento=$fechaNacimiento");
                    exit();

                case "2":
                    header("Location: ../pages/asesor.php?userId=$userId&username=$username&telefono=$telefono&identificacion=$identificacion&fechaNacimiento=$fechaNacimiento");
                    exit();

                case "3":
                    header("Location: ../index.html?userId=$userId&username=$username&telefono=$telefono&identificacion=$identificacion&fechaNacimiento=$fechaNacimiento");
                    exit();
            }
        } else {
            header("Location: ../pages/login.php?error=invalid_credentials");
            exit();
        }
    } else {
        header("Location: ../pages/login.php?error=invalid_credentials");
        exit();
    }
}

mysqli_close($conn);
?>
