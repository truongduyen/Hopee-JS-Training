function writecookie(){
	var now= new Date();
	now.setMonth(now.getMonth()+1);
	cookievalue=escape(document.formname.customer.value)+";"
	document.cookie="name= "+cookievalue;
	document.cookie="expires= "+now.toUTCString()+";"
	document.write ("Setting Cookies : " + "name = " + cookievalue );
}