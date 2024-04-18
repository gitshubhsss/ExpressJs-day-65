class Person {
    constructor(name,age,c_name,deg){
        this.name=name;
        this.age=age;
        this.c_name=c_name;
        this.deg=deg;
    }
    Talk(){
        console.log(`hey ${this.name} this side`);
    }
}

class Employee extends Person {
    constructor(name,age,c_name,deg){
        super(name,age,c_name)
        this.deg=deg;
    }
}

class Manager extends Person {
    constructor(name,age,c_name,deg){
        super(name,age,c_name)
        this.deg=deg;
    }
}

let e1=new Employee("Shubham ranjane",22,"TCS","Software Engineer");

let m1=new Manager("Omkar daswadkar",35,"oshubh Tech","prouduct manager");

console.log(e1);

