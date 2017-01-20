$(function(){
	/*
	 书香卡注册
	 * */
	/*---------书香卡号--------------*/
	$("#card").focus(checkCard);
	$("#card").blur(checkCard);
	$("#card").keyup(checkCard);
	function checkCard(e){
		var v = $("#card").val();  //书香卡号值
		var tip = $("#card").next(); //提示框
		if(e){
			if(e.type == "focus"){
				if(v.length == 0){
					tip.css("display","block").html("请输入书香卡号");
				}
				return false;
			}
			if(e.type =="blur"){
				if(v.length == 0){
		
					tip.css("display","block").html("书香卡号不能为空，请输入你的书香卡号");
					return false;
				}
			}
		}
		//其他事件 输入时
		if(v.length == 0){
			tip.css("display","block").html("请输入书香卡号");
			return false;
		}else{
			//邮箱正则
			var reg1 = /^[a-z0-9_]{3,22}@[a-z0-9]{2,10}\.[a-z]{3,10}$/;
			if(reg1.test(v)){
				tip.css("display","block").html("书香卡号正确");
				return true;
			}
			//手机号正则
			var reg2 = /[1]\d{10}/;
			if(reg2.test(v)){
				tip.css("display","block").html("书香卡号正确");
				return true;
			}
		}
		
	}
	
	/*---------书香卡密码--------------*/
	$("#cardPwd").focus(checkCardPwd);
	$("#cardPwd").blur(checkCardPwd);
	$("#cardPwd").keyup(checkCardPwd);
	function checkCardPwd(e){
		var v = $("#cardPwd").val();  //书香卡号值
		var tip = $("#cardPwd").next(); //提示框
		if(e){
			if(e.type == "focus"){
				if(v.length == 0){
					tip.css("display","block").html("请输入密码，为书香卡密码");
				}
				return false;
			}
			if(e.type == "blur"){
				if(v.length == 0){
					tip.css("display","block").html("密码不能为空");
				}
				return false;
			}
		}
		//其他事件 输入时
		if(v.length ==0){
			tip.css("display","block").html("请输入密码，为书香卡密码");
			return false;
		}else{
			//密码
			var reg = /^[\w-]+$/;
			if(reg.test(v)){
				if(v.length >=6 && v.length <= 16){
					tip.css("display","block").html("此密码可以用");
					return true;
				}else{
					tip.css("display","block").html("请输入密码，为6-16位字母或数字");
					return false;
				}
			}
		}
		
	}
	
	//注册按钮事件
	$("#btn1").click(function(){
		var isAggre =  $("#checkbox1")[0].checked;
		if(isAggre){
				if(checkCard()&&checkCardPwd()){
						var user = $("#card").val();
						var pwd = $("#cardPwd").val();
						$.post("js/register/card.php", {
						userName: user,
						pwd: pwd
					}, function(data) {
						//alert("你好")
						if(data == 1) {
							alert("登录成功");
							window.location.href ="login.html";	
						} else {
							alert("登录失败，请重新登录");
						}
					})
				}
		}else{
			if(confirm("你必须先同意天添网用户注册协议才能进行注册！")){
				$("#card").next().css("display","block").html("书香卡号不能为空，请输入你的书香卡号");
				$("#checkbox1").next().next().css("display","block").html("请接受服务条款");
			}
		}
	})
	
	
	
	
})
