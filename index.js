//let, var, const

// let msg = 12234567;
// let msg = false;

// msg = 'This is some value  1234r432&((*&^%$##$%^   1234567';
// msg = 1.2;

// console.log(msg);
//some code

// let value1 = 50;
// let value2 = 10;

// ==, ===

// console.log(value1 == value2)
// console.log(value1 === value2)

// !=, !==
// console.log(value1 != value2)
// console.log(value1 !== value2)


// Less, Greater Than
// console.log(value1 > 50);
// console.log(value1 < 50);

// Less, Greater Than or equal to
// console.log(value1 >= 50);
// console.log(value1 <= 50);

// NOT operation
// let someBooleanValue = null;

// console.log(!someBooleanValue);


//falsey value :- all default values -> number (0), string(''), boolean(false), undefined(default value provided by js), null(defalut value provided by developers)
//truthy value :- non default values -> number (not 0), string (not ''), boolean (true), object({})

//
// console.log(msg);

//Employee
// let emp = { name: 'Richard', height: 200, weight: 100 };
// let pradeep = { name: 'Pradeep', height: 300 };

// console.log(emp.weight);
// console.log(pradeep.weight);


// function MyFirstFunction(parameter1, parameter2) {
//     console.log('Inside my Function', parameter1, parameter2);
// }


// let anonymousFunction = function (parameter1, parameter2) {
//     console.log('Inside anonymous Function', parameter1, parameter2);
// }


// let seconanonymous = function () {
    
// }


// let arrowFnction = () => {
    
// }


// MyFirstFunction(100, 'Second Parameter');
// anonymousFunction();
// arrowFnction();



// let fromLet; // from ES6 (ES2015)
// var fromVar; // from the begining


// //Value is known and should not be changed.
// const fromConst = 3.142;

// console.log(fromIf);

// if(true) {
//     var fromIf = 'value is from IF condition';
//     console.log(fromIf);
// }



// console.log(this);


//  class Employee {
//      constructor() {
//          this.name = 'Manu';
//         this.height = 180;
//         this.department = 'Development'
//          this.name = 'Sandeep';
//         this.height = 190;
//         this.department = 'Development'
//         this.name = 'Chetan';
//         this.height = 120;
//         this.department = 'Development'
//     }
// }

// class tempemp extends Employee {
//     constructor()
// {this.name = 'Pradeep';
// this.height = 170;
// this.department = 'Development'
//     super();
// }}

// class permemp extends Employee {
//     constructor()
// {
//     super();
// }}

// const pradeep = new tempemp();
// const Manu = new permemp();
// const sandeep = new tempemp();
// const Chetan = new permemp();

// console.log(pradeep);
// console.log(Manu);
// console.log(sandeep);
// console.log(Chetan);

//   function assignment (person1) {
//         var person1 = { name: 'Pradeep', ID: 145, Department: 'Development'};
//          var person2 = { name: 'Manu', ID: 146, Department: 'Development'};
//          var person3 = { name: 'Raju', ID: 147, Department: 'Digital Marketing'};
//          var person4 = { name: 'Sandeep', ID: 148, Department: 'Bussiness Development'};
//   }
    
//   assignment();

//  class person {
//      constructor(parameter, parameter1, parameter2) {
//          this.name = parameter;
//          this.id = parameter1;
//          this.Department = parameter2;
//      }
//  }
//  let person1 = new person('pradeep', 04456, 'Developer');
//  let person2 = new person('Richard', 04454, 'Senior Developer');
//  let person3 = new person('prajwal', 04473, 'Business Development');
//  console.log(person1, person2, person3);

        //  let person1 = { name: 'Pradeep', ID: 145, Department: 'Development'};
        //  let person2 = { name: 'Manu', ID: 146, Department: 'Development'};
        //  let person3 = { name: 'Raju', ID: 147, Department: 'Digital Marketing'};
        //  let person4 = { name: 'Sandeep', ID: 148, Department: 'Bussiness Development'}; 

        //  console.log(person1, person2, person3, person4);
        //  console.log(person1.emp);


