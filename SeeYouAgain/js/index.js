// 获取可视区的宽
var setW=$(document).width() - 20;

// 设置span的宽度
var spanWidth=Math.floor(setW / 10);

//第一屏
var img1Conet=data.img1;
var img1Html="";
var JQ_ulBox=$(".ulBox");
img1Html+="<ul class='liBox1'>";
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
function imgAn1(){
	TweenMax.staggerFrom(".img", 1, {scale:0.1, opacity:0, delay:0.2, ease:Elastic.liner});
	TweenMax.staggerFrom(".img1_1imgBox", 1, {scale:1, opacity:0, delay:1, ease:Elastic.liner});
	TweenMax.staggerFrom(".img2", 1, {width:0.1, opacity:1, delay:0.8, ease:Elastic.liner});
	TweenMax.staggerFrom(".img1_3imgBox", 2, {scale:1, opacity:0, delay:1.5, ease:Elastic.liner});
	TweenMax.staggerFrom(".img1_4imgBox", 2, {scale:1, opacity:0, delay:2.5, ease:Elastic.liner});
}

//第二屏
var img2Conet=data.img2;
var img2Html="";
img2Html+="<ul class='liBox2'>";
for (var i = 0; i < 3; i++) {
	img2Html+="<li class='img2_"+i+"imgBox'>";
	img2Html+="<span></span>";
	img2Html+="</li>";
}
img2Html+="</ul>";
JQ_ulBox.append(img2Html);

var spans="";
for (var i = 0; i < 10; i++) {
	spans+="<span style='left:"+i*spanWidth+"px;' class='spans'></span>";
}
$(".img2_0imgBox").find("span").append(spans);
var nub=0;
var nubS=0;
var JQ_spans=$(".spans");
var spans=document.getElementsByClassName("spans");
var width=$(document).width()

setInterval(function(){
	nub++;
	if(nub==img2Conet.length){
		nub=0;
	}
	JQ_spans.each(function(index,el){
		$(el).css({
			"-webkit-transition":"1s",
			"transition":"1s",
			"-webkit-transform": "rotateY(90deg)",
			"transform": "rotateY(90deg)",
			"background": "url(" + img2Conet[nub] + ")",
			"backgroundPositionX": -spanWidth * index + "px",
			"backgroundSize":setW + "px 100%"
		})
	})	
	setTimeout(function(){
		JQ_spans.each(function(index,el){
			$(el).css({
				"-webkit-transition":"",
				"transition":"",
				"-webkit-transform": "rotateY(0deg)",
				"transform": "rotateY(0deg)",
				"height": "100%",
				"width": spanWidth + "px",
				"background": "url(" + img2Conet[nub] + ")",
				"backgroundPositionX": -spanWidth * index + "px",
				"backgroundSize":setW + "px 100%"
			})
		})
	},1000)
},3000)

JQ_spans.each(function(index,el){
	$(el).css({
		"width": spanWidth + "px",
		"height": "100%",
		"background": "url(" + img2Conet[nub] + ")",
		"backgroundPositionX": -spanWidth * index + "px",
		"backgroundSize":setW + "px 100%"
	})
})