<?php
	error_reporting( E_ALL );
	ini_set("display_errors", 1);

	include_once "classes/Page_Data.class.php";
	$pageData = new Page_Data();
	$pageData->title="Dynamic Image Gallery";

	
	$pageData->content= include_once "views/navigation.php";
	$pageData->addCSS('css/layout.css');
	$pageData->addCSS('css/navigation.css');

	$userClicked = isset($_GET['page']);
	if($userClicked){
		$fileToLoad=$_GET['page'];
			}else{
		$fileToLoad ="gallery";
	}
	$pageData->content .= include_once "views/$fileToLoad.php";

	$page= include_once "templates/page.php";

	echo $page;
