/*
 用户登录后跳转到首页，将用户名写在页面上
 * */
if($.cookie('logName')){
	//alert(1);
	alert($.cookie('logName'));
}
var userName = $('#top .content .top-right #beforeLogin');
userName.html($.cookie('logName'));

/*banner轮播
 */
var lunboOne = new LunBo("lbt1","js/index/data.json");


$(function(){
			/*
			 * 营销tab切换
			 */
			$('#marketing  .marketing-left .tab-control li').mouseenter(function(){
				$(this).addClass('active1').siblings().removeClass('active1');
				//console.log($(this.index));
				var index = $(this).index();
			$('#marketing  .marketing-left .tab-content .tab-content-item').eq(index).addClass('active1').siblings().removeClass('active1');	
			});
			
			/*1Fbook切换*/
			$('#book .book-center .book-center1 .tab-control li').mouseenter(function(){
				$(this).addClass('active1').siblings().removeClass('active1');
				var index = $(this).index();
				$('#book .book-center .book-center1 .tab-content .tab-content-item').eq(index).addClass('active1').siblings().removeClass('active1');
			});
			
			/*2F音像切换*/
			$('#video .book-center .book-center1 .tab-control li').mouseenter(function(){
				$(this).addClass('active1').siblings().removeClass('active1');
				var index = $(this).index();
				$('#video .book-center .book-center1 .tab-content .tab-content-item').eq(index).addClass('active1').siblings().removeClass('active1');
			});
			
			/*3F电器切换*/
			$('#electric .book-center .book-center1 .tab-control li').mouseenter(function(){
				$(this).addClass('active1').siblings().removeClass('active1');
				var index = $(this).index();
				$('#electric .book-center .book-center1 .tab-content .tab-content-item').eq(index).addClass('active1').siblings().removeClass('active1');
			});
			
			/*4F食品切换*/
			$('#food .book-center .book-center1 .tab-control li').mouseenter(function(){
				$(this).addClass('active1').siblings().removeClass('active1');
				var index = $(this).index();
				$('#food .book-center .book-center1 .tab-content .tab-content-item').eq(index).addClass('active1').siblings().removeClass('active1');
			});
			
			/*5F食品切换*/
			$('#synthesize .book-center .book-center1 .tab-control li').mouseenter(function(){
				$(this).addClass('active1').siblings().removeClass('active1');
				var index = $(this).index();
				$('#synthesize .book-center .book-center1 .tab-content .tab-content-item').eq(index).addClass('active1').siblings().removeClass('active1');
			});
			
			
			
			/*
			 图书类有三个图片切换功能
			 * */
			//第一个图片切换
			$("#book .book-left .book-left-bootom .btn span").mouseenter(function(){
				$(this).css("opacity",1);
				var index = $(this).index();
				var w = $(".book-left-bootom").width();
				var x = index*w;
				$("#book .book-left .book-left-bootom .ulb li").animate({
					left:-x
				},500);
			});
			$("#book .book-left .book-left-bootom .btn span").mouseout(function(){
				$(this).css("opacity",0.5);
			});
			
			//第二个图片切换
			$("#book .book-right .book-right-top .btn span").mouseenter(function(){
				$(this).css("opacity",1);
				var index = $(this).index();
				var w = $(".book-right-top").width();
				var x = index*w;
				$("#book .book-right .book-right-top .ulb li").animate({
					left:-x
				},500);
			});
			$("#book .book-right .book-right-top .btn span").mouseout(function(){
				$(this).css("opacity",0.5);
			});
			
			//第三个图片切换
			$("#book .book-right .book-right-bottom .btn span").mouseenter(function(){
				$(this).css("opacity",1);
				var index = $(this).index();
				var w = $(".book-right-bottom").width();
				var x = index*w;
				$("#book .book-right .book-right-bottom .ulb li").animate({
					left:-x
				},500);
			});
			$("#book .book-right .book-right-bottom .btn span").mouseout(function(){
				$(this).css("opacity",0.5);
			});




		/*
		  音像类有三个图片切换功能
		 * */
		//第一个图片切换

		$("#video .book-left .book-left-bootom .btn span").mouseenter(function(){
				$(this).css("opacity",1);
				var index = $(this).index();
				var w = $(".book-left-bootom").width();
				var x = index*w;
				$("#video .book-left .book-left-bootom .ulb li").animate({
					left:-x
				},500);
			});
			$("#video .book-left .book-left-bootom .btn span").mouseout(function(){
				$(this).css("opacity",0.5);
			});
			
			//第二个图片切换
			$("#video .book-right .book-right-top .btn span").mouseenter(function(){
				$(this).css("opacity",1);
				var index = $(this).index();
				var w = $(".book-right-top").width();
				var x = index*w;
				$("#video .book-right .book-right-top .ulb li").animate({
					left:-x
				},500);
			});
			$("#video .book-right .book-right-top .btn span").mouseout(function(){
				$(this).css("opacity",0.5);
			});
			
			//第三个图片切换
			$("#video .book-right .book-right-bottom .btn span").mouseenter(function(){
				$(this).css("opacity",1);
				var index = $(this).index();
				var w = $(".book-right-bottom").width();
				var x = index*w;
				$("#video .book-right .book-right-bottom .ulb li").animate({
					left:-x
				},500);
			});
			$("#video .book-right .book-right-bottom .btn span").mouseout(function(){
				$(this).css("opacity",0.5);
			});



})
