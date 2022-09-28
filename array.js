let myList = [1,2,3,4,5,6,7,8,9,10];
let empList = [{name:'pradeep', age: 28}, {name:'ajay', age: 25},{name:'shashi', age: 30}];
// console.log(myList);
// console.log(empList [0]);
// myList[7] = 30;
// console.log(myList);

// for(let index = 0; index < myList.length; index++){
//     console.log(myList[index]);
// }

// function Display(currentObj){
//     console.log('Displaying', currentObj)
// }

// myList.forEach((currentObj) => {
//     console.log(currentObj);
// });

// empList.forEach((currentObj) => {
//     console.log(currentObj);
// });


// let names = empList.map((parameter1) => {
//     return parameter1.name;
// });

// let ages = empList.map((parameter1) => {
//     return parameter1.age;
// });
// console.log(names, ages);

result = empList.find((parameter1) => {
    return parameter1.name ==  'djdjhsakjkjakjkj';
});
console.log(result);


result = empList.filter((parameter1) => {
    return parameter1.name=='pradeep';
});
console.log(result);

// empList.push({name:'via push', age: 5})
// console.log(empList);

// empList.pop({name:'via push', age: 5})
// console.log(empList);

