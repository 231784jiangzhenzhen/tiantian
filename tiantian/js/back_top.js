$(function(){
				$(window).scroll(function(){
					var t = $(window).scrollTop();
					if(t >300){
						$('#sideback1').addClass('active');
					}else{
						$('#sideback1').removeClass('active')
					}
				});
				$('#sideback1').click(function(){
					$('body').animate({'scrollTop':0},1000);
				})
			})