$(function() {
	//给登录按钮绑定点击事件
	$('#btn').click(function() {
		//用户名和密码为空时，右边框显示
		if($('#username').val() == '' && $('#password').val() == '') {
			$('.show').css('display', 'block');
			$('.show1').css('display', 'block');
		}
		//用户名为空时，右边框显示
		if($('#username').val() == '') {
			$('.show').css('display', 'block');
		}
		//密码为空时，右边框显示
		if($('#password').val() == '') {
			$('.show1').css('display', 'block');
		}
		//用户名失去焦点时，右边框消失
		$('#username').blur(function() {
				$('.show').css('display', 'none');
			})
			//密码失去焦点时，右边框消失
		$('#password').blur(function() {
				$('.show1').css('display', 'none');
			})
			//如果用户名和密码都不为空时，输入用户名和密码比较和后台传入的用户名和密码是否正确
		if($('#username').val() != '' && $('#password').val() != '') {
			//从后台获取用户名和密码，同时判断用户输入的用户名和密码是否正确
			var u = $('#username').val();
			var p = $('#password').val();
			$.get("js/login/login.php", {
				userName: u,
				pwd: p
			}, function(data) {
				if(data == 1) {
					$.cookie('logName','2030229321@qq.com',{expires:7})
				//	alert($.cookie("logName"));
					alert("登录成功");
					window.location.href ="index.html";
					
				} else {
					$('.show1').css('display', 'block');
					$('.show1').html('你输入的账户名和密码不匹配，请重新输入');
				}
			})
		}

	})
	
});