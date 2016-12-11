<?php

$email = $_POST['subscribe'];

$fp = fopen("list.txt","a");   //a is for append
if (fputs($fp, "$email" . "\n")){
	echo 'sent';
}
else
{
	echo 'failed';
}
fclose($fp);

?>