
<?php
	include 'connect.php';
      $name = isset($_GET['_name']) ? $_GET['_name'] : '';

      //删除id=1的数据
	$sql = "delete from shoppingcar where name='$name'";

	 $result2 = mysqli_query($conn,$sql);

	 if($result2){
 	echo "删除成功!";
 }else{
 	echo "删除失败!";
 }
	                       

?>

