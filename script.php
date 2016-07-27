<?php
	$hits = file_get_contents("hits.txt");
	session_start();
	if(empty($_SESSION['visited'])) {
		$hits += 1;
		file_put_contents("hits.txt", $hits);
	}
	$_SESSION['visited'] = TRUE;
	echo $hits;
?>