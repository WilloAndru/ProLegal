<?php
 include 'conexion.php';
 ?>

<!DOCTYPE html>
<html>
    <title>ProLegal Solutions</title>
    <head>
        <meta charset="utf-8"/>
        <link href="/styles.css"  rel="stylesheet">
    </head>
    <body>
        <section>
            <article class="article4">
                <img src="../Imagenes/511506.png">
            </article>
            <article class="article4">
                <p class="titulo_article">Listar Usuarios </p>

            <?php

            $sql = "SELECT * FROM users";
            $result = mysqli_query($conn, $sql);

            if (mysqli_num_rows($result) > 0) {
            while($row = mysqli_fetch_assoc($result)) {
                echo "Usuario: " . $row["usuario"]. " - Tipo Usuario " . $row["rol"]. "<br>";
                ?>
                    <input type="text" name="usuario" id="usuario" value="<?php echo $row["usuario"]; ?>" > <?php
            }
            } else {
            echo "0 results";
            }
            mysqli_close($conn);
            ?>    

            </article>   
        </section>
    </body>
</html>