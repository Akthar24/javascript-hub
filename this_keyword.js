//this keyword refers to the object that is currently execueting the code ,
// this changes depending on how a function is called,not where it is written

const user = {
    name: "Guru",
    greet(){
        console.log("Hello " + this.name);
    }
};
user.greet();

