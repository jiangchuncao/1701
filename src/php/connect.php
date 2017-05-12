<?php
//连接数据库
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = 'd5d';

	 //创建连接
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	mysqli_query($conn,"set names utf8");

	//检测连接
	if ($conn->connect_error) {
	    die("连接失败: " . $conn->connect_error);

	};
	
?>