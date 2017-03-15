var inpBox=document.querySelector("#inpBox");
var texts=inpBox.getElementsByTagName("input");
var textc=inpBox.getElementsByTagName("span");
var value;

for (var i = 0; i < texts.length; i++) {
	texts[i].index=i;
	texts[i].onfocus=function(){
		textc[this.index].style.display="none";
	}
	texts[i].onblur=function(){
		value=this.value;
		if(value==""){
			textc[this.index].style.display="block";
		}else{
			textc[this.index].style.display="none";
		}
	}
	
}