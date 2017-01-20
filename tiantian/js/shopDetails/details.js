$(function(){
	var thispid = $.cookie("list");
	console.log(thispid)
	$.get("js/list/main.json",function(data){
		var index = 0;
		for(var i = 0;i<data[0].datas.length;i++){
			
			if(data[0].datas[i].pid==thispid){
				index = i;
				break;
			}
		}
		//console.log(index)
		//console.log(data[i].datas[index].pid);
		
			var 	html = '<dl class="intro" pid="'+data[0].datas[index].pid+'">'+
							'<dt>'+
								'<div class="small-box" id="small-box">'+
									'<img src="js/list/images/'+data[0].datas[index].imgSrc+'" />'+
									'<div class="tool" id="tool"></div>'+
								'</div>'+
								'<div class="big-box" id="bigBox">'+
									'<img src="js/list/images/'+data[0].datas[index].imgSrc+'" id="bigImg"/>'+
								'</div>'+
								'<div class="share">'+
									'<span>分享到:</span>'+
									'<span><a href="javascript:;"><img src="img/shopDetails/qq.jpg"/></a></span>'+
									'<span><a href="javascript:;"><img src="img/shopDetails/weibo.jpg"/></a></span>'+
									'<span><a href="javascript:;"><img src="img/shopDetails/weinxin.jpg"/></a></span>'+
									'<span><a href="javascript:;"><img src="img/shopDetails/w.jpg"/></a></span>'+
									'<span><a href="javascript:;"><img src="img/shopDetails/texu.jpg"/></a></span>'+
									'<span><a href="javascript:;"><img src="img/shopDetails/kong.jpg"/></a></span>'+
									'<span><a href="javascript:;"><img src="img/shopDetails/dou.jpg"/></a></span>'+
									'<span><a href="javascript:;"><img src="img/shopDetails/ren.jpg"/></a></span>'+
									'<span><a href="javascript:;"><img src="img/shopDetails/kaixin.jpg"/></a></span>'+
								'</div>'+
							'</dt>'+
							
							'<dd>'+
								'<div class="p-name">'+
									'<h1>'+data[0].datas[index].name+'</h1>'+
								'</div>'+
								
								'<div class="fix">'+
								
									'<ul class="summary">'+
										'<li class="sum-market">'+
											'<div class="dt">定价：</div>'+
											'<div class="dd">￥29.0</div>'+
										'</li>'+
										'<li class="sum-price">'+
											'<div class="dt">天添价</div>'+
											'<div class="dd">'+
												'<strong>￥'+data[0].datas[index].price+'</strong>'+
												'<span>8.5折</span>'+
											'</div>'+
										'</li>'+
										'<li class="sum-author">'+
											'<div class="dt">作者：</div>'+
											'<div class="dd">卡勒德.胡赛尼著</div>'+
										'</li>'+
										'<li class="sum-pub">'+
											'<div class="dt">出版社：</div>'+
											'<div class="dd">上海人民出版社</div>'+
										'</li>'+
										'<li class="sum-pubTime">'+
											'<div class="dt">出版时间:</div>'+
											'<div class="dd">2013.07</div>'+
										'</li>'+
										'<li>'+
											'<div class="dt">ISRC</div>'+
										'</li>'+
										'<li>'+
											'<div class="dt">开本</div>'+
											'<div class="dd">32开</div>'+
										'</li>'+
										'<li>'+
											'<div class="dt">所属分类：</div>'+
											'<div class="dd">外国文学——小说</div>'+
										'</li>'+
									'</ul>'+
									
									'<ul class="choose">'+
										'<li class="choose-amount">'+
											'<div class="chse1">购买数量：</div>'+
											'<div class="chse2">'+
												'<div class="warp-input" id="warp-input">'+
													'<input type="button" value="-" id="sub"  />'+
													'<input type="text" value="0" class="text" id="ccount"/>'+
													'<input type="button" value="+" id="add"/>'+
												'</div>'+
											'</div>'+
										'</li>'+
										'<li class="choose-btn">'+
											'<div class="btn">'+
												'<a href="shopCart.html">加入购物车<b></b></a>'+
											'</div>'+
											'<div class="attention">'+
												'<a href="javascript:;"><strong>+</strong>加关注</a>'+
											'</div>'+
										'</li>'+
									'</ul>'+
								'</div>'+
							'</dd>'+
						'</dl>';
					$("#product-intro").html(html);
						fn();
						fn1()

	})
	
	
	
	function fn(){
		
	/*放大镜*/
	
	/*
	 划入
	 * */
	$('#small-box').mouseenter(function() {
		
		$('#tool').css('display', 'block');
		$('#bigBox').css('display', 'block');
	})

	/*
	 * 划出
	 */
	/
	$('#small-box').mouseleave(function() {
		$('#tool').css('display', 'none');
		$('#bigBox').css('display', 'none');
	})

	/*
	 移动
	 * */
	$('#small-box').mousemove(function(e) {
		var x = e.pageX - $('#small-box').offset().left - $('#tool').width() / 2;
		var y = e.pageY - $('#small-box').offset().top - $('#tool').width() / 2;

		if(x < 0) {
			x = 0;
		}
		if(x > $('#small-box').width() - $('#tool').width()) {
			x = $('#small-box').width() - $('#tool').width();
		}
		if(y < 0) {
			y = 0;
		}
		if(y > $('#small-box').height() - $('#tool').height()) {
			y = $('#small-box').height() - $('#tool').height();
		}

		$('.tool').css({
			left: x,
			top: y
		})

		/*
		 放大图片
		 * */
		$('#bigImg').css({
			left: -x * 4,
			top: -y * 4
		})
	})
	}
	
	
	
function fn1(){
$("#ccount").val(getTotalCount());
		/*
 添加购物车思路
 * */
/*
 添加点击事件  点击一次数量加一次
  * */
$("#add").click(function(){
	//console.log(3);
	var dl = $(this).parents("dl");
	//console.log(dl);
	var pid = dl.attr("pid");
	//console.log(pid);
	var num = $("#ccount").val();
	//console.log(num);
	num++;
	$("#ccount").val(num);
	var isSave = checkHasGoodsById(pid);
	//console.log(isSave)
	if(isSave){  //有数据
		updateGoodsById(pid,1);
	}else{ //没有数据
		var imgUrl =$("#product-intro #small-box").children().attr("src");//图片的路径
		console.log(imgUrl);
		var obj = {pid:pid,imgUrl:imgUrl,pName:"追风筝的人",price:12,count:1}
		addGoodsToCart(obj)  //添加数据到购物车，添加数据到本地cookie
	}
	$("#ccount").val(getTotalCount());
	//console.log($("#ccount").html(getTotalCount()));
	
})

/*
 减少点击事件  点击一次数量减一次
  * */
$("#sub").click(function(){
	var dl = $(this).parents("dl");
	var pid = dl.attr("pid");
	var num = $("#ccount").val();
	num--;
	if(num < 1){
		num = 0;
	}
	$("#ccount").val(num);
	console.log($("#ccount").val());
	var isSave = checkHasGoodsById(pid);
	//console.log(isSave)
	if(isSave){  //有数据
		updateGoodsById(pid,-1);
	}else{ //没有数据
		var imgUrl =$("#product-intro #small-box").children().attr("src");//图片的路径
		//console.log(imgUrl);
	var pName = $("#product-intro #p-name").children().html();//商品的名称

		var price = $("#product-intro #sum-price").children(".dd").find("strong span").html();//商品的价格
		
		//用对象的方式把单个商品组织起来{键:值，键：值，键：值}
		var obj = {pid:pid,imgUrl:imgUrl,pName:pName,price:price,count:1}
		
		addGoodsToCart(obj)  //添加数据到购物车，添加数据到本地cookie
	}
	$("#ccount").val(getTotalCount());
	//console.log($("#ccount").html(getTotalCount()));
	
})

	}
})
