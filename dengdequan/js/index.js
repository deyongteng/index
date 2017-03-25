document.addEventListener("touchstart",function(ev){
	ev.preventDefault();
})
var datas=[];
var nub=0;
for(var s in data){
	datas=datas.concat(data[s]);
}
for (var i = 0; i < datas.length; i++) {
	var img=new Image();
	if(typeof(datas[i])=="string"){
		img.src=datas[i];
		img.onload=function(){
			nub++;
			$(".text").html("甜蜜即将开始："+(Math.floor(nub/49*100))+"%");
				if(nub===23){
					$("#logdin").hide();
					$("#logdin").css("z-index","0");
					$(".imgBpx1").eq(0).show();
					quange();
				}
		}
	}
	
}


function quange(){
	var JQ_box=$("#box");
	var JQ_bgmImg=$(".bgmImg");
	var bgmBox=document.getElementsByClassName("bgmBox")[0]
	var bgm=document.getElementsByClassName("bgm")[0]
	var off=true;
	
	$(".bgm").attr("src",audioM[0]);
	bgm.play();
	bgmBox.addEventListener("touchstart",function(ev){
		ev.stopPropagation();
		if(off){
			bgm.pause();
			JQ_bgmImg.css("-webkit-animation-play-state","paused");
			JQ_bgmImg.css("animation-play-state","paused");
			off=false;
		}else{
			bgm.play();
			JQ_bgmImg.css("-webkit-animation-play-state","running");
			JQ_bgmImg.css("animation-play-state","running");
			off=true;
		}
		return false;
	})

		//第一屏
	var imghtml1=data.img1;
	var html1="";
	html1+="<ul class='imgBpx1'>";
	for (var i = 0; i < imghtml1.length; i++) {
		if(i===6){
			html1+="<li class='diyipin"+i+"'><span>"+imghtml1[i]+"</span></li>";
		}else if(i===7){
			html1+="<li class='diyipin"+i+"'><span>"+imghtml1[i]+"</span></li>";
		}else if(i===3){
			html1+="<li class='diyipin"+i+"'></li>";
		}else{
			html1+="<li class='diyipin"+i+"'><img  src='"+imghtml1[i]+"'/></li>";
		}
	}
	html1+="</ul>";
	JQ_box.append(html1);
	//第一屏动画函数
	diyiPinAnmi();
	function diyiPinAnmi(){
		TweenMax.staggerFrom(".diyipin1", 1, {y:-100, scale:0.1, opacity:0, delay:0.2, ease:Elastic.liner});
		TweenMax.staggerFrom(".diyipin2", 1, {y:0, scale:0.1, opacity:0, delay:0.2, ease:Elastic.liner});
		TweenMax.staggerFrom(".diyipin5", 1, {y:0, scale:0.1, opacity:0, delay:0.2, ease:Elastic.liner});
		TweenMax.staggerFrom(".diyipin4", 1, {y:0, scale:0.1, opacity:0, delay:0.2, ease:Elastic.liner});
	}
	
	//第二屏
	var imghtml2=data.img2;
	var html2="";
	html2+="<ul class='imgBpx1'>";
	for (var i = 0; i < imghtml2.length; i++) {
		if(i===2){
			html2+="<li class='dierpin"+i+"'><span>"+imghtml2[i]+"</span></li>";
		}else if(i===3){
			html2+="<li class='dierpin"+i+"'><span class='sue'>"+imghtml2[i]+"</span></li>";
		}else{
			html2+="<li class='dierpin"+i+"'><img  src='"+imghtml2[i]+"'/></li>";
		}
	}
	html2+="</ul>";
	JQ_box.append(html2);
	var dierpin1=document.getElementsByClassName("dierpin1")[0];
	
	//第二屏动画
	function dierPinAnmi(){
		TweenMax.staggerFrom(".dierpin1", 4, {y:0, scale:1, opacity:1, delay:0.5, ease:Elastic.liner});
		TweenMax.staggerFrom(".dierpin2", 1, {y:0, scale:0.1, opacity:0, delay:1.5, ease:Elastic.liner});
		TweenMax.staggerFrom(".sue", 1, {y:0, scale:0.1, opacity:0, delay:2.5, ease:Elastic.liner});
	}
	
	//第三屏
	var imghtml3=data.img3;
	var html3="";
	html3+="<ul class='imgBpx1'>";
	for (var i = 0; i < imghtml3.length+1; i++) {
		if(i===3){
			html3+="<li class='disanpin"+i+"'><span>"+imghtml3[i]+"</span></li>";
		}else if(i===4){
			html3+="<li class='disanpin"+i+"'><span>"+imghtml3[i]+"</span></li>";
		}else if(i===5){
			html3+="<li class='disanpin"+i+"'></li>";
		}else{
			html3+="<li class='disanpin"+i+"'><img  src='"+imghtml3[i]+"'/></li>";
		}
	}
	html3+="</ul>";
	JQ_box.append(html3);
	var disanpin1=document.getElementsByClassName("disanpin1")[0];
	
	//第三屏动画
	function disanPinAnmi(){
		TweenMax.staggerFrom(".disanpin1", 4, {x:0, scale:1, opacity:1, delay:0.5, ease:Elastic.liner});
		TweenMax.staggerFrom(".disanpin3", 1, {x:300, scale:1, opacity:0, delay:2, ease:Elastic.easeOut});
		TweenMax.staggerFrom(".disanpin4", 1, {x:-300, scale:1, opacity:0, delay:2, ease:Elastic.easeOut});
	}
	
	//第四屏
	var imghtml4=data.img4
	var imghtml4Text=data.img4Text;
	var imghtml4Text2=data.img4Text2;
	var html4="";
	var spans="";
	html4+="<ul class='imgBpx1'>";
	for (var i = 0; i < imghtml4.length+2; i++) {
		if(i===1){
			html4+="<li class='disipin"+ i +"'></li>";
		}else if(i===2){
			html4+="<li class='disipin"+ i +"'></li>";
		}else{
			html4+="<li class='disipin"+i+"'><img src='"+imghtml4[i]+"'/></li>";
		}
	}
	for (var i = 0; i < imghtml4Text.length; i++) {
		if(i===0||i===2||i===4||i===6){
			spans+="<span class='blod'>"+ imghtml4Text[i]+"</span>";
		}else{
			spans+="<span class='blodNo'>"+ imghtml4Text[i]+"</span>";
		}
	}
	html4+="</ul>";
	JQ_box.append(html4); 
	$(".disipin1").append(spans);
	$(".disipin2").append("<span class='spanTime'>"+ imghtml4Text2[0]+"</span>");
	
	//第四屏动画
	function disiPinAnmi(){
		TweenMax.staggerFrom(".disipin0", 0.8, {x:-320, scale:1, opacity:1, rotation:0,  delay:0.6, ease:Elastic.liner});
		TweenMax.staggerFrom(".blod", 2, {y:-100, scale:1, opacity:0, rotation:360,  delay:1, ease:Elastic.liner});
		TweenMax.staggerFrom(".blodNo", 3, {y:-300, scale:1, opacity:0, rotation:360, delay:1, ease:Elastic.liner});
		TweenMax.staggerFrom(".disipin2", 1, {x:-300, scale:1, opacity:1, rotation:0, delay:1.5, ease:Elastic.easeOut});
	}
	
	//第五屏动画
	var imghtml5=data.img5;
	var html5="";
	html5+="<ul class='imgBpx1'>";
	for (var i = 0; i < imghtml5.length; i++) {
		html5+="<li class='diwupin"+i+"'><img src='"+ imghtml5[i] +"' /></li>";
	}
	html5+="</ul>";
	JQ_box.append(html5);
	diwuPinAnmi()
	function diwuPinAnmi(){
		TweenMax.staggerFrom(".diwupin1", 2, {y:260, scale:1, opacity:1, rotation:0,  delay:1, ease:Elastic.liner});
		TweenMax.staggerFrom(".diwupin2", 2, {y:-260, scale:1, opacity:1, rotation:0,  delay:1, ease:Elastic.liner});
	}
	
	//第六屏
	var imghtml6=data.img6;
	var html6="";
	html6+="<ul class='imgBpx1'>";
	for (var i = 0; i < imghtml6.length; i++) {
		if(i===3){
			html6+="<li class='diliupin"+i+"'><span class='left'>"+imghtml6[i]+"</span></li>";
		}else if(i===4){
			html6+="<li class='diliupin"+i+"'><span class='right'>"+imghtml6[i]+"</span></li>";
		}else{
			html6+="<li class='diliupin"+i+"'><img  src='"+imghtml6[i]+"'/></li>";
		}
	}
	html6+="</ul>";
	JQ_box.append(html6);
	function diliuPinAnmi(){
		TweenMax.staggerFrom(".diliupin1", 2, {x:170, scale:1, opacity:1, rotation:0,  delay:1, ease:Elastic.liner});
		TweenMax.staggerFrom(".diliupin2", 2, {x:-170, scale:1, opacity:1, rotation:0,  delay:1, ease:Elastic.liner});
		TweenMax.staggerFrom(".diliupin3", 2, {y:-170, scale:1, opacity:0, rotation:0,  delay:1, ease:Elastic.liner});
		TweenMax.staggerFrom(".diliupin4", 2, {y:170, scale:1, opacity:0, rotation:0,  delay:1, ease:Elastic.liner});
		TweenMax.staggerFrom(".left", 1, {x:-170, scale:1, opacity:1, rotation:0,  delay:2, ease:Elastic.liner});
		TweenMax.staggerFrom(".right", 1, {x:170, scale:1, opacity:1, rotation:0,  delay:2, ease:Elastic.liner});
	}
	
	//第七屏
	var imghtml7=data.img7;
	var html7="";
	html7+="<ul class='imgBpx1'>";
	for (var i = 0; i < imghtml7.length; i++) {
		if(i===5){
			html7+="<li class='diqipin"+i+"'><span>"+imghtml7[i]+"</span></li>";
		}else if(i===6){
			html7+="<li class='diqipin"+i+"'><span>"+imghtml7[i]+"</span></li>";
		}else{
			html7+="<li class='diqipin"+i+"'><img  src='"+imghtml7[i]+"'/></li>";
		}
	}
	html7+="</ul>";
	JQ_box.append(html7);
	function diqiPinAnmi(){
		TweenMax.staggerFrom(".diqipin1", 3, {y:-300, scale:1, opacity:1, rotation:0,  delay:0.8, ease:Elastic.liner});
		TweenMax.staggerFrom(".diqipin2", 3, {y:-300, scale:1, opacity:1, rotation:0,  delay:0.8, ease:Elastic.liner});
		TweenMax.staggerFrom(".diqipin3", 3, {y:-300, scale:1, opacity:1, rotation:0,  delay:0.8, ease:Elastic.liner});
		TweenMax.staggerFrom(".diqipin5", 1, {x:0, scale:1, opacity:0, rotation:0,  delay:1, ease:Elastic.liner});
		TweenMax.staggerFrom(".diqipin6", 1, {x:0, scale:1, opacity:0, rotation:0,  delay:1.8, ease:Elastic.liner});
	}
	
	var eles=document.getElementsByClassName("imgBpx1");
	var parenT=document.getElementById("box");
	var setValueY="";
	var getY="";
	var hdY="";
	var getStartY="";
	var getChaZ="";
	var getChaZiY="";
	var onoff=true;
	var num=0;
	var elesL=eles.length-1;
	eles[0].style.zIndex="2";
	eles[0].style.display="block";
	eles[1].style.zIndex="1";
	eles[1].style.display="block";
	parenT.addEventListener("touchstart",function(ev){
		height=parenT.offsetHeight;
		getStartY=ev.changedTouches[0].pageY;
	});
	
	parenT.addEventListener("touchmove",function(ev){
		var getMoveY="";
		getMoveY=ev.changedTouches[0].pageY;
		setValueY=getMoveY-getStartY;
		if(setValueY<0){
			if(onoff){
				num++;
				if(num>elesL){
					num=elesL;
					return;
				}
					
				if(num==1){
					dierPinAnmi();//第二屏函数动画
				}else if(num==2){
					disanPinAnmi();//第三屏函数动画
				}else if(num==3){
					disiPinAnmi();//第四屏函数动画
				}else if(num==4){
					diwuPinAnmi();//第五屏函数动画
				}else if(num==5){
					diliuPinAnmi();//第六屏函数动画
				}else if(num==6){
					diqiPinAnmi();//第七屏函数动画
				}
				
				onoff=false;
			}
			for (var i = 0; i < eles.length; i++) {
				eles[i].style.zIndex="0";
			}
			eles[num-1].style.zIndex="1";
			eles[num-1].style.display="block";
			eles[num].style.zIndex="2";
			eles[num].style.display="block";
			eles[num].style.top="100%";
			eles[num].style.top=(setValueY+height)+"px";
		}
		if(setValueY>0){
			if(onoff){
				num--;
				if(num<0){
					num=0;
					return;
				}
				if(num==5){
					 	diliuPinAnmi();//第屏函数动画
				 }else if(num==4){
				 	diwuPinAnmi();//第五屏函数动画
				 }else if(num==3){
				 	disiPinAnmi();//第四屏函数动画
				 }else if(num==2){
				 	disanPinAnmi();//第三屏函数动画
				 }else if(num==1){
				 	dierPinAnmi();//第二屏函数动画
				 }else if(num==0){
				 	diyiPinAnmi();//第一屏函数动画
				 }
				onoff=false;
			}
			for (var i = 0; i < eles.length; i++) {
				eles[i].style.zIndex="0";
			}
			eles[num].style.zIndex="2";
			eles[num].style.display="block";
			eles[num+1].style.zIndex="1";
			eles[num+1].style.display="block";
			eles[num].style.top=-height;
			eles[num].style.top=(setValueY-height)+"px";
		}
		
	});
	parenT.addEventListener("touchend",function(){
		onoff=true;
		if(setValueY<10){
			MTween({
				el:eles[num],
				target:{top:0},
				time:300,
				type:"easeBoth",
				callBack:function(){
					eles[num-1].style.top=-height;
				}
			})
		}else{
			MTween({
				el:eles[num],
				target:{top:0},
				time:300,
				type:"easeBoth",
				callBack:function(){
					eles[num+1].style.top=height;
				}
			});
		}
	});

}
