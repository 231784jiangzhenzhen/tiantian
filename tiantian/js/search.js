/*
 * header搜索框效果
 */
$(function() {
	$("#activity").keyup(function() {
		var v = $(this).val();
		$.get("js/search.php", {
			wd: v
		}, function(data) {
			console.log(data);
			var str = JSON.parse(data);
			//console.log(str);
			if(str.length != 0) {
				$("#shelper").addClass("active"); //显示检索列表
				//先清空ul列表
				$("#shelper").empty();
				//再循环追加新的内容
				for(var i = 0; i < str.length; i++) {
					$('<li>' + str[i] + '</li>').appendTo($("#shelper"));

				}

			} else {
				$("#shelper").removeClass("active")
			}
		})
	})

	$("#shelper").delegate('li', 'click', function() {
		var t = $(this).html();
		//console.log(t);
		$("#activity").val(t);
		$("#shelper").removeClass("active");
	})
})