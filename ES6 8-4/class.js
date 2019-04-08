class shape{
    constructor(a){
        this.area=a;
    }
}
class circle extends shape{
    disp(){
        console.log("area of the circle:" ,this.area);
    }
}
var obj=new circle(45);
obj.disp();