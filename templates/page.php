<?php
return"<!DOCTYPE html>
	<html>
	<head>
	<title>$pageData->title</title>
	<meta http-equiv='Content-Type' content='text/html;charset=utf8' />
	$pageData->css
	$pageData->embeddedStyle
	</head>
	<body>
	$pageData->content
	</body>
	</html>";
	?>