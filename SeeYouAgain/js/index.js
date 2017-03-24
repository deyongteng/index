// 获取可视区的宽
var setW=$(document).width() - 20;

// 设置span的宽度
var spanWidth=Math.floor(setW / 10);

//第一屏
var img1Conet=data.img1;
var img1Html="";
var JQ_ulBox=$(".ulBox");
img1Html+="<ul class='liBox1 Slide'>";
for (var i = 0; i < img1Conet.length; i++) {
	if(i===0){
		img1Html+="<li class='img1_"+i+"imgBox'>";
		img1Html+="<div class='imgBox'>";
		img1Html+="<img src="+img1Conet[i]+" class='img'/>";
		img1Html+="</div>";
		img1Html+="</li>";
	}else if(i===2){
		img1Html+="<li class='img1_"+i+"imgBox'>";
		img1Html+="<img src="+img1Conet[i]+" class='img2'/>";
		img1Html+="</li>";
	}else{
		img1Html+="<li class='img1_"+i+"imgBox'>";
		img1Html+="<span>"+img1Conet[i]+"</span>";
		img1Html+="</li>";
	}
}
img1Html+="</ul>";
JQ_ulBox.append(img1Html);
$(".liBox1").css("background-image","url(img/bg.jpg)");

//第一屏动画

var imgAn1=function (){
	TweenMax.staggerFrom(".img", 1, {scale:0.1, opacity:0, delay:0.2, ease:Elastic.liner});
	TweenMax.staggerFrom(".img1_1imgBox", 1, {scale:1, opacity:0, delay:1, ease:Elastic.liner});
	TweenMax.staggerFrom(".img2", 1, {width:0.1, opacity:1, delay:0.8, ease:Elastic.liner});
	TweenMax.staggerFrom(".img1_3imgBox", 2, {scale:1, opacity:0, delay:1.5, ease:Elastic.liner});
	TweenMax.staggerFrom(".img1_4imgBox", 2, {scale:1, opacity:0, delay:2, ease:Elastic.liner});
}
imgAn1();

//第二屏
var img2Conet=data.img2;
var img2Html="";
img2Html+="<ul class='liBox2 Slide'>";
for (var i = 0; i < 2; i++) {
	if(i===1){
		img2Html+="<li class='img2_" + i + "imgBox'>";
		img2Html+="<span>" + textS[0] + "</span>";
		img2Html+="</li>";
	}else{
		img2Html+="<li class='img2_" + i + "imgBox'></li>";
	}
};
img2Html+="</ul>";
JQ_ulBox.append(img2Html);
var spans="";
for(var i = 0; i < img2Conet.length; i++ ){
	spans+="<span class='spans' style='background:url(" + img2Conet[i] + ");'></span>";
}
$(".img2_0imgBox").append(spans);
var JQ_spans=$(".img2_0imgBox").find("span");
JQ_spans.css({
	"background-size":"100% 100%",
	"z-lindex":"0"
});
var spans=document.getElementsByClassName("spans");

var nub=JQ_spans.length-1;
setInterval(function(){
	// for(var i = 0;i <spans.length;i++){
	// 	spans[i].style.zIndex=i+1;
	// }
	JQ_spans.hide;
	JQ_spans.eq(nub-1).css("z-index","1");
	JQ_spans.eq(nub-1).show;
	JQ_spans.eq(nub).css("z-index","2");
	JQ_spans.eq(nub).show;
console.log(nub)
	MTween({
		el:spans[nub],
		target:{rotate:80},
		time:1000,
		type:"linear",
		callBack:function(){
			console.log(nub)
			css(spans[nub],"rotate","0");
			JQ_spans.css("z-index","0");
			JQ_spans.hide;
			JQ_spans.eq(nub-1).css("z-index","2");
			JQ_spans.eq(nub).css("z-index","1");
			nub--;
			if(nub<0){
				nub=JQ_spans.length-1;
			}
		}
	})
	
	
},3000)
var imgAn2=function (){
	TweenMax.staggerFrom(".img2_1imgBox", 2, {x:0, scale:0.1, opacity:0, delay:0.5, ease:Elastic.easeInOut});
}
var ulBox=document.getElementsByClassName("ulBox")[0]


	var setValueY="";
	var getY="";
	var hdY="";
	
	var jQ_animatiBox=$(".ulBox");
	var jQ_Modular=$(".Slide");
	var getStartY="";
	var getChaZ="";
	var getChaZiY="";
	var onoff=true;
	var num=0;
	var Mod_length=jQ_Modular.length-1;
	jQ_Modular.css("zIndex",0);
	jQ_Modular.eq(0).css("zIndex",2);
	jQ_Modular.eq(1).css("zIndex",1);


	jQ_animatiBox.on("touchstart",function(ev){
		height=document.getElementsByClassName("ulBox")[0].offsetHeight;
		getStartY=ev.changedTouches[0].pageY;
	});
	
	jQ_animatiBox.on("touchmove",function(ev){
		var getMoveY="";
		getMoveY=ev.changedTouches[0].pageY;
		setValueY=getMoveY-getStartY;
		if(setValueY<0){
			if(onoff){
				num++;
				if(num>Mod_length){
					num=1;
					alert("已经是最后一张了");
					return;
				}
				if(num==1){
					imgAn2();//第二屏函数动画
				}
					//第二屏总动画函数；
				onoff=false;
			}
			jQ_Modular.hide();
			jQ_Modular.eq(num).show();
			jQ_Modular.eq(num-1).show();
			jQ_Modular.eq(num-1).css("zIndex",8);
			jQ_Modular.eq(num).css("zIndex",10);
			jQ_Modular.eq(num).css("top","100%");
			jQ_Modular.eq(num).css("top",setValueY+height);
			
		}
		if(setValueY>0){
			if(onoff){
				num--;
				if(num<0){
					num=0;
					alert("已经是第一张了");
					return;
				}
				if(num==0){
					imgAn1();//第五屏函数动画
				}
				
				onoff=false;
			}
			jQ_Modular.hide();
			jQ_Modular.eq(num).show();
			jQ_Modular.eq(num+1).show();
			jQ_Modular.eq(num).css("zIndex",10);
			jQ_Modular.eq(num+1).css("zIndex",8);
			jQ_Modular.eq(num).css("top",-height);
			jQ_Modular.eq(num).css("top",setValueY-height);
		}
		
	});
	jQ_animatiBox.on("touchend",function(){
		onoff=true;
		if(setValueY<10){
			jQ_Modular.eq(num).animate({
				top:0
			},500,function(){
				jQ_Modular.eq(num-1).css("top",-height);
			});
		}else{
			jQ_Modular.eq(num).animate({
				top:0
			},500,function(){
				jQ_Modular.eq(num+1).css("top",height);
			});
		}
	});