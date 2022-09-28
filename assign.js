class mathematics {
    constructor(parameter, parameter1){
        this.number1= parameter;
        this.number2=parameter1;
    }

    add () {
        let addition = this.number1 + this.number2;
        return addition   
    }

    sub(){
        let subtraction = this.number1 - this.number2;
        return subtraction
    }

    Mul() {
        let Multiply = this.number1 * this.number2;
        return Multiply
    }

    Div() {
        let Divide = this.number1 / this.number2;
        return Divide
    }

}
let any = new mathematics (10,100);
let any1 = new mathematics (20,50);
console.log(any, any1, any1.add(), any.add(), any.sub(), any1.sub());
console.log(any.Mul(), any1.Mul());
console.log(any.Div(), any1.Div());
