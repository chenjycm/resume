$(document).ready(function() {
	$(function(){
		$('#dowebok').fullpage({
			slidesColor: ['#0075D1', '#C2E5FF', '#FDF6E1', '#E9E9E9', '#F3F3F3', '#F9F3DC'],
			anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
			menu: '#menu'
		});
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
	// 第三页柱状条动画   
	$(document).ready(function () {
		$('#bar-1').jqbar({ label: 'HTML/CSS', value: 82, barColor: '#D64747' });
		$('#bar-2').jqbar({ label: 'Javascript', value: 78, barColor: '#FF681F' });
		$('#bar-3').jqbar({ label: 'jQuery', value: 84, barColor: '#ea805c' });
		$('#bar-4').jqbar({ label: 'React', value: 50, barColor: '#88bbc8' });
		$('#bar-5').jqbar({ label: 'C/C++/VB', value: 60, barColor: '#939393' });
		$('#bar-6').jqbar({ label: 'English', value: 90, barColor: '#3a89c9' });
	});
	
	
});