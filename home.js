// console.log('hello')

// alert('Hello this is Dario');

// // How to write a comand line//

// // Variables//
// var b = 'something';
// console.log(b);

// var someNumber = 45;
// console.log(someNumber);

// // document.getElementById('someText').innerHTML = 'Hey there';

// // var age = prompt('What is your age?');
// // document.getElementById('someText').innerHTML = age;

// // Numbers in JS
// var num1 = 10;
// // num1 = num1 + 1;
// // num1++;
// // num1--;
// console.log(num1 / 5);

// num1 += 10;
// console.log(num1);

// // Functions
// // create it
// // call it
// function fun() {
//     console.log('this is a function');
// }
// // call
// fun();

// /*Create a function that take in a name and say hello followed by your name
// EX:"Dario"
// Return: "Hello Dario"*/

// // function greeting(yourName) {
// //     var result = 'Hello' + ' ' + yourName; //string Concatenation
// //     console.log(result);
// // }
// // var name = prompt('What is your name?');
// // // greeting(name);

// // // Arguents in functins
// // // Add two numbers together
// // function sumNum(num1, num2) {
// //     var result = num1 + num2;
// //     console.log(num1 + num2);
// // }
// // sumNum(10, 10);

// //Wile loops

// var num = 0;
// while (num < 100) {
//     num += 1;
//     console.log(num);
// }

// For loop
// for (let num = 0; num < 100; num++) {
//     console.log(num)
// }

// Data type
// let yourAge = 18; // number
// let yourName = 'Bob'; //string
// let name = { first: 'Jane', last: 'Doe' }; //object
// let truth = false; //boolean
// let groceries = ['apple', 'banana', 'oranges']; //array
// let random; //undefined
// let nothing = null; //value null

// //Strings (common methods)
// let fruit = 'banana, apple, orange, blackberry';
// let moreFruits = 'banana\napple'; //new line
// console.log(fruit.length);
// console.log(moreFruits);
// console.log(fruit.indexOf('n'));
// console.log(fruit.slice(2, 6));
// console.log(fruit.replace('ban', '123'));
// console.log(fruit.toUpperCase(fruit));
// console.log(fruit.toLowerCase(fruit));
// console.log(fruit[2]);
// console.log(fruit.split(',')); //bya coma
// console.log(fruit.split('')); //by letters

// // Array
// let fruits = ['banana', 'apple', 'orange', 'pineapple'];
// fruits = new Array('banana', 'apple', 'orange', 'pineapple');

// console.log(fruits[1]); //access value at index 2nd

// fruits[0] = 'pear';
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// //array common methods
// console.log('to string', fruits.toString());
// console.log(fruits.join('*'));
// console.log(fruits.pop(), fruits); //removes last item
// console.log(fruits.push('blackberries'), fruits);
// console.log(fruits[4]);
// fruits[4] = 'new fruit';
// fruits[fruits.length] = 'new fruit'; //same as push
// console.log(fruits);
// fruits.shift(); //remove first element from the list
// fruits.unshift('kiwi'); //add first element to an  array
// console.log(fruits);

// let students = ['name', 'age', 'course', ];
// let allStudents = fruits.concat(students);
// console.log(allStudents);
// console.log(allStudents.slice(1, 4));
// console.log(allStudents.reverse());
// console.log(allStudents.sort());

// let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
// console.log(someNumbers.sort(function(a, b) { return a - b })); //sorted in ascending order 
// console.log(someNumbers.sort(function(a, b) { return b - a })); //sorted in descending order

// let emptyArray = new Array();
// for (let num = 0; num < 10, num++) {

//     emptyArray.push(num);
// }


// console.log(emptyArray);

//Objects in JS 
//Dictionaries in Python

// let student = {
//     first: 'Rafeh',
//     last: 'Qazi',
//     age: 17,
//     height: 170,
//     studentInfo: function() {
//         return this.first + '\n' + this.last + '\n' + this.age;
//     }
// };

// console.log(student.first);
// console.log(student.last);
// student.first = 'notRafeh'; //change value 
// console.log(student.first);
// student.age++;

// console.log(student.age);
// console.log(student.studentInfo());

// Conditionals, control flow (if, else)
// 18-35 is my target demographic
//&& and 
//|| or

// var age = 45;

// if ((age >= 18) && (age <= 35)) {
//     status = 'target demo';
// } else {
//     status = 'not my audence';
//     console.log(status);
// }

//Switch statements
//differenciate between weekday vs. weekend
//0 --> Sunday
//day 6 --> Saturday --> 
//day 4 --> Thursday --> weekday

// switch (6) {
//     case 0:
//         text = 'weekend';
//         break;

//     case 5:
//         text = 'weekend';
//         break;

//     case 6:
//         text = 'weekend';
//         break;

//     default:
//         text = 'weekday'
// }
// console.log(text);