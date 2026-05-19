//setter is updating a value with rules (obj.prop=value) ,Mainly used to set & update value

const user = {
    name:" ",
    set userName(value){
        this.name=value;
    }
};
user.userName = "Guru";
console.log(user.name);
