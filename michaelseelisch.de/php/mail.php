<?php
	$mail = $_POST['mail'];
	$name = $_POST['name'];
	$message = $_POST['text'];
	
	$to = "info@michaelseelisch.de";
	$subject = "Mail ueber " . $to;	
	$header = 'From:' . $mail . "\r\n" . 'Reply-To: ' . $mail . "\r\n" . 'X-Mailer: PHP/' . phpversion();
	
	if(mail($to, $subject, $message, $header))
	{
		echo "Danke f&uuml;r Ihre Nachricht!";
	}
	
	else
	{
		echo "Fehler beim Senden der Nachricht!";
	}
?>