// class city {
//     constructor(parameter5, parameter6, parameter7) {
//         this.CityName = parameter5;
//         this.Language = parameter6;
//         this.population = parameter7;
//     }
// }
// let about = new city('Bangalore', 'All Languages', 10000);
// let about1 = new city('Tumakuru', 'Kannada', 8000);
// let about2 = new city ('Mysuru', 'Sanskrit', 5000);
// let about3 = new city ('KGF', 'Telugu', 2000);
// console.log(about, about1, about2, about3);






// class pet {
//     constructor(anypet, anytype, anycolor){
//         this.petname = anypet;
//         this.pettype = anytype;
//         this.petcolor = anycolor;
//     }
// }
// let pet1 = new pet('Sweety', 'Dog', 'white');
// let pet2 = new pet('Brownie', 'Cat', 'Brown')
// let pet3 = new pet('Gowri', 'Cow', 'Cream');
// console.log(pet1,pet2,pet3);





// class friend {
//     constructor(anyname, anyyears){
//         this.friendname = anyname;
//         this.years = anyyears;
//     }
// }
// let frnd = new friend ('Richard', 'A month ago');
// let frnd1 = new friend ('Manu', '5 years');
// let frnd2 = new friend ('chethan', 'More than 10 years');
// console.log(frnd, frnd1, frnd2);





// Functions Assignments

// function anyfunction (parameter) {
//     console.log('My first function',parameter);
// }
// anyfunction('bavsbdbjbjdb');

// function add (parameter, parameter1) {
//    // console.log('displaying result', parameter + parameter1);
//    let adding = parameter + parameter1;
//  return adding;
// }
// let result = add(15, 15);
// console.log(result);


// // add(4, 4);
// add();

// function sub (para, para1){
//   //  console.log('subtract', para - para1)
//   let output = para - para1;
//     return output;
// }

// let result = sub(10, 5);
// console.log(result);



// function multi (any, more){
//     let multiplication = any * more;
//     return multiplication;

// }
// let final = multi(5, 5);
// console.log(final);

// function divide (tum, kur){
//     let divide = tum / kur;
//     return divide;
// }
// let Value = divide (9, 3);
// console.log(Value);



// function makein (para) {
//     console.log('Pradeep working on', para);
// }
// makein('Functions');

// function club (para, para4) {
//     let clubbed = para + para4;
//     return clubbed;
// }
// let result = club ('Pradeep', 'Working');
// console.log(result);


// class Cars {
//     constructor(anycar, anymodel){
//         this.carname = anycar;
//         this.model = anymodel;
//     }
// }
// let car1 = new Cars ('Brezza', '2018');
// let car2 = new Cars ('i20', '2015');
// let car3 = new Cars ('Punto', '2012');
// console.log(car1, car2, car3);
// console.log(car1);
// console.log(car2);
// console.log(car3);
// console.log(car1.carname, car2.carname, car3.carname);
// console.log(car1.model, car2.model, car3.model);

class mobile {
    constructor(brand, ram, mp, display) {
        this.mobilebrand = brand;
        this.storage = ram;
        this.camera = mp;
        this.screen = display;
    }
}
let mobil = new mobile ('Realme', '6gb', '52mp', 'LED display');
let mobil1 = new mobile ('Apple iphone', '8gb', '74mp', 'LED display');
let mobil2 = new mobile ('Samsung', '8gb', '104mp', 'AMO LED Display');
let mobil3 = new mobile ('Nothing', '12gb', '108mp', 'AMO LED display');
console.log(mobil, mobil1, mobil2, mobil3);
console.log(mobil.mobilebrand, mobil1.mobilebrand, mobil2.mobilebrand, mobil3.mobilebrand);
console.log(mobil.storage, mobil1.storage, mobil2.storage, mobil3.storage);
console.log(mobil.camera, mobil1.camera, mobil2.camera, mobil3.camera);
console.log(mobil.screen, mobil1.screen, mobil2.screen, mobil3.screen);




