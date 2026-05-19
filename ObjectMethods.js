
// Object Methods

// let student ={
//     name:'Barvesh Akthar',
//     age :'21',
//     greet : function(){
//         console.log("Hello");
        
//     }
// };

// student.greet();




//Using of this Keyword

// let employee ={
//     name:'Barvesh Akthar',
//     age :'21',
//     display : function(){
//         console.log(this.name);
//         console.log(this.age);
//     }
    
// };
//employee.display();

//Built-in Object Methods


// let person = {
//     name : "Barvesh Akthar",
//     age:"27",
//     city:"Madurai"
// };

// //1.Object.keys()- Return Key values
// console.log(Object.keys(person))

// //2.Object.entires()- Return Key-values as arrays
// console.log(Object.entries(person))

//// //3.Object.values()- Return values of an Object
// console.log(Object.values(person))

////4.hasownproperty()-
// console.log(Object.hasOwnProperty("name"))

////5.Object.seal()- Allow Modification on existing properties but prevents adding/removing properties
// Object.seal(person);
// person.age=23;
// console.log(person);

////6.Object.freeze()- Prevents Modification on Object
// Object.freeze(person);
// person.age=21;
// console.log(person.age);

////7.Object.assign - Coping of object to another
// const a ={x:1};
// const b ={y:1};
// const c = Object.assign(a,b);
// console.log(c);
