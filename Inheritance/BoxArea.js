class Box{
    constructor(l,b){
        this.l=l;
        this.b=b;
    }
    area(){
        let area=this.l*this.b;
        console.log(`area of box is ${this.l} * ${this.b} = ${area}`);
    }
}

class Square extends Box{
    constructor(a){
        super(a,a);
    }
    area(){
        let area=this.l*this.b;
        console.log(`area of box is ${this.l} * ${ this.b} = ${area}`);
    }
}

let sq1=new Square(4);
sq1.area();
