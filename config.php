<?
$servername = "localhost";
$username = "root"; // o tu nombre de usuario de MySQL
$password = ""; // o tu contraseña de MySQL
$dbname = "prolegal";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
