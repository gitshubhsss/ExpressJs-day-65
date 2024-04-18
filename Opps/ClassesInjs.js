class Student{
    constructor(name,age,mobile){
        this.name=name,
        this.age=age,
        this.mobile=mobile
    }
    talk(){
        console.log(`Hii my name is ${this.name}`);
    }
}

let stud1=new Student("shubham",22,7507380653);
let stud2=new Student("omkar",21,7261931500);