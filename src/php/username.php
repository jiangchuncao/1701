<?php
	include 'connect.php';

	 $my_nameg = $_POST['my_nameg'];
      $my_pass = $_POST['my_pass'];






$sql = "select * from name where `username`='$my_nameg' and `password`= '$my_pass'";

	$result = $conn->query($sql);


	$num = $result->num_rows;
	// 用户名存在，返回0，
	if($num >= 1){
		echo "0";
		// 用户名不存在，添加，返回1
	} else if($num == 0){
		//添加数据
      $sq3 = "insert into name(username,password) values ('$my_nameg','$my_pass')"; 
      // 执行语句
		 $result3 = mysqli_query($conn,$sq3);
		 echo "1";
		 //失败返回2
	}else{
		echo "2";
	}



	//添加数据的实现
	 //$sql = "insert into name(username,password) values ('$my_nameg','$my_pass')"; 
	// $result = mysqli_query($conn,$sql);
	
// //删除id=1的数据
// 	$sql = "delete from user where id='1'";
// 	 $result2 = mysqli_query($conn,$sql);
// 	 if($result2){
//  	echo "删除成功!<a href='message.php'>返回</a>";
//  }else{
//  	echo "删除失败!<a href='message.php'>返回</a>";
//  }


// 查询数据
// $sql = 'select * from user order by age desc limit '. ($page-1)*2 .',2';
// 	$sql = 'select * from user ';

// // 查询数据库获取数据
// 	$result = $conn->query($sql);

// //使用查询结果集
// 	$row = $result->fetch_all(MYSQLI_ASSOC);


// 	echo json_encode($row,JSON_UNESCAPED_UNICODE);


?>