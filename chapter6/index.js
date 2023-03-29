/*-----Practice exercise 6.1-----*/

// function add(x, y){
//     return x + y;
// };

// let var1 = 5;
// let var2 = 6;

// console.log(add(var1, var2));
// console.log(add(10, 79));

/*-------------------------------*/



/*-----Practice exercise 6.2-----*/

// let arrayDescriptive = ['Monstrous', 'Crazy', 'Extravagant', 'Monotonous'];

// function askFunction(){
//     let name = prompt('Enter a name: ');

//     let adj = arrayDescriptive[Math.floor(Math.random() * arrayDescriptive.length)];

//     console.log(`${adj} ${name}`);
// };

// askFunction();

/*-------------------------------*/



/*-----Practice exercise 6.3-----*/

let num1 = 10; 
let num2 = 15;

// let operator = '-';

// function operatingNums(x, y, op){
//     let result = 0;
//     if(op == '-'){
//         result = x - y;
//     }
//     else{
//         result = x + y;
//     };
    
//     console.log(result);
//     return result;
// };

// operatingNums(num2, num1, operator);

/*-------------------------------*/



/*-----Practice exercise 6.4-----*/

// let array = [];

// for(let i = 0; i < 10; i++){
//     let val1 = i * 5;
//     let val2 = i * i;

//     let ans = operatingNums(val1, val2, '+');
//     array.push(ans);
// };

// console.log(array);

/*-------------------------------*/



// let addTwoNumbers = (x, y) => console.log(x + y);
// addTwoNumbers(12, 15);

// function confuseReader() {
//     x = "Guess my scope...";
//     console.log("Inside the function:", x);
// };
// confuseReader();
// console.log("Outside of function:", x);




/*-----Practice exercise 6.5-----*/
// let x = '1000';

// (function () {
//     let x = 2000;
//     console.log(x); 
    
// })();


// let result = ( 
//     (y) => {
//        let x = 3000;
//         return y
//     }
// )(5);

// console.log(`x: ${x}`);
// console.log(`Result: ${result}`);

// (function (name){
//     console.log(`Hi there, ${name}`);
// }
// )('Bahle');

/*-------------------------------*/



//  function getRecursive(nr) {
//     alert(nr);
//     if (nr > 0) {
//     getRecursive(--nr);
//     }
//    }
//    getRecursive(3);


// function logRecursive(nr) {
//     console.log("Started function:", nr);
//     if (nr > 0) {
//     logRecursive(nr - 1);
//     } else {
//     console.log("done with recursion");
//     }
//     console.log("Ended function:", nr);
//    }
//    logRecursive(3);


// function doOuterFunctionStuff(nr) {
//     console.log("Outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//     console.log(x + 7);
//     console.log("I can access outer variables:", nr);
//  }
// }
// doOuterFunctionStuff(2);

// (function(nr){
//     (function(x){
//         let z = 10;
//         console.log(x);
//     })(nr)
// })(2);

// console.log('Inaccessable: ' + z);


/*-----Practice exercise 6.6-----*/

// function factorial(x){
//     // console.log(x);
//     if(x === 0){
//         return 1
//     }
//     else{
//         return x * factorial(--x);
//     }
// };

// console.log(factorial(4));

/*-------------------------------*/



/*-----Practice exercise 6.7-----*/

// let start = 10;
// function countdown1(x){
//     console.log(x);

//     if(x < 1){
//         return;
//     }
//     return countdown1(--x);
// };

// countdown1(start);

// function countdown2(x){
//     console.log(x);
//     if(x > 0){
//         x--;
//         return countdown2(x);
//     };
//     return;
// };

// countdown2(start);

/*-------------------------------*/



/*-----Practice exercise 6.8-----*/

// let anonFn1 = function(x){
//     console.log(x);
// };

// anonFn1('yo yo')

// function anonFn2(x){
//     console.log(x);
// };

// anonFn2('yo yo #2');

/*-------------------------------*/

// let functionVariable = function () {
//     console.log("Not so secret though.");
// };

// function doFlexibleStuff(executeStuff) {
//     executeStuff();
//     console.log("Inside doFlexibleStuffFunction.");
// };

// doFlexibleStuff(functionVariable);

// let anotherFunctionVariable = function () {
//     console.log("Another anonymous function implementation.");
// };

// doFlexibleStuff(anotherFunctionVariable);



/*-----Chapter Project-----*/

// recursive function
function recursion(x){
    console.log(x);
    if(x < 10){
        return recursion(x + 1);
    };
    return;
};

recursion(0);


//Set timeout order

let one = () => console.log('One');
let two = () => console.log('Two');
let three = () => {console.log('Two'), one(), two()};
let four = () => {
    console.log('Four');
    setTimeout(one, 0);
    three();
};

four();