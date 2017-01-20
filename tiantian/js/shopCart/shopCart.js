/*
 根据本地数据显示或隐藏购物车列表
 * */
var totalCount = getTotalCount();
//console.log(totalCount);
if(totalCount){ //有数据
	$("#box").addClass("hide");   //隐藏没有数据的提示模块
	var goodsListObj = getGoodsListObj();
	for(var i = 0 ;i <goodsListObj.length;i++){
		var  tHtml = '<tr pid="'+goodsListObj[i].pid+'">'+
							'<td>'+
								'<input type="checkbox" class="ck"/>'+
							'</td>'+
							'<td>'+
								'<img src="'+goodsListObj[i].imgUrl+'" alt=""/>'+
							'</td>'+
							'<td>'+goodsListObj[i].pName+'</td>'+
							'<td>'+
								'<button class="down">-</button><input type="text" value="'+goodsListObj[i].count+'" readonly="readonly" /><button class="up">+</button>'+
							'</td>'+
							'<td>'+
								'￥<span>'+goodsListObj[i].price+'</span>'+
							'</td>'+
							'<td>'+
								'￥<span>'+goodsListObj[i].count*goodsListObj[i].price+'</span>'+
							'</td>'+
							'<td>'+
								'<button class="del">删除</button>'+
							'</td>'+
						'</tr>';
					$(tHtml).appendTo("#tbody");	
	}
}else{ //没有数据
	$("#table").addClass("hide");  //隐藏表格
	$("#h2").addClass("hide"); //隐藏总价格提示
}

/*
 * 计算总价格：
 * 思路：遍历每一行中的checkBox,若被选中列入总结累计中
 * 
 */
function getTotalPrice(){
	var cks  = $("#tbody .ck");
	var totalPrice = 0;
	for(var i = 0;i < cks.length;i++){
		if(cks[i].checked){
		var price = $(cks[i]).parents("tr").children(":eq(5)").find("span").html();
		totalPrice = totalPrice +Number(price);
		}
	}
	$("#totalPrice").html(totalPrice);
}

/*
 为tbody下面的每一个checkbox添加一个chang
 * */
$("#tbody .ck").change(function(){
	getTotalPrice();
	checkAllcheckBox();
})


/*
 循环遍历每一个tbody下checkbox,检测是否被选中
 若都被选中，则全选应该也被选中
 * */
function checkAllcheckBox(){
	var cks  = $("#tbody .ck");
	var flag = true;
	for(var i = 0;i <cks.length;i++){
		if(!cks[i].checked){
			flag = false;
			break;
		}
	}
	$("#allCheck")[0].checked = flag;
}

/*
 全选控制
 * */
$("#allCheck").change(function(){
	var cks = $("#tbody .ck");
	for(var i = 0;i <cks.length;i++){
		cks[i].checked = this.checked; //this.checked代表#allCheck
	}
	getTotalPrice();
})


/*
 单个商品的数量减少操作
 * */
$("#tbody .down").click(function(){
	var tr = $(this).parents("tr");
	var pid = tr.attr("pid");  //获取商品的编号
	tr.children(":eq(0)").children()[0].checked = true;
	var num = $(this).next().val();
	num --;
	if(num < 1){ //小于1时，不更新本地数据和dom内容，直接结束该函数的执行
		getTotalPrice(); //更新总价格
		checkAllcheckBox();
		return;
		
	}
	$(this).next().val(num);
	var price = tr.children(":eq(4)").find("span").html();//单价
	tr.children(":eq(5)").find("span").html(price*num);
	
	updateGoodsById(pid,-1);
	
	getTotalPrice(); //更新总价格
	checkAllcheckBox();
})


/*
 单个商品的数量增加操作
 * */
$("#tbody .up").click(function(){
	var tr = $(this).parents("tr");
	var pid = tr.attr("pid"); //获取商品编号
	tr.children(":eq(0)").children()[0].checked = true;
	var num = $(this).prev().val();
	num ++;
	$(this).prev().val(num);
	var price = tr.children(":eq(4)").find("span").html(); //单价
	tr.children(":eq(5)").find("span").html(price*num);
	updateGoodsById(pid,1);
	getTotalPrice();  //更新总价格
	checkAllcheckBox();
})



/*
 删除商品操作
 * */
$("#tbody .del").click(function(){
	if(confirm("你真的不要了吗？")){
		var tr = $(this).parents("tr");
		var pid = tr.attr("pid");
		tr.remove();
		deleteGoodsById(pid);
		getTotalPrice();
	}
})
