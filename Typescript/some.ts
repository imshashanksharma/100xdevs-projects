// interface PersonInterface{
//     name : string;
//     age : number;
// }

// class Person implements PersonInterface{
//     name : string;
//     age : number;

//     constructor(name : string, age : number){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//         return "hi mr" + this.name;
//     }
// }


// // cunstructor is what constructs the object for example  - new Date(); 
// // as Person is a class here we will create an object for it using constructor
// const personObject = new Person("shashank",21) // this is a constructor
// console.log(personObject.greet());


interface Circle{
    radius : number;
}

interface Square{
    side : number;
}

interface Rectangle{
    width : number;
    height : number;
}

type Shape = Rectangle | Square | Rectangle;

function renderShape(shape : Shape){
    console.log("Rendered!");
}


