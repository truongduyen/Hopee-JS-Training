function cookieSto(){
	if(document.myform.customer.value==""){
		alert("nhap ten di!!!");
		return;
	}
	cookievalue = escape(document.myform.customer.value)+";";
	document.cookie= "name = "+ cookievalue;
	document.write("setting cookie: "+"name = "+ cookievalue);
}