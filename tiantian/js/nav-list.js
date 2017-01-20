 $(function(){
	//	鼠标划入商品全部分类
	$('#nav .nav-left-tab').mouseenter(function(){
		$('.nav-menu').addClass('active').siblings().removeClass('active');
		//鼠标划入时，主题菜单模块内容显示
		$('.nav-menu .item').mouseenter(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.nav-menu').addClass('active').siblings().removeClass('active');
		var index = $(this).index();
    	$('.content .content-item').eq(index).addClass('active').siblings().removeClass('active');
		})
	})
	//鼠标划出时，主题菜单模块内容消失
	  $('.nav-left').mouseleave(function(){
		$('.nav-menu .item').removeClass('active');
		$('.content .content-item').removeClass('active');
		$('.nav-menu').removeClass('active');
	    })

 })