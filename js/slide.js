// JavaScript Document
var wrap=document.getElementById("wrap");
var mark=document.getElementById("mark");
var num=0;

var heights=document.documentElement.clientHeight;
window.onload=function(){
	wrap.style.height=heights+"px";
	mark.style.height=heights+"px";
	console.log(heights);
	show()
}

var navlef=document.getElementById("nav-lef");
var navrig=document.getElementById("nav-rig");
var leflist=navlef.getElementsByTagName("li");
var riglist=navrig.getElementsByTagName("li");

function Vis(x){
	var lst=document.getElementById("item"+"-"+x);
	var rst=document.getElementById("item"+x);
	rst.onmouseover=function(){
		lst.style.visibility="visible"
		}
	rst.onmouseout=function(){
		lst.style.visibility="hidden"
		}
	rst.onclick=function(){
		for(var i=0;i<9;i++){
			riglist[i].className=" "
			var pages=document.getElementById("page"+i)
			pages.style.display="none";
			}
		if(x==0){
		    mark.style.display="block"
		}
		else{
			 mark.style.display="none"
		}
		var pages=document.getElementById("page"+x)
		pages.style.display="block";
		rst.className="active";
		num=x;
		}	
	}
function show(){
    Vis(0)
	Vis(1)
	Vis(2)
	Vis(3)
	Vis(4)
	Vis(5)
	Vis(6)
	Vis(7)
	Vis(8)
}

document.body.addEventListener("mousewheel",function(event){
	if(event.wheelDelta<0){
		var item=document.getElementById("item"+num)
		mark.style.display="none"
		for(var i=0;i<9;i++){
			var page=document.getElementById("page"+i);
			page.style.display="none";
			}
		item.className=" "
		num++
		if(num>=8){
			num=8
			}
		var item=document.getElementById("item"+num)
		item.className="active"
		var page=document.getElementById("page"+num)
		page.style.display="block";
		}
	else{
		var item=document.getElementById("item"+num);
		for(var i=0;i<9;i++){
			var page=document.getElementById("page"+i);
			page.style.display="none";
			}
		item.className=" "
		
		if(num==0){
			num=0
			mark.style.display="block";
			}
		else{
			num--
			if(num==0){
			    mark.style.display="block";
			}else{
				mark.style.display="none";
			}
		}
		var item=document.getElementById("item"+num)
		item.className="active"
		var page=document.getElementById("page"+num)
		page.style.display="block";
	}
	
	})
document.body.addEventListener("DOMMouseScroll",function(event){ 
		if(event.detail>0){
		var item=document.getElementById("item"+num)
		mark.style.display="none"
		for(var i=0;i<9;i++){
			var page=document.getElementById("page"+i);
			page.style.display="none";
			}
		item.className=" "
		num++
		if(num>=8){
			num=8;
			}
		if(num==0){
				mark.style.display="block";
				}
			else{
				mark.style.display="none";
			}
		var item=document.getElementById("item"+num)
		item.className="active"
		var page=document.getElementById("page"+num)
		page.style.display="block";
		}
	else{
		var item=document.getElementById("item"+num)
		for(var i=0;i<9;i++){
			var page=document.getElementById("page"+i);
			page.style.display="none";
			}
		item.className=" "
		if(num==0){
			mark.style.display="block";
			num=0	
			}
		else{
			num--
			if(num==0){
			   mark.style.display="block";
				}
			else{
				mark.style.display="none";
			}
		}
		
		var item=document.getElementById("item"+num)
		item.className="active"
		var page=document.getElementById("page"+num)
		page.style.display="block";
	}

})
$(document).keydown(function(event){
	switch(event.keyCode){
		case 38://向上
		   event.preventDefault()//z阻挡原本的默认效果
		   var item=document.getElementById("item"+num)
		   for(var i=0;i<9;i++){
			   var page=document.getElementById("page"+i);
			   page.style.display="none";
			}
		   item.className=" "
		   num--
		   if(num<=0){
			   num=0
			   }
			if(num!=0){
				mark.style.display="none";
				}
			else{
				mark.style.display="block";
			}
			var item=document.getElementById("item"+num)
		    item.className="active" 
			var page=document.getElementById("page"+num)
			page.style.display="block"
		   break;
		case 40 ://向下
		    event.preventDefault()//z阻挡原本的默认效果
			var item=document.getElementById("item"+num)
			for(var i=0;i<9;i++){
			   var page=document.getElementById("page"+i);
			   page.style.display="none";
			}
		    item.className=" "
			num++
			if(num>=8){
				num=8
				}
		    if(num!=0){
				mark.style.display="none";
				}
			var item=document.getElementById("item"+num)
		    item.className="active" 
			var page=document.getElementById("page"+num)
			page.style.display="block"
		  break;
		default:
		  break;
		   
		}

	})















