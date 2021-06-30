<?php
    $destino= "a.bustinza@viralizationmkt.com"
    $correo = $_POST["email"];
    $contenido = "Correo del suscriptor: " . $correo;
    mail($destino, "Nuevo suscriptor desde Sitio Web", $contenido);
    header("Location:gracias.html");
?>