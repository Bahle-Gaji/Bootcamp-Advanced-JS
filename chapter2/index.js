// Practice exercise 2.1
let str1 = 'Laurence'; 
let str2 = "Svekis"; 
let val1 = undefined;
let val2 = null;
let myNum = 1000;

// console.log(typeof )


// Practice exercise 2.2
let name = 'Bahle', age  = 20; canCode = true;

// console.log(`Hello, my name is ${name}, I am ${age} years old and I can code JavaScript: ${canCode}`);


//Practice exercise 2.3

// let a = Number(prompt('Enter value for "a"'));
// let b = Number(prompt('Enter value for "b'));
// let c = Math.sqrt(((a * a) + (b * b)));

// alert(`C =` + c);


// Practice exercise 2.4
// let a = 4;
// let b = 11;
// let c = 21;
// a = a + b;
// a = a / c;
// c = c % b;
// console.log(a, b, c);


/*-----Chapter Projects-----*/

//Miles to kilometers converter
// let miles = Number(prompt('Enter Miles: '));

// let kms = miles * 1.60934;

// console.log(miles + 'mi is equal to ' + kms + 'kms.');

//BMI 
let inches = 72;
let lbs = 180;
let kgs = lbs / 2.2046;
let cm = inches * 2.54;
console.log(kgs.toFixed(2), cm.toFixed(2));
let bmi = kgs / (cm / 100 * cm / 100);
console.log(bmi.toFixed(2));
