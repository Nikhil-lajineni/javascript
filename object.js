var obj= {
    fullName: "Nikhil",
    age: 28,
    gender: "Male"
};
console.log(obj.fullName);
obj.age= 27;
console.log(obj.age);
delete obj.age;
console.log(obj.age);
var gender=obj["gender"];
console.log(gender);