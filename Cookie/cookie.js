function setCookie(name,value,eDays){

		var oDate = new Date();
		oDate.setDate(oDate.getDate()+eDays);//过期时限

		document.cookie=name +'='+ value +';expires=' +oDate;
	}
	//setCookie('user','xiaoming',14);
	//alert(document.cookie);

	function getCookie(name){
		var array =document.cookie.split('; ')//cookie是以分号 和空格 分隔，因此分隔字符串

		for(var i=0;i<array.length;i++){
			var arr2 = array[i].split('name');//重新分隔等号 隔开name与value
			if (arr2[0]==name) {
				return arr2[1]; //数组的0是name，1是value
			}

		}
		return '';//没有cookie返回空字符串


	}
	//alert(getCookie('user'));
	function removeCookie(name){
		setCookie(name,1,-1);//将时间设为-1，从而清除cookie
		
	}