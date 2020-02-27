function getStyle(obj,name){

		if(obj.currentStyle){
			return obj.currentStyle[name];
		}
		else{
			                  
			return getComputedStyle(obj, false)[name]; // 此处返回 样式值
		}
	}

 	function move(obj, attr,itarget,fnEnd){
 		clearInterval(obj.timer);

 		obj.timer=setInterval( function(){
 			 var current = parseInt(getStyle(obj, attr)); //取得现在样式的值，调用getstyle函数，为了算速度

 			 var speed = (itarget-current)/6;
 			 speed=speed>0? Math.ceil(speed):Math.floor(speed);

 			 if (itarget==current) {
 			 	clearInterval(obj.timer);
 			 	if(fnEnd)fnEnd();        // 检查是否有传参，并执行函数
 			 }
 			 else{
 			 	obj.style[attr]=current+speed+'px';
 			 }
 		},30)

 	}