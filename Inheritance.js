//Inheritance is a concept where one class canreuse properties and methods of another class
//Child class inherits from parent class 

class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(this.name+" makes sound");
    }
}
class Dog extends Animal{
        bark(){
            console.log(this.name+" barks");
        }
}
const d = new Dog("Tommy");
d.speak();
d.bark();


//Super() Keyword which is required to access the parent constructor 