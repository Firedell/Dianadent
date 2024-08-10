<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    $to = "example@gmail.com";
    $subject = "Nová správa z rezervačného formulára";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

    $body = "Meno: $name\nE-mail: $email\nSpráva:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Správa bola úspešne odoslaná!";
    } else {
        echo "Pri odosielaní správy došlo k chybe.";
    }
} else {
    echo "Neplatná požiadavka.";
}
?>