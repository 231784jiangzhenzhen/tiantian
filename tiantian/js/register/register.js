$(function() {
		//tab切换的功能
		$('.register-topleft li').click(function() {
			$(this).addClass('active').siblings().removeClass('active');
			//console.log($(this).index());
			var index = $(this).index();
			console.log(index);
			$('.form').eq(index).addClass('active').siblings().removeClass('active');
		})
		
		
	
	/*
	 个人用户注册
	 * */
	/*------------------------验证个人用户-----------------------------------*/
	$("#userName").focus(checkUserName);
	$("#userName").blur(checkUserName);
	$("#userName").keyup(checkUserName);
	
	function checkUserName(e){
		var v = $("#userName").val(); //获取用户名的值
		var tip = $("#userName").next(); //提示框
		if(e){
			if(e.type == "focus"){
				if(v.length == 0){
					tip.css("display","block").html("请输入邮箱或手机号");
				}
				return false;
			}
		if(e.type == 'blur'){
			 if(v.length == 0){
				tip.css("display","block").html("用户名不能为空，请输入邮箱或手机号");
			    }
			return false;
			}
		}
		
		//其他事件 用户输入时
		if(v.length == 0){
			tip.css("display","block").html("请输入邮箱或手机号");
			return false;
		}else{
			//邮箱正则
			var reg1 = /^[a-z0-9_]{3,22}@[a-z0-9]{2,10}\.[a-z]{3,10}$/;
			if(reg1.test(v)){
				tip.css("display","block").html("可以使用次用户");
				return true;
			}
			//手机号正则
			var reg2 = /[1]\d{10}/;
			if(reg2.test(v)){
				tip.css("display","block").html("可以使用次用户");
				return true;
			}
		}
	}
	
	/*------------------------验证设置密码-----------------------------------*/
	$("#pWd").focus(checkpWd);
	$("#pWd").blur(checkpWd);
	$("#pWd").keyup(checkpWd);
	
	function checkpWd(e){
		var v = $("#pWd").val(); //获取设置密码的值
		var tip = $("#pWd").next(); //提示框
		if(e){
			if(e.type == "focus"){
				if(v.length == 0){
					tip.css("display","block").html("请输入密码，为6-16位字母或数字");
				}
				return false;
			}
		if(e.type == 'blur'){
			 if(v.length == 0){
				tip.css("display","block").html("密码不能为空，请输入6-16位字母或数字");
			    }
			return false;
			}
		}
		
		//其他事件 用户输入时
		if(v.length == 0){
			tip.css("display","block").html("请输入密码，为6-16位字母或数字");
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

/*------------------------验证确认密码-----------------------------------*/
	$("#pWd1").focus(checkpWd1);
	$("#pWd1").blur(checkpWd1);
	$("#pWd1").keyup(checkpWd1);
	
	function checkpWd1(e){
		var v = $("#pWd1").val(); //获取设置密码的值
		var tip = $("#pWd1").next(); //提示框
		if(e){
			if(e.type == "focus"){
				if(v.length == 0){
					$("#pwd").next().css("display","block").html("请输入密码，为6-16位字母或数字");
				}
				return false;
			}
		if(e.type == 'blur'){
			 if(v.length == 0){
				tip.css("display","block").html("密码不能为空");
			    }
			return false;
			}
		}
		
		//其他事件 用户输入时
		if(v.length == 0){
			$("#pwd").next().css("display","block").html("请输入密码，为6-16位");
		}else{
				if(v == $("#pWd").val()){
					tip.css("display","block").html("输入正确");
					return true;
				  }
				}
		
		}

	/*------点击注册事件-------*/
	$("#btn").click(function(){
		var isAggre =  $("#checkbox")[0].checked;
		if(isAggre){
			if(checkUserName()&&checkpWd()&&checkpWd1()){
				var user = $("#userName").val();
				var pwd = $("#pWd").val();
				$.post("js/register/register.php", {
				userName: user,
				pwd: pwd
			}, function(data) {
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
				$("#userName").next().css("display","block").html("用户名不能为空，请输入邮箱或手机号");
				$("#pWd").next().css("display","block").html("密码不能为空，输入6-16位字母或数字");
				$("#pWd1").next().css("display","block").html("密码不能为空");
			}
		}
	})


})