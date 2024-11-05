<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $descripcion = trim($_POST["descripcion"]);
    $numeroAsesoria = trim($_POST["numeroAsesoria"]);
    $costoAsesoria = trim($_POST["costoAsesoria"]);
    $userId = trim($_POST["userId"]);

    $sqlInsert = "INSERT INTO transactions (descripcion, tipo, valor, idCliente) VALUES (?, ?, ?, ?)";
    $stmtInsert = mysqli_prepare($conn, $sqlInsert);
    
    mysqli_stmt_bind_param($stmtInsert, "ssss", $descripcion, $numeroAsesoria, $costoAsesoria, $userId);

    if (mysqli_stmt_execute($stmtInsert)) {
        header("Location: ../index.html?success=consulta_enviada");
        exit();
    } else {
        header("Location: ../pages/formularioConsulta.html?error=registro_fallido");
        exit();
    }

    mysqli_close($conn);
}
?>
