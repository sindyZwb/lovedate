//计算font-size
!function () {
	document.addEventListener('DOMContentLoaded', calculate, false);
    window.onresize =  function () {
        console.log(1111)
        calculate();
    }
    function calculate(){
        var html = document.documentElement;
        var windowWidth = html.clientWidth;
        html.style.fontSize = windowWidth / 7.5 + 'px';
        // 等价于html.style.fontSize = windowWidth / 640 * 100 + 'px';
    }
    
}();

var LS = localStorage;
var debug = true;
var baseUrl = location.origin;

var ageSection = [],
	heigthSection = [],
	weightSection = [];
for(var i=0; i<=99; i++) {
	ageSection.push(i);
}
for(var j=130; j<=220; j++) {
	heigthSection.push(j);
}
for(var k=40; k<=120; k++) {
	weightSection.push(k);
}

document.onclick = function(e) {
	if(e.target.parentNode.className == 'header_back') {
		history.back();
	}
}

function isTrue(str) {
	if(str=='null' || str=='undefined' || str=='false' || str=='' || str==null || str==undefined || str==false) {
		return false;
	} else {
		return true;
	}
}
function getParams(id){  
    var args={};  
    var url=location.href;//获取查询串  
    var query=url.split("?")[1];//在逗号处断开
    if(!query){
    	return '';
    }
    var params = query.split("&"); 
    for(var i=0;i<params.length;i++){  
        if(params[i].indexOf('=') > 0){
        	var param = params[i].split('=');
        	args[param[0]] = param[1];
        }  
    }  
    return args[id];//返回对象  
} 

//设置cookie
 function setcookie(name,value){  
    var Days = 30;  
    var exp  = new Date();  
    exp.setTime(exp.getTime() + Days*24*60*60*1000);  
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+";path=/";  
}  
//获取cookie
function getcookie(name){  
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));  
    if(arr != null){  
        return (arr[2]);  
    }else{  
        return "";  
    }  
} 