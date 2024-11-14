function f1(p1){
    console.log("f1 is called");
    p1();
    console.log("f1 is completed");
    p1();
}
function p1(){
    console.log("p1 is called");
}
f1(p1);