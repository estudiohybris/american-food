<?php

    // Asegúrate de que se esté utilizando el método POST
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405); // Método no permitido
        echo 'Método no permitido.';
        exit;
    }

    // Ruta donde están los archivos de las plantillas
    $template_path = '../assets/email_templates/';

    // Asuntos del correo
    $subject_admin = 'Natalia Giannantonio: Recibiste un mensaje de contacto desde la web';
    $subject_user = 'Natalia Giannantonio: Confirmación de recepción de tu mensaje';

    // Verifica si los campos requeridos están presentes y no están vacíos
    if (empty($_POST['nombre_completo']) || empty($_POST['email']) || empty($_POST['mensaje'])) {
        echo('Datos requeridos incompletos.');
        exit;
    }

    // Filtra y valida los datos de entrada para mayor seguridad
    $nombre_completo = htmlspecialchars(strip_tags($_POST['nombre_completo']));
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $mensaje = htmlspecialchars(strip_tags($_POST['mensaje']));

    // Si el email no es válido, muestra un error
    if (!$email) {
        echo('Correo electrónico inválido.');
        exit;
    }

    // Cargar la plantilla para el administrador
    $contenido_admin = file_get_contents($template_path . 'admin_email_template.html');

    // Cargar la plantilla para el usuario
    $contenido_user = file_get_contents($template_path . 'user_email_template.html');

    // --- Reemplazar los valores en las plantillas ---
    $contenido_admin = str_replace(
        ['[[nombre_completo]]', '[[email]]', '[[mensaje]]'],
        [$nombre_completo, $email, $mensaje],
        $contenido_admin
    );

    $contenido_user = str_replace(
        ['[[nombre_completo]]', '[[mensaje]]'],
        [$nombre_completo, $mensaje],
        $contenido_user
    );

    // Encabezados del correo para el administrador
    $headers_admin  = "From: $nombre_completo <$email>\r\n";
    $headers_admin .= "Reply-To: $email\r\n";
    $headers_admin .= "MIME-Version: 1.0\r\n";
    $headers_admin .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Encabezados del correo de confirmación para el usuario
    $headers_user  = "From: Natalia Giannantonio <nataliagiannantonio@gmail.com>\r\n";
    $headers_user .= "Reply-To: nataliagiannantonio@gmail.com\r\n";
    $headers_user .= "MIME-Version: 1.0\r\n";
    $headers_user .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Enviar correo al administrador
    $admin_emails = ['nataliagiannantonio@gmail.com'];
    foreach ($admin_emails as $admin_email) {
        mail($admin_email, $subject_admin, $contenido_admin, $headers_admin);
    }

    // Enviar correo de confirmación al usuario
    if (mail($email, $subject_user, $contenido_user, $headers_user)) {
        echo('success');
    } else {
        echo('error');
    }

?>