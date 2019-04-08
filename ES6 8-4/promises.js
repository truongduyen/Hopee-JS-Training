function promise(abc,vbn){
    setTimeout(function (){
        console.log("day la");
        abc();
        vbn();
    },2000);
}
promise(function(){
    console.log("123");
}, function(){
    console.log("243");
});
console.log("end");