$(function() {
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

})