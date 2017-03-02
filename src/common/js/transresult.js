export function transResult(value) {
	function trim(s){
	    return s.replace(/(^\s*)|(\s*$)/g, "");
	}
	function strToJson(str){
     	var json = eval('(' + str + ')');
     	return json;
	}

	function strToJson2(str){
	    var json = (new Function("return " + str))();
	    return json;
	}

	var data = "message";
	var key = CryptoJS.enc.Latin1.parse('2015$!@aiyoutech');
	var iv = CryptoJS.enc.Latin1.parse('0123456789abcdef');
	var encrypted = CryptoJS.AES.encrypt(data,key,{iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.ZeroPadding});  
	var encrypted= value.replace(/[\n]/ig,'');//去掉返回结果换行符
	var decrypted = CryptoJS.AES.decrypt(encrypted,key,{iv:iv,padding:CryptoJS.pad.ZeroPadding});
	var result = decrypted.toString(CryptoJS.enc.Utf8) 
	var start = result.indexOf('{');
	var end = result.lastIndexOf('}');

	result = result.substr(start,end+1);
		// console.log(result[37]);

		// alert(result)
	// console.log(strToJson('{"code":1003,"msg":"数据验证失败-->密码不能为空!"}'))
	// console.log(strToJson(result));
	return strToJson(result);
}
