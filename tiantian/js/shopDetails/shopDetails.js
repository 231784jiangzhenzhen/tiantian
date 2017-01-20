$(function(){
	/*
	 * 精彩推荐图片的动态生成
	 **/
	$.get("js/shopDetails/img-left.json",function(data){
		//console.log(data);
		var html = "";
		for(var i = 0;  i <data.length;i++){
			//console.log(data[i]);
			html += '<div class="mCont">'+
							'<a href="javascript:;"><img src="'+data[i].imgSrc+'"/></a>'+
						'</div>';
			$("#mLbot").html(html);
		}
	})
	
})	
	