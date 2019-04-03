class Test{
	constructor(height,width){
		this.h=height;
		this.w=width;
	}
	test(){
		console.log("cao",this.h)
		console.log("nang",this.w)
	}
}
var obj=new Test(43,54);
obj.test();