
<?php
 // 获取表单name的用户密码的数据
	include 'connect.php';


//获取前端传来的数据
 	  $my_nameg = $_POST['my_nameg'];
      $my_pass = $_POST['my_pass'];
//查找数据库
$sql = "select * from name where `username`='$my_nameg' and `password`= '$my_pass'";

	$result = $conn->query($sql);


	$num = $result->num_rows;
	// 用户名存在，返回0，
	if($num >= 1){
		echo "0";
		// 用户名不存在，添加，返回1
	} else if($num == 0){
		//添加数据
		 echo "1";
		 //失败返回2
	}else{
		echo "2";
	}

?>