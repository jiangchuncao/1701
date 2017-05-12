
<?php
	include 'connect.php';

	$sql = 'select * from goodlist ';

// 查询数据库获取数据
	$result = $conn->query($sql);

//使用查询结果集
	$row = $result->fetch_all(MYSQLI_ASSOC);


	echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>