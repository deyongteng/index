new IScroll("#contentBox",{
	scrollbars: true,
	fadeScrollbars:true
})
//document.addEventListener("touchstart",function(ev){
//			ev.preventDefault();
//},{
//	passive:false
//});
var setValueY="";
var getStartY="";
var getStartX="";
var getTop;
var getLeft;
var setLeft=0;
var setTop=0;
var onoff=true;
var menu=document.getElementById("menu");
var lianJ=document.querySelector(".lianJ");
menu.addEventListener("touchstart",function(ev){
	getStartY=ev.changedTouches[0].pageY;
	getStartX=ev.changedTouches[0].pageX;
	getLeft=css(menu,"left");
	getTop=css(menu,"top");
	onoff=true;
},{
	passive:false
}
menu.addEventListener("touchmove",function(ev){
	ev.stopPropagation();
	onoff=false;
	var getMoveY="";
	var getMoveX="";
	
	getMoveY=ev.changedTouches[0].pageY;
	getMoveX=ev.changedTouches[0].pageX;
	setValueY=getMoveY-getStartY;
	setValueX=getMoveX-getStartX;
	
	setTop=getTop+setValueY;
	setLeft=getLeft+setValueX;
	
	css(menu,"left",setLeft);
	css(menu,"top",setTop);
	
},{
	passive:false
});
menu.addEventListener("touchend",function(){
	if(onoff){
		lianJ.style.href="../index.html";
	}
});