<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ProLegal Solution</title>
    <link rel="stylesheet" href="../styles.css">
    <link rel="icon" href="../images/justicia.png" type="image/x-icon">
</head>

<body>

    <header class='header'>
        <a title="Home" href="../index.html">
            <img class="icon" src="../images/casa.png">
        </a>
        <a title="Perfil" href="login.php">
            <img class="icon" src="../images/perfil.png">
        </a>
        <a title="Solicitud" href="login.php">
            <img class="icon" src="../images/mensaje.png">
        </a>
    </header>

    <div class="login body">
        
        <?php
        if (isset($_GET['error'])) {
            if ($_GET['error'] == 'invalid_credentials') {
                echo '<p style="color: red;">Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.</p>';
            } 
        }
        ?>

        <form action="../php/validarUsuarios.php" method="post">
            <div>
                <img class="icon" src="../images/mensaje.png">
                <h4>Iniciar sesion</h4>
            </div>
            <label for="username">Usuario</label>
            <input type="text" id="username" name="username" required>
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Entrar</button>
        </form>
        <div class="div2">
            <h5>¿No tienes una cuenta?</h5>
            <a href="./register.html"><button>Registrate aqui</button></a>
        </div>
    </div>

</body>

</html>