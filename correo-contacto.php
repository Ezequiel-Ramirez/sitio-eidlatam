<?php
    $destino= "a.bustinza@viralizationmkt.com";
    $nombre = $_POST["nombre"];
    $telefono = $_POST["telefono"];
    $correo = $_POST["email"];
    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTeléfono: " . $telefono . "\nDesea Inscribirse a un curso ";
    mail($destino, "Nueva consulta o inscripción desde Sitio Web", $contenido);
    header("Location:graciascontacto.html");
?>