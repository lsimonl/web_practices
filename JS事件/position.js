
function position(ev){

	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

	var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;


	return {x:ev.clientX + scrollLeft, y: ev.clientY +scrollTop};
}