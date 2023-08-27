<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'info@avalanche.com';

$email_subject = 'New form Submission';

$email_body = "User Name: $name.\n".
              "User Email: $name.\n".
              "User subject : $name.\n". 
              "User Message: $name.\n";
               
    
$to = 'serihakim6@gmail.com';

$headers = "from: $email_from\r\n";

$headers = "reply-to: $visitor_email \r\n";


mail($to,$email-subject,$email_body,$headers);

header("Location: contact.html");




?>