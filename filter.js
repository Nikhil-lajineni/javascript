var arr=[10,20,30,40,50];

var filter=arr.filter(function(element,index){
    return element>=30 && element<50;
});
console.log(filter);