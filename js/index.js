//登录成功的时候，要在首页获取cookie，顶部信息变化
var username=getCookie("username");
var yonghu=document.getElementById("yonghu");
if(username==""){
	yonghu.innerHTML="您好！ 欢迎光临本店！<a href='login.html'>[登录]</a> <a href='zhuce.html'>[会员注册]</a>";
	xiaokuang.innerHTML="您好！ 欢迎光临本店！<a href='login.html'>[登录]</a> <a href='zhuce.html'>[会员注册]</a>";
}else{
	yonghu.innerHTML="您好，"+username+" 欢迎您回来！<a href=''> 用户中心 </a><a onclick='exit()'> 退出 </a>";//a标签中点击事件onclick，不是href指向
	xiaokuang.innerHTML="您好，"+username+" 欢迎您回来！<a href=''> 用户中心 </a><a onclick='exit()'> 退出 </a>";
	function exit()
	{
		//删除cookie，innerHTML变为初始状态
		setCookie("username","",-1);
		setCookie("password","",-1);
		yonghu.innerHTML="您好！ 欢迎光临本店！<a href='login.html'>[登录]</a> <a href='zhuce.html'>[会员注册]</a>";
		xiaokuang.innerHTML="您好！ 欢迎光临本店！<a href='login.html'>[登录]</a> <a href='zhuce.html'>[会员注册]</a>";
	}
}
var fuwu=document.getElementById("fuwu");
var ol=fuwu.getElementsByTagName("ol")[0];
var span=fuwu.getElementsByTagName("span")[0];
var daohang=document.getElementById("daohang");
var ols=daohang.getElementsByTagName("ol")[0];
var spans=daohang.getElementsByTagName("span")[0];
fuwu.onmouseover=function(event){
	event=event||window.event;
	ol.style.display="block";
	fuwu.style.background="#fff";
	span.innerHTML="&and;"
	ol.style.zIndex=10;
	document.onmouseout=function(){
		ol.style.display="none";
		fuwu.style.background="none";
		span.innerHTML="&or;"
	}
}
daohang.onmouseover=function(event){
	event=event||window.event;
	ols.style.display="block";
	daohang.style.background="#fff";
	spans.innerHTML="&and;"
	ols.style.zIndex=10;
	document.onmouseout=function(){
		ols.style.display="none";
		daohang.style.background="none";
		spans.innerHTML="&or;"
	}
}

var hy=document.getElementsByClassName("hy")[0];
var span=hy.getElementsByTagName("span")[0];
var huiyuan=document.getElementById("huiyuan");
var a=hy.getElementsByTagName("a")[0];
hy.onmouseover=function(event){
	event=event||window.event;
	huiyuan.style.display="block";
	span.innerHTML="&and;";
	a.style.borderTopColor="red";
	a.style.borderLeftColor="red";
	a.style.borderRightColor="red";
	a.style.borderBottomColor="#fff";
	a.style.background="#fff";
	huiyuan.style.zIndex=10;
	document.onmouseout=function(){
		huiyuan.style.display="none";
		a.style.background="none";
		span.innerHTML="&or;"
		a.style.borderColor="#fafafa";
	}
}
/*-------------------lunbotu--------------------------*/
var banner=document.getElementById("banner");
var ulImg=banner.getElementsByTagName("ul")[0];
var olImg=banner.getElementsByTagName("ol")[0];
var ullis=ulImg.children;
var ollis=olImg.children;//小图片
var now=0;//用来存放第几张图
var l=ullis.length;
//点击的时候也执行tab函数
for(var i=0;i<l;i++){
	var li=ollis[i];
	li.index=i;//存下标
	li.onclick=function(){
		now=this.index;
		tab();
	}
}
function tab(){
	for(var i=0;i<l;i++){
		startMove(ullis[i],{opacity:0});
		ullis[i].style.zIndex=0;//循环清空样式
		ollis[i].style.background="";
	}
	//对当前的图片进行透明设置
	startMove(ullis[now],{opacity:100});
	ullis[now].style.zIndex=1;
	ollis[now].style.background="red";
}
function next(){
	now++;
	if(now==l){
		now=0;
	}
	tab();
}
var timer=setInterval(next,3000);
/*-------------------------楼梯--------------------*/
//得到每个
var arr=$(".tiao1,.tiao2,.tiao3").map(function(index,elem){
	return $(elem).offset().top;
});

$("#louti>ul>li").mouseover(function(){
	$(this).addClass("selected");
});
$("#louti>ul>li").mouseout(function(){
	$(this).removeClass("selected");
});
$("#louti>ul>li").eq(1).mouseover(function(){
	$("#ke").stop().fadeIn(100);
});
$("#louti>ul>li").eq(1).mouseout(function(){
	$("#ke").stop().fadeOut(100);
});
$("#louti>ul>li").eq(2).click(function(){
	$("body,html").animate({scrollTop:arr[0]});
});
$("#louti>ul>li").eq(3).click(function(){
	$("body,html").animate({scrollTop:arr[1]});
});
$("#louti>ul>li").eq(4).click(function(){
	$("body,html").animate({scrollTop:arr[2]});
});
$("#louti>ul>li").eq(5).click(function(){
	$("body,html").animate({scrollTop:0});
});
$("#louti>ul>li").eq(6).click(function(){
	$("body,html").animate({scrollTop:0});
});


