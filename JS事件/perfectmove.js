function getStyle(obj,name){

		if(obj.currentStyle){
			return obj.currentStyle[name];
		}
		else{
			                  
			return getComputedStyle(obj, false)[name]; // 此处返回 样式值
		}
	}
//用json把attr，itarget 一起替代
 	function move(obj, json, fnEnd){
 		clearInterval(obj.timer);

 		obj.timer=setInterval( function(){

 			var stop = true; //假设：所有值都到达预定位置

 			for (var attr in json){
 			 var current = 0;

 			 if (attr == 'opacity') {
 			 	current= Math.round(parseFloat(getStyle(obj,attr))*100);
 			 }
 			 else{ 
 			 	current= parseInt(getStyle(obj, attr)); //取得现在样式的值，调用getstyle函数，为了算速度
 			 }
 			  

 			 var speed = (json[attr]-current)/6;
 			 speed=speed>0? Math.ceil(speed):Math.floor(speed);

 			 if (current != json[attr]) stop = false; //判定是否到达目标点位

 			


 			 if (attr == 'opacity') {
 			 	obj.style.filter='alpha(opacity:'+(current+speed)+')';//opacity 语句
 			 	obj.style.filter=(current+speed)/100;
 			 }
 			 else{
 			 
 			 	obj.style[attr]=current+speed+'px';  //运动语句
 			 }

 			}

 			if (stop) {         //到达目标点位时(stop为true时），关闭定时器
 				clearInterval(obj.timer);
 				if(fnEnd)fnEnd();
 			}
 		},30);

 	}