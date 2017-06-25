<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";//用户密码没有为空
$dbname = "wanghuijun";
$conn = new mysqli($servername, $username, $password, $dbname);
	
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
if( $username == "" ){
	echo '{"state":"error","text":"请输入用户名"}';
}else{
	switch( $ac ){
		case "1":
			//查询
			if( isHasUser() === true ){//表示用户名存在
				echo '{"state":"success","text":"登录成功"}';
			}else{
				echo '{"state":"error","text":"用户名或密码错误"}';
			}
			break;	
	}
}

// 查询用户名是否存在，如果存在返回真，否则返回假
function isHasUser(){
	global $conn, $username,$password;//作用域问题，找到全局变量
	$sql = "select count(*) as num from userlist where username='".$username."' and password='".$password."'";
	$result = $conn->query($sql);//得到结果集（二维数组）
	$row = $result->fetch_assoc();//在结果集中，打开第一行
	if( $row["num"] === "0" ){ // 不存在
		return false;
	}else{
		return true;
	}
}

?>
