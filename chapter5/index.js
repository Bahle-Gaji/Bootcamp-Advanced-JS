//fibonacci sequence
// let fib = [];
// let num1 = 0;
// let num2 = 1;
// let next;

// while (fib.length < 10){
//     fib.push(num1);
//     next = num1 + num2;
//     num1 = num2;
//     num2 = next;
// };
// console.log(fib);



/*-----Practice exercise 5.1-----*/

// let max = 5;

// let random = Math.floor((Math.random() * max)+ 1);
// alert(`Random is: ${random}`);


// let correct = 0;

// while (correct == false){
//     let guess = Number(prompt('Guess a number between 1 and ' + max));
//     console.log(guess);

//     if(guess == 0 || isNaN(guess)){
//         alert("Please guess a NUMBER between 1 and ' + max");
//     }
//     else{
//         if(guess === random){
//             alert('You guessed correctly. Well done!');
//             correct = true;
//             break;
//         }
//         else if (guess > random){
//             alert('Guess too high, try again');
//         }
//         else if(guess < random){
//         alert('Guess too low, try again');
//         };
//     };
// };

/*-------------------------------*/



/*-----Practice exercise 5.2-----*/

// let counter = 0;
// let step = 4;

// do{
//     console.log(counter)
//     counter = counter + step;
// }while(counter == 100 || counter < 100 );

/*-------------------------------*/



/*-----Practice exercise 5.3-----*/

// let myWork = [];

// for(let i = 1; i <= 10; i++){
//     myWork.push({name: `Lesson ${i}`,
//     status: (i % 2 == 0) ? true : false});
// };
// console.log(myWork);

/*-------------------------------*/



/*-----Practice exercise 5.4-----*/

// let myTable = [];

// let rows = 5, cols = 5;

// let counter = 0;

// for(let i = 0; i < rows; i++){
//     let tempTable = [];

//     for(let j = 0; j < cols; j++){
//         counter++;
//         tempTable.push(counter);
//     };
//     myTable.push(tempTable);

// };

// console.table(myTable);

/*-------------------------------*/



// let arrOfArrays = [];

// for (let i = 0; i < 3; i++){
//     arrOfArrays.push([]);

//     for (let j = 0; j < 7; j++) {
//         arrOfArrays[i].push(j);
//     };
// };

// console.log(arrOfArrays);
// console.table(arrOfArrays);



// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"]; 
// for (let i = 0; i < names.length; i ++){ 
//  if(names[i].startsWith("M")){
//  delete names[i];
//  continue;
//  }
//  names[i] = "hello " + names[i]; 
// } 
// console.log(names);



/*-----Practice exercise 5.5-----*/

// let grid = [];

// let cells = 64;
// let counter = 0;
// let cols = 8
// let row;

// for(let i = 0; i < cells + 1; i++){
//     if(counter % cols == 0){

//         if(row !== undefined){
//             grid.push(row);
//         };

//         row = [];
//     };

//     counter++;
//     let tempVar = counter;
//     row.push(tempVar);

// };

// console.table(grid);

/*-------------------------------*/



// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let name of names) {
//     console.log(name);
// };



/*-----Practice exercise 5.6-----*/

// let array = [];

// for(let i = 0; i < 10; i++){
//     array.push(i);
// };

// console.log(array);

// for(let j = 0; j < array.length; j++){
//     console.log(array[j]);
// };

// for(let x of array){
//     console.log(x)
// };

/*-------------------------------*/



/*-----Practice exercise 5.6-----*/

// let myObject = {
//     prop1: 'value1',
//     prop2: 'value2',
//     prop3: 'value3'
// };

// for(let prop in myObject){
//     console.log(prop, myObject[prop]);
// };

// let arr = ['prop1', 'prop2', 'prop3'];
// for(let obj in arr){
//     console.log(obj, arr[obj])
// };

/*-------------------------------*/



/*-----Practice exercise 5.6-----*/

// let output = "";

// let skip = 5;

// for(let i = 1; i <= 10; i++){
//     if(i == skip){
//         continue;
//     }
//     output += i;
// };

// console.log(output);

// for(let i = 1; i <= 10; i++){
//     if(i == skip){
//         break;
//     }
//     output += i;
// };

// console.log(output);

/*-------------------------------*/

// let groups = [
//     ["Martin", "Daniel", "Keith"],
//     ["Margot", "Marina", "Ali"],
//     ["Helen", "Jonah", "Sambikos"],
// ];

// for (let group of groups) {
//     for (let member of group) {
//         if (member.startsWith("M")) {
//             console.log("found one starting with M:", member);
//             break;
//         };
//     };
// };
   

// outer:
// for (let group of groups) {
//     inner:
//     for (let member of group) {
//         if (member.startsWith("M")) {
//             console.log("found one starting with M:", member);
//             break outer;
//         };
//     };
// };


