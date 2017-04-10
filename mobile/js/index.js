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
		  if(!(bIsIpad || bIsIphone || bIsMidp || bIsUc7 || bIsUc || bIsCE || bIsWM || bIsAndroid)){
		  window.location.href = 'http://115.28.10.122/resume/pc/index.html';
		  }
	})();


	document.documentElement.style.fontSize = window.screen.width / 3.75 + 'px';
	$(function(){
		// $(window).scrollTop(0);
		$('#dowebok').fullpage({
			// slidesColor: ['#0075D1', '#C2E5FF', '#FDF6E1', '#E9E9E9', '#F3F3F3', '#F9F3DC'],
			// anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
			// menu: '#menu',
			sectionsColor: ['#FFF','#A1AFAF','#8E6D80','#D4E9D8','#53BB8A','#C23943'],
			'navigation': true,
			// loopBottom: true

			// 设置飞入动画
			afterLoad: function(anchorLink, index){
				var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				if(index == 1){
					console.log('1rd page');
					$('#top-title').text('简历');
				}
				if(index == 2){
					console.log('2rd page');
					$('#top-title').text('心路历程');
					$('.b2-box-leftline').fadeIn().addClass('animated fadeInDown').one(animationEnd,function(){
						$(this).removeClass('animated fadeInDown');
						$('.passage-1').fadeIn().addClass('animated fadeInRight').one(animationEnd,function(){
							$(this).removeClass('animated fadeInRight');
							$('.passage-2').fadeIn().addClass('animated fadeInRight').one(animationEnd,function(){
								$(this).removeClass('animated fadeInRight');
								$('.passage-3').fadeIn().addClass('animated fadeInRight').one(animationEnd,function(){
									$(this).removeClass('animated fadeInRight');
								});
							});
						});
					});
				}
				if(index == 3){
					console.log('3rd page');
					$('#top-title').text('技术技能');
					$(function () {
						$('#bar-1').jqbar({ label: 'HTML/CSS', value: 82, barColor: '#D64747' });
						$('#bar-2').jqbar({ label: 'Javascript', value: 78, barColor: '#FF681F' });
						$('#bar-3').jqbar({ label: 'jQuery', value: 84, barColor: '#ea805c' });
						$('#bar-4').jqbar({ label: 'React/vue', value: 64, barColor: '#88bbc8' });
						$('#bar-5').jqbar({ label: 'C/C++/VB', value: 60, barColor: '#939393' });
						$('#bar-6').jqbar({ label: 'English', value: 89, barColor: '#3a89c9' });
					});
					$('.skill-1').fadeIn().addClass('animated fadeInLeft').one(animationEnd,function(){
						$(this).removeClass('animated fadeInLeft');
					});
					$('.skill-2').fadeIn().addClass('animated fadeInRight').one(animationEnd,function(){
						$(this).removeClass('animated fadeInRight');
					})

				}
				if(index == 4){
					console.log('4rd page');
					$('#top-title').text('工作实习');

				}
				if(index == 5){
					console.log('5rd page');
					// $('.section4').find('p').fadeIn(2000);
					$('#top-title').text('我的作品');
				}
				if(index == 6){
					console.log('6rd page');
					$('#down').hide(10);
					$('#top-title').text('联系方式');
					// $('.section4').find('p').fadeIn(2000);
				}
			},
			onLeave: function(index, direction){
				if(index == '1'){
					console.log('leave 1rd');
				}
				if(index == '2'){
					console.log('leave 2rd');
					$('.b2-box-leftline,.passage-1,.passage-2,.passage-3').fadeOut();
				}
				if(index == '3'){
					console.log('leave 3rd');
					$('#bar-1,#bar-2,#bar-3,#bar-4,#bar-5,#bar-6').children().remove();
					$('.skill-1,.skill-2').fadeOut();
				}
				if(index == '4'){
					console.log('leave 4rd');
				}
				if(index == '5'){
					console.log('leave 5rd');
				}
				if(index == '6'){
					console.log('leave 6rd');
					$('#down').show();
				}
			}
		});

		// $(window).resize(function(){
	 //        autoScrolling();
	 //    });

	 //    function autoScrolling(){
	 //        // var $ww = $(window).width();
	 //        $.fn.fullpage.setAutoScrolling(true);
	 //        // if($ww < 1024){
	 //        //     $.fn.fullpage.setAutoScrolling(false);
	 //        // } else {
	 //        //     $.fn.fullpage.setAutoScrolling(true);
	 //        // }
	 //    }
		// autoScrolling();
		// setInterval(function(){			//第五页轮播动画
	 //        $.fn.fullpage.moveSlideRight();
	 //    }, 10000);
	});
	
	// 第一页下箭头动画
	$(function(){
		var c = document.getElementById("downCanvas"),
	        cxt = c.getContext("2d");
	        cxt.beginPath();
	        cxt.moveTo(10, 30);
	        cxt.lineTo(25, 45);
	        cxt.lineTo(40, 30);
	        cxt.lineWidth = 2;
	        cxt.strokeStyle = "#F8F8F8";
	        cxt.lineCap = 'round';
	        cxt.lineJoin = "round";
	        cxt.stroke();
	        // cxt.moveTo(5, 5);
	        // cxt.lineTo(25, 30);
	        // cxt.lineTo(45, 5);
	        // cxt.lineWidth = 2;
	        // cxt.strokeStyle = "#F8F8F8";
	        // cxt.lineCap = 'round';
	        // cxt.lineJoin = "round";
	        // cxt.stroke();
	});
});