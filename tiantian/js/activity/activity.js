$(function(){
	$.get("js/activity/activity.json",function(data){
		var str  = "";
		for(var i = 0;i <data.length;i++){
			var listImg = data[i].datas;
			str += '<div class="subfield">'+
					'<img src="img/activity/'+data[i].title+'" />'+
				'</div>'+
				'<div class="item">';
			for(var j = 0 ; j <listImg.length;j++){
				str += '<dl>'+
						'<dt class="p-img">'+
							'<a href="javascript:;"><img src="img/activity/'+listImg[j].imgSrc+'"/></a>'+
						'</dt>'+
						'<dd>'+
							'<div class="p-name">'+
								'<a href="javascript:;">'+listImg[j].name+'</a>'+
							'</div>'+
							'<div class="p-pricing">'+
								'<span>定价：</span>'+
								'<span class="pRmb">￥</span>'+
								'<span class="pNum">'+listImg[j].pricing+'</span>'+
							'</div>'+
							'<div class="p-price">'+
								'<span>天添价：</span>'+
								'<span class="pRmb">￥</span>'+
								'<span class="pNum"><strong>'+listImg[j].price+'</strong></span>'+
							'</div>'+
						'</dd>'+
					'</dl>';
			}
			str +='</div>';
		}
		$("#main").html(str);
	})
})
