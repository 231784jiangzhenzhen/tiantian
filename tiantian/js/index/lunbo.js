/*轮播类
 * 参数：
 * 		id:轮播模块标识
 * 		url:请求资源的路径
 */
function LunBo(id,url){
	this.lbt = $("#"+id);   //轮播图模块
	this.vWidth = this.lbt.width();  //可视区域宽度
	this.lbt_content = this.lbt.children(".lbt-content");  //轮播项模块
	this.lbt_tab = this.lbt.children(".lbt-tab");//轮播项控制按钮模块
	this.lbt_btn = this.lbt.children(".lbt-btn"); //左右轮播按钮
	this.lbt_btnLeft = this.lbt.children('.lbt-btnLeft');//左侧控制按钮
	this.lbt_btnRight = this.lbt.children(".lbt-btnRight");//右侧控制按钮
	this.url = url; //异步请求资源的地址
	this.index = 0; //控制索引
	this.termId;   //表示定时器标识
	this.init();  //对象创建完后，初始化数据以及功能
}
/*
 * 每个构造函数都会附加【一个】原型对象。
 * 这个原型对象 其实 就是一个普通的对象（键/值对）
 * 特点：可以被所有通过构造函数实例化（new LunBo()）的对象共享
 */
LunBo.prototype = {
	/*初始化轮播图资源*/
	init:function(){
		//在这里this代表当前LunBo类型的对象
		//console.log(this);
		var that = this;
		$.get(this.url,function(data){
			//异步在这里this代表和相关的规定
			//console.log(this);
			//console.log(that);
			that.crateLunoItemToContent(data);
			that.lbtBindEvent();
			that.lbtBtnBindEvent(data);
			that.autoPlay();
			that.liBindEvent();
		})
	},
	/*根据数据动态拼接结构填充到内容项容器中**/
	crateLunoItemToContent:function(data){
		for(var i = 0;i<data.length;i++){
			var html = '<div class="lbt-content-item">'+
						'<a href="'+data[i].targetUrl+'">'+
							'<img src="'+data[i].imgUrl+'" alt="" />'+
						'</a>'+
					  '</div>';
			$(html).appendTo(this.lbt_content);
			
			//创建四方形按钮
			if(i ==0){
				$("<li class='active'>"+(i+1)+"</li>").appendTo(this.lbt_tab)
			}else{
				$("<li>"+(i+1)+"</li>").appendTo(this.lbt_tab);
			}
			
		}
		
		//为了实现左右滑动轮播，所以需要在轮播项中再次追加一个轮播项（第一个）
		var html = '<div class="lbt-content-item">'+
						'<a href="'+data[0].targetUrl+'">'+
							'<img src="'+data[0].imgUrl+'" alt="" />'+
						'</a>'+
					  '</div>';
		$(html).appendTo(this.lbt_content);
		//根据所动态生成的轮播项计算轮播项容器的总宽度
		var w = this.vWidth*(data.length+1);
		this.lbt_content.width(w);
	},
	/*鼠标浮动和离开轮播模块时，显示和隐藏左右控制按钮*/
	lbtBindEvent:function(){
		var that = this;
		/*鼠标浮动事件*/
		this.lbt.mouseenter(function(){
//			that.lbt_btn.fadeIn(500);
			clearInterval(that.termId); //清除定时器
		});
		/*鼠标离开事件*/
		this.lbt.mouseleave(function(){
//			that.lbt_btn.fadeOut(500);
			that.autoPlay();//重新开启定时器
		})
	},
	
	/*实现左右按钮控制轮播*/
	lbtBtnBindEvent:function(data){
		var that = this;
		/*右边按钮控制轮播*/
		this.lbt_btnRight.click(function(){
			that.index++;
			var x = that.index*that.vWidth;
			that.lbt_content.stop(false,true);
			if(that.index == data.length){
				that.index = 0;//从头开始
				that.lbt_content.animate({left:-x},200,function(){
					that.lbt_content.css({left:0})
				});
				
			}else{
				that.lbt_content.animate({left:-x},200);
			}
			//更改对应切换按钮的样式
			that.lbt_tab.children().eq(that.index).addClass("active").siblings().removeClass("active");
		});
		
		/*左边按钮控制轮播*/
		this.lbt_btnLeft.click(function(){
			that.index --;
			that.lbt_content.stop(false,true);
			if(that.index<0){
				that.lbt_content.css({
					left:-data.length*that.vWidth
				})
				that.index = data.length-1;
			}
			var x = that.index*that.vWidth;   //-x
			that.lbt_content.animate({left:-x},200);
			
			//更改对应切换按钮的样式
			that.lbt_tab.children().eq(that.index).addClass("active").siblings().removeClass("active");
		})
	},
	
	/*自动轮播*/
	autoPlay:function(){
		var that = this;
		this.termId = setInterval(function(){
			that.lbt_btnRight.trigger("click");
		},2000)
	},
	/*划入事件*/
	liBindEvent:function(){
		var that = this;
		this.lbt_tab.children().mouseenter(function(){
			that.lbt_content.stop(false,true)
			that.index = $(this).index();
			
			var x = that.index*that.vWidth;  //-x
			that.lbt_content.animate({left:-x},200);
			//更改对应切换按钮的样式
			that.lbt_tab.children().eq(that.index).addClass("active").siblings().removeClass("active");
		})
	}
	
}
