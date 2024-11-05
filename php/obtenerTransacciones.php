<?php
include 'conexion.php';

header('Content-Type: application/json');

$userId = $_GET['userId'];

$sql = "SELECT descripcion, valor, mensaje FROM transactions WHERE idCliente = ?";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "s", $userId);
mysqli_stmt_execute($stmt);

$result = mysqli_stmt_get_result($stmt);
$transacciones = [];

while ($row = mysqli_fetch_assoc($result)) {
    $transacciones[] = $row;
}

echo json_encode($transacciones);

mysqli_close($conn);
?>
