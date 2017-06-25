<?php
//连接数据库
$servername = "localhost";
$username = "root";
$password = "";//用户密码没有为空
$dbname = "wanghuijun";
$conn = new mysqli($servername, $username,$password, $dbname);
	
// 解决中文乱码问题
//设置连接字符集编码
$sql = "SET CHARACTER SET 'UTF8'";
$conn->query($sql);
//告诉服务器将来从这个客户端传来的信息采用字符集utf8
$sql = "SET NAMES 'UTF8'";
$conn->query($sql);

// 接收参数	
$ac=isset($_POST["ac"]) ? $_POST["ac"]:"";
$username=isset($_POST["username"]) ? $_POST["username"]:"";
$password = isset($_POST["password"]) ? $_POST["password"] : "";
$useremail = isset($_POST["useremail"]) ? $_POST["useremail"] : "";
$userids = isset($_POST["userids"]) ? $_POST["userids"] : "";
$userphone = isset($_POST["userphone"]) ? $_POST["userphone"] : "";
$userquestion = isset($_POST["userquestion"]) ? $_POST["userquestion"] : "";
$useranswer = isset($_POST["useranswer"]) ? $_POST["useranswer"] : "";
$useraddress = isset($_POST["useraddress"]) ? $_POST["useraddress"] : "";


if( $username == "" ){
	echo '{"state":"error","text":"请输入用户名"}';
}else{
	switch( $ac ){
		case "0":
			//插入数据
			if( isHasUser() === true ){
				echo '{"state":"error","text":"用户名被占用"}';
			}else{							
				$ip = $_SERVER["REMOTE_ADDR"];// 获取ip			
				// sql插入语句
				$sql = "insert into userlist (username, password, useremail, userids, userphone, userquestion, 
				useranswer, useraddress, ip, addTime) values ('".$username."', 
				'".$password."', 
				'".$useremail."',
				'".$userids."',
				'".$userphone."',
				'".$userquestion."',
				'".$useranswer."',
				'".$useraddress."',
				'".$ip."', 
				now())";
				$conn->query($sql); // 数据进入数据表中
				$userid = mysqli_insert_id($conn);//取出插入的数据的编号	
				echo '{"state":"success","text":"用户注册成功","userid":"'.$userid.'"}';	
			}
			break;
		}
	}
/* */// 查询用户名是否存在，如果存在返回真，否则返回假
function isHasUser(){
	global $conn, $username;//作用域问题，找到全局变量
	
	$sql = "select count(*) as num from userlist where username='".$username."'";
	$result = $conn->query($sql);//得到结果集（二维数组）
	$row = $result->fetch_assoc();//在结果集中，打开第一行	
	
	if( $row["num"] === "0" ){ // 不存在
		return false;
	}else{
		return true;
	}
}
?>