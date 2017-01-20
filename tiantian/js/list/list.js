$(function() {

	/*
	 主要内容左边的动态生成
	 * */
	$.get('js/list/sortlist.json', function(data) {
		var html = "";
		for(var i = 0; i < data.length; i++) {
			html += '<div class="item">' +
				'<h3>' + data[i].name + '</h3>' +
				'<div class="character">' +
				'<a href="javascript:;">' + data[i].ch1 + '</a>' +
				'<a href="javascript:;">' + data[i].ch2 + '</a>' +
				'<a href="javascript:;">' + data[i].ch3 + '</a>' +
				'<a href="javascript:;">' + data[i].ch4 + '</a>' +
				'<a href="javascript:;">' + data[i].ch5 + '</a>' +
				'<a href="javascript:;">' + data[i].ch6 + '</a>' +
				'<a href="javascript:;">' + data[i].ch7 + '</a>' +
				'<a href="javascript:;">' + data[i].ch8 + '</a>' +
				'<a href="javascript:;">' + data[i].ch9 + '</a>' +
				'<a href="javascript:;">' + data[i].ch10 + '</a>' +
				'<a href="javascript:;">' + data[i].ch11 + '</a>' +
				'<a href="javascript:;">' + data[i].ch12 + '</a>' +
				'<a href="javascript:;">' + data[i].ch13 + '</a>' +
				'<a href="javascript:;">' + data[i].ch14 + '</a>' +
				'<a href="javascript:;">' + data[i].ch15 + '</a>' +
				'<a href="javascript:;">' + data[i].ch16 + '</a>' +
				'</div>' +
				'</div>';
			$("#navigation").html(html);
		}

	})
	
	/*
	 主要内容左下边的图片划入点击功能
	 * */
//	第一个图片切换功能
	$("#imgTab #btnb span").mouseenter(function(){
		$(this).css("opacity",1);
		var index = $(this).index();
		var w = $("#imgTab").width();
		var x = index*w;
		$("#imgTab #ul li").animate({
			left:-x
		},500);
	});
	$("#imgTab #btnb span").mouseout(function(){
		$(this).css("opacity",0.5);
	});
	//	第二个图片切换功能
	$("#imgTab2 #btnb span").mouseenter(function(){
		$(this).css("opacity",1);
		var index = $(this).index();
		var w = $("#imgTab").width();
		var x = index*w;
		$("#imgTab2 #ul li").animate({
			left:-x
		},500);
	});
	$("#imgTab2 #btnb span").mouseout(function(){
		$(this).css("opacity",0.5);
	});
	
	
	/*
	 * 主要内容右边的动态生成
	 */

	/*
	 	上面的轮播切换
	 * */
	var lunboOne = new LunBo("lbt1", "js/list/lunbo.json");
	/*
	/*
	 下面轮播切换
	 * */
	var lunboTwo = new LunBo1("lbt2", "js/list/lunbo1.json");

	/*
	 图书资讯的动态生成
	 * */
	$.get('js/list/bulletin1.json', function(data) {
		var html1 = "";
		for(var i = 0; i < data.length; i++) {
			html1 = '<div class="buleTop">' +
				'<h2>' + data[i].name + '</h2>' +
				'</div>' +
				'<div class="buleBot">' +
				'<ul>' +
				'<li>' +
				'<a href="javascript:;">' + data[i].ch1 + '</a>' +
				'</li>' +
				'<li>' +
				'<a href="javascript:;">' + data[i].ch2 + '</a>' +
				'</li>' +
				'<li>' +
				'<a href="javascript:;">' + data[i].ch3 + '</a>' +
				'</li>' +
				'<li>' +
				'<a href="javascript:;">' + data[i].ch4 + '</a>' +
				'</li>' +
				'<li>' +
				'<a href="javascript:;">' + data[i].ch5 + '</a>' +
				'</li>' +
				'<li>' +
				'<a href="javascript:;">' + data[i].ch6 + '</a>' +
				'</li>' +
				'</ul>' +
				'</div>';
			$("#bulletin1").html(html1);
		}
	});

	/*
	 畅销排行的动态生成
	 * */
	$.get('js/list/bulletin2.json', function(data) {
		var html2 = "";
		for(var i = 0; i < data.length; i++) {
			html2 = '<div class="buleTop">' +
				'<h2>' + data[i].name + '</h2>' +
				'</div>' +
				'<div class="buleBot">' +
				'<ul>' +
				'<li>' +
				'<a href="javascript:;">' + data[i].ch1 + '</a>' +
				'</li>' +
				'<li>' +
				'<a href="javascript:;">' + data[i].ch2 + '</a>' +
				'</li>' +
				'<li>' +
				'<a href="javascript:;">' + data[i].ch3 + '</a>' +
				'</li>' +
				'<li>' +
				'<a href="javascript:;">' + data[i].ch4 + '</a>' +
				'</li>' +
				'<li>' +
				'<a href="javascript:;">' + data[i].ch5 + '</a>' +
				'</li>' +
				'<li>' +
				'<a href="javascript:;">' + data[i].ch6 + '</a>' +
				'</li>' +
				'</ul>' +
				'</div>';
			$("#bulletin2").html(html2);
		}
	});

	/*
	 主要内容分类图片显示
	 * */

	$.get("js/list/main.json", function(data) {
		//console.log(data)
		var html2 = "";
		for(var i = 0; i < data.length; i++) {
			var item = data[i];
			//console.log(item);
			var list = item.datas;
			html2 += '<div class="speTop">' +
				'<h2>'+item.title+'</h2>' +
				'</div>' +
				'<div class="speBot">' +
				'<ul class="ulTab">' +
				'<li>重点推荐</li>' +
				'</ul>' +
				'<div class="list">';

			for(var j = 0; j < list.length; j++) {
				html2 +='<dl class="ceshi" pid="'+list[j].pid+'">'+
										'<dt class="p-img">'+
											'<div class="i-img">'+
												'<a href="shopDetails.html">'+
													'<img src="js/list/images/'+list[j].imgSrc+'" />'+
												'</a>'+
											'</div>'+
										'</dt>'+
										'<dd class="p-name">'+
											'<a href="javascript:;">'+list[j].name+'</a>'+
										'</dd>'+
										'<dd class="p-price">'+
											'<strong>天添价￥'+list[j].price+'</strong>'+
										'</dd>'+
									'</dl>';

			}
			html2 += '</div></div>'

		}
		$("#special-book").html(html2);
	})
	
	
				$("#special-book").delegate("img","mouseenter",function(e){      var thispid =  $(this).parents("dl").attr("pid")

			//	console.log(thispid)
					$.cookie("list",thispid)
		
			
})
		})
