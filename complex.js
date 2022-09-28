class complex {
    constructor(val1, val2){
        this.x= val1;
        this.y=val2;
    }
}
class complexmath {
    constructor(){}
    add(obj1, obj2) {
        let addition = new complex(obj1.x + obj2.x, obj1.y + obj2.y);
        return addition.x + '+i' + addition.y
    }

    Sub() {
        let subtraction = new complex(obj1.x - obj2.x, obj1.y - obj2.y);
        return subtraction.x - subtraction.y
    }

    multi() {
        let multiplication = new complex(obj1.x * obj2.x, obj1.y * obj2.y);
        return multiplication.x * multiplication.y
    }

}
let obj1 = new complex (10, 5);
let obj2 = new complex (5, 5);
let math = new complexmath();
console.log(math.add(obj1, obj2));
console.log(math.Sub(obj1, obj2));
console.log(math.multi(obj1, obj2));