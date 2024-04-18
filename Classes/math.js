class Operations {
  constructor(n1, n2) {
    this.n1 = n1;
    this.n2 = n2;
  }
  Addition() {
    const sum = this.n1 + this.n2;
    console.log(` ${this.n1} + ${this.n2} = ${sum} `);
  }
  Substraction() {
    const sub = this.n1 - this.n2;
    console.log(` ${this.n1} - ${this.n2} = ${sub} `);
  }
}

let op = new Operations(8, 5);
op.Addition();
op.Substraction();
