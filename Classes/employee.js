class Employee{
    constructor(name,des,sallary,experience){
        this.name=name,
        this.des=des,
        this.sallary=sallary,
        this.experience=experience
    }
    workLocation(){
        console.log(`${this.name} was woriking in Tcs`);
    }
}

let e1=new Employee("shubham","software engineer",85000,"2years")