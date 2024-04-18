//factory funtions 

function StudentMaker(name,age,marks){
    const student={
        name:name,
        age:age,
        marks:marks,
        canCode(){
            console.log(`${this.name} can code `);
        }
    }
    return student;
}

for(i=1;i<5;i++){
    let s1=StudentMaker("shubham",56,4);
    console.log(s1);
   
}