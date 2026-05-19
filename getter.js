//Getter is used to read the value or to retrieve the value 

const user = {
    firstname:"Guru",
    lastname:"Rajesh",
    get fullname(){
        return this.firstname+" "+this.lastname;
    }    
}
console.log(user.fullname);