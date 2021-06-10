<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
	<title>PHP Action Page</title>
</head>

<body>

<?php
   	
   	$myFile= fopen("newfile.txt", "a+") or die("unable to store name");
   	
   	fwrite($myFile, $_POST["name"]);
   	fwrite($myFile, ",");
   	fwrite($myFile, $_POST["email"]);
   	fwrite($myFile, "\n");
   	
   	fclose($myFile);
   	
?>
	<p>thanks</p>

</body>
</html>