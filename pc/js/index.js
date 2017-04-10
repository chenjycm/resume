$(document).ready(function() {
	(function browserRedirect(){
		  var sUserAgent = navigator.userAgent.toLowerCase();
		  var bIsIpad = sUserAgent.match(/ipad/i) == 'ipad';
		  var bIsIphone = sUserAgent.match(/iphone os/i) == 'iphone os';
		  var bIsMidp = sUserAgent.match(/midp/i) == 'midp';
		  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
		  var bIsUc = sUserAgent.match(/ucweb/i) == 'web';
		  var bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce';
		  var bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile';
		  var bIsAndroid = sUserAgent.match(/android/i) == 'android';
		  if(bIsIpad || bIsIphone || bIsMidp || bIsUc7 || bIsUc || bIsCE || bIsWM || bIsAndroid ){
		  window.location.href = 'http://115.28.10.122/resume/mobile/index.html';
		  }
	})();
	$(function(){
		// $(window).scrollTop(0);
		$('#dowebok').fullpage({
			slidesColor: ['#0075D1', '#C2E5FF', '#FDF6E1', '#E9E9E9', '#F3F3F3', '#F9F3DC'],
			anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
			menu: '#menu',
			// loopBottom: true


		    
			// 设置飞入动画
			afterLoad: function(anchorLink, index){
				var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				if(index == 1){
					console.log('1rd page');
				}
				if(index == 2){
					console.log('2rd page');
					$('.b2-me').delay(0).animate({left:'0'},1000,'easeOutExpo');
					$('.b2-text').delay(0).animate({right:'0'},1000,'easeOutExpo');
					$('.box2-bottom').fadeIn(2000);
					// $('.box2').find('.li').delay(500).animate({
					// 	left: '0'
					// }, 1500, 'easeOutExpo');
					// $('.section2').find('.b2-text').delay(500).animate({
					// 	right: '0'
					// }, 1500, 'easeOutExpo');
				}
				if(index == 3){
					console.log('3rd page');
					$('.htmllogo').delay(1500).fadeIn();
					$('.csslogo').delay(2000).fadeIn();
					$('.jslogo').delay(1000).fadeIn();
					$('.jquerylogo').delay(2000).fadeIn();
					$('.reactlogo').delay(1500).fadeIn();
					
					$('.skill-1').delay(500).fadeIn().addClass('animated flipInX').one(animationEnd,function(){$(this).removeClass('animated flipInX');});
					$('.skill-2').delay(500).fadeIn().addClass('animated bounceIn').one(animationEnd,function(){$(this).removeClass('animated bounceIn');});
					$('.skill-3').delay(500).fadeIn().addClass('animated jello').one(animationEnd,function(){$(this).removeClass('animated jello');});
					$('.skill-4').delay(500).fadeIn().addClass('animated flipInY').one(animationEnd,function(){$(this).removeClass('animated flipInY');});
					

					//第三页柱状条动画
					$(function () {
						$('#bar-1').jqbar({ label: 'HTML/CSS', value: 82, barColor: '#D64747' });
						$('#bar-2').jqbar({ label: 'Javascript', value: 78, barColor: '#FF681F' });
						$('#bar-3').jqbar({ label: 'jQuery', value: 84, barColor: '#ea805c' });
						$('#bar-4').jqbar({ label: 'React', value: 50, barColor: '#88bbc8' });
						$('#bar-5').jqbar({ label: 'C/C++/VB', value: 60, barColor: '#939393' });
						$('#bar-6').jqbar({ label: 'English', value: 90, barColor: '#3a89c9' });
					});


					// $('.section3').find('p').delay(500).animate({
					// 	bottom: '0'
					// }, 1500, 'easeOutExpo');
				}
				if(index == 4){
					console.log('4rd page');
					$('.b4-middle').fadeIn(1000);
					// $('.point-up').fadeIn().addClass('animated fadeInDown').one(animationEnd,function(){$(this).removeClass('animated fadeInDown');});
					// $('.point-down').fadeIn().addClass('animated fadeInUp').one(animationEnd,function(){$(this).removeClass('animated fadeInUp');});
					$('.point-1,.point-2,.point-3,.point-4,.point-5,.point-6').fadeIn().addClass('animated fadeInDown').one(animationEnd,function(){
						$(this).removeClass('animated fadeInDown');
						$('.time-1,.time-2,.time-3,.time-4,.time-5,.time-6').fadeIn().addClass('animated fadeInUp').one(animationEnd,function(){
							$(this).removeClass('animated fadeInUp');
							$('.work-1,.work-2,.work-3,.work-4,.work-5,.work-6').fadeIn().addClass('animated bounceIn').one(animationEnd,function(){
								$(this).removeClass('animated bounceIn');
								$('.say').fadeIn().addClass('animated rubberBand').one(animationEnd,function(){
									$(this).removeClass('animated rubberBand');
								});
							});
						});
					});
					// $('.point-2').delay(1000).fadeIn().addClass('animated fadeInUp').one(animationEnd,function(){
					// 	$(this).removeClass('animated fadeInUp');
					// 	$('.time-2').fadeIn().addClass('animated fadeInDown').one(animationEnd,function(){
					// 		$(this).removeClass('animated fadeInDown');
					// 		$('.work-2').fadeIn().addClass('animated bounceIn').one(animationEnd,function(){
					// 			$(this).removeClass('animated bounceIn');
					// 		});
					// 	});
					// });
					// $('.point-3').delay(2000).fadeIn().addClass('animated fadeInDown').one(animationEnd,function(){
					// 	$(this).removeClass('animated fadeInDown');
					// 	$('.time-3').fadeIn().addClass('animated fadeInUp').one(animationEnd,function(){
					// 		$(this).removeClass('animated fadeInUp');
					// 		$('.work-3').fadeIn().addClass('animated bounceIn').one(animationEnd,function(){
					// 			$(this).removeClass('animated bounceIn');
					// 		});
					// 	});
					// });
					// $('.point-4').delay(3000).fadeIn().addClass('animated fadeInUp').one(animationEnd,function(){
					// 	$(this).removeClass('animated fadeInUp');
					// 	$('.time-4').fadeIn().addClass('animated fadeInDown').one(animationEnd,function(){
					// 		$(this).removeClass('animated fadeInDown');
					// 		$('.work-4').fadeIn().addClass('animated bounceIn').one(animationEnd,function(){
					// 			$(this).removeClass('animated bounceIn');
					// 		});
					// 	});
					// });
					// $('.point-5').delay(4000).fadeIn().addClass('animated fadeInDown').one(animationEnd,function(){
					// 	$(this).removeClass('animated fadeInDown');
					// 	$('.time-5').fadeIn().addClass('animated fadeInUp').one(animationEnd,function(){
					// 		$(this).removeClass('animated fadeInUp');
					// 		$('.work-5').fadeIn().addClass('animated bounceIn').one(animationEnd,function(){
					// 			$(this).removeClass('animated bounceIn');
					// 		});
					// 	});
					// });
					// $('.point-6').delay(5000).fadeIn().addClass('animated fadeInDown').one(animationEnd,function(){
					// 	$(this).removeClass('animated fadeInDown');
						
					// });
					// $('.section4').find('p').fadeIn(2000);
				}
				if(index == 5){
					console.log('5rd page');
					// $('.section4').find('p').fadeIn(2000);
				}
				if(index == 6){
					console.log('6rd page');
					// $('.section4').find('p').fadeIn(2000);
				}
			},
			onLeave: function(index, direction){
				if(index == '1'){
					console.log('leave 1rd');
				}
				if(index == '2'){
					console.log('leave 2rd');
					$('.b2-me').delay(500).animate({left:'-120%'},1000,'easeOutExpo');
					$('.b2-text').delay(500).animate({right:'-120%'},1000,'easeOutExpo');
					$('.box2-bbar-1,bar-1,bar-1,bar-1,bar-1ottom').fadeOut(500);
					$('.box2-bottom').fadeOut(500);
					// delay(500).animate({
					// 	right: '-120%'
					// }, 1500, 'easeOutExpo');
				}
				if(index == '3'){
					console.log('leave 3rd');
					$('.htmllogo,.csslogo,.jslogo,.jquerylogo,.reactlogo,.skill-1,.skill-2,.skill-3,.skill-4').css('display','none');
					$('#bar-1,#bar-2,#bar-3,#bar-4,#bar-5,#bar-6').children().remove();

					// $('.section3').find('p').delay(500).animate({
					// 	bottom: '-120%'
					// }, 1500, 'easeOutExpo');
				}
				if(index == '4'){
					console.log('leave 4rd');
					$('.b4-middle,.work-1,.work-2,.work-3,.work-4,.work-5,.point-1,.point-2,.point-3,.point-4,.point-5,.point-6,.time-1,.time-2,.time-3,.time-4,.time-5,.say').css('display','none');
				}
				if(index == '5'){
					console.log('leave 5rd');
					// $('.section4').find('p').fadeOut(2000);
				}
				if(index == '6'){
					console.log('leave 6rd');
					// $('.section4').find('p').fadeOut(2000);
				}
			}
			// 飞入动画设置结束
		});

		$(window).resize(function(){
	        autoScrolling();
	    });

	    function autoScrolling(){
	        var $ww = $(window).width();
	        if($ww < 1024){
	            $.fn.fullpage.setAutoScrolling(false);
	        } else {
	            $.fn.fullpage.setAutoScrolling(true);
	        }
	    }
		autoScrolling();
		// setInterval(function(){			//第五页轮播动画
	 //        $.fn.fullpage.moveSlideRight();
	 //    }, 10000);
	});
	$(".re").mouseover(function(){
		this.innerHTML="Resume-ChenJianming";
	}).mouseout(function(){
		this.innerHTML="个人简历-前端工程师";
	});
	// 第一页下箭头动画
	$(function(){
		var c = document.getElementById("downCanvas"),
	            cxt = c.getContext("2d");
	        cxt.beginPath();
	        cxt.moveTo(5, 20);
	        cxt.lineTo(25, 45);
	        cxt.lineTo(45, 20);
	        cxt.lineWidth = 5;
	        cxt.strokeStyle = "#F8F8F8";
	        cxt.lineCap = 'round';
	        cxt.lineJoin = "round";
	        cxt.stroke();
	        cxt.moveTo(5, 5);
	        cxt.lineTo(25, 30);
	        cxt.lineTo(45, 5);
	        cxt.lineWidth = 5;
	        cxt.strokeStyle = "#F8F8F8";
	        cxt.lineCap = 'round';
	        cxt.lineJoin = "round";
	        cxt.stroke();
	});

	

	// $(function(){
 //        paopao();
 //    });
 //    //需要的参数
 //    var pp = {
 //        pl : 0,   //生成的paopao随机的居左的位置
 //        color : ["ce4f6d","ca4fce","4f82ce","4fce91","ceca4f"],   //随机添加的颜色
 //        c : 0,  //初始化颜色
 //        step : 500
 //    };
 //    function paopao(){
 //        //添加元素
 //        var html = '<div class="paopao iconfont" style="left: '+ pp.pl + 'px;color: #'+ pp.color[pp.c] +'">&#xe60d;</div>';
 //        $(".pao").append(html);

 //        //获取颜色
 //        pp.c ++;
 //        if(pp.c >= pp.color.length){
 //            pp.c = 0;
 //        }

 //        pp.pl = Math.round(Math.random()*100/3);  //随机位置

 //        //执行动画
 //        $(".paopao").each(function () {

 //            if($(this).index()%2 == 0){
 //                pp.step = 100;
 //            }else if($(this).index()%3 == 0){
 //                pp.step = 200;
 //            }else{
 //                pp.step = 300;
 //            }

 //            if (!$(this).is(":animated")) {
 //                $(this).animate({            //运动
 //                    top: "-300px",
 //                    fontSize: "60px",
 //                    opacity: "0"
 //                }, (500-pp.step)*10,
 //                function () {
 //                    $(this).remove();        //清除元素
 //                })
 //            }
 //        });
 //        //定时器
 //        setTimeout(paopao,pp.step);
 //    }

});