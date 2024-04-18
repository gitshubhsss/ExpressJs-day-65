//make a blueprint where we can store the data of the studentsZ

//making the constructor
//constructors always starts with capital letter and i does not return anything 
function Student(name,Class,marks){
    this.name=name,
    this.Class=Class,
    this.marks=marks
    console.log(this);
}

Student.prototype.canCode=()=>{
    console.log(`${this.name} can code`);
}

let stud1=new Student("shubham","fymsc",96)
let stud2=new Student("omkar","fymsc",96)
