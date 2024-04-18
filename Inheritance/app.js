class Person{//this is the parent class
    constructor(name,age){
        console.log("parent class constructor");
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi this is ${this.name}. I am a teacter`);
    }
}

class Student extends Person{//this is child class extending Parent class ie person
    constructor(name,age,marks){
        console.log("student class constructor");
        super(name,age);//parent class constructor is being called
        this.marks=marks;
    }
}

class Teacter extends Person{
    constructor(name,age,subject){
        console.log("Teacher class constructor");
        super(name,age);//parent class constructor is being called
        this.subject=subject;
    }
    
}


