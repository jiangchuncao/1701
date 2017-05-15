
<?php
	include 'connect.php';
      $name = isset($_GET['_name']) ? $_GET['_name'] : '';
	  $url = isset($_GET['_bigurl']) ? $_GET['_bigurl'] : '';
	   $price = isset($_GET['_price']) ? $_GET['_price'] : '';
	  $gmsize = isset($_GET['_gmsize']) ? $_GET['_gmsize'] : '';
	   $gmnum = isset($_GET['_gmnum']) ? $_GET['_gmnum'] : '';

	//添加数据的实现

	//$sql = "insert into shoppingcar(name,url,price,num,size) values ('$name','$url','$price','$gmnum','$gmsize')"; 

	$sql = "select * from shoppingcar where `name`='$name' and `url`= '$url'";

	$result = $conn->query($sql);



	
	// //当前 email 不存在，执行插入操作
	$num = $result->num_rows;
	// 商品存在，返回0，
	if($num >= 1){
	 //更新数据库	
	 $sq2 = "UPDATE shoppingcar SET num='$gmnum' , size ='$gmsize' WHERE  name='$name'";
		//执行语句
		$result2 = mysqli_query($conn,$sq2);
		echo "0";
		// 商品不存在，添加，返回1
	} else if($num == 0){
		//添加数据
      $sq3 = "insert into shoppingcar(name,url,price,num,size) values ('$name','$url','$price','$gmnum','$gmsize')"; 
      // 执行语句
		 $result3 = mysqli_query($conn,$sq3);
		 echo "1";
		 //失败返回2
	}else{
		echo "2";
	}

                        
  



?>

