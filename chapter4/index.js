/*-----Practice exercise 4.1-----*/
// let myVariable = true;
// console.log(myVariable);
// if (myVariable){
//     console.log('It is true')
// }else{
//     console.log('It is not true')
// };


/*-----Practice exercise 4.2-----*/
// // let age = Number(prompt('What is your age? '));
// let message;
// if(age >= 21){
//     message = "Entry granted and  may purchase alcohol"
// }
// else if(age >= 19){
//     message = "Entry granted. Not allowed to purchase alcohol"
// }
// else {
//     message = 'Entry denied'
// };

// console.log(message);

/*-----Practice exercise 4.3-----*/
// let id = true;
// let message = (id) ? 'Access Granted' : 'Access Denied';
// console.log(message);


/*-----Practice exercise 4.4-----*/
// let random5 = Math.floor(Math.random() * 6);
// let input = prompt('What question would you like to ask? ');
// let answer;

// switch(random){
//     case 0:
//         answer = 'Probably';
//         break;
    
//     case 1:
//         answer = 'It may be';
//         break;
    
//     case 2:
//         answer = 'Definitely';
//         break;
    
//     case 3:
//         answer = 'Never';
//         break;
    
//     case 4:
//         answer = 'I\'m not sure';
//         break;
    
//     case 5:
//         answer = 'Yes, of course';
//         break;
// };

// console.log(`Your question: ${input}\nAnswer: ${answer}`);



/*-----Practice exercise 4.5-----*/
// let prize = Number(prompt('Select a number between 0-10: '));
// let result = 'My Selection: ';

// switch(prize) {
//     case 0:
//         result += 'Seiko 5 Field Sports SRPG27 Watch';
//         result += ' and ';
//         result += 'R800 cash!';
//         break;

//     case 1:
//         result += 'UAG Pressure cooker';
//         result += ' and ';
//         result += 'R1000 cash!';
//         break;

//     case 2:
//         result += ' 55" Samsung Smart TV';
//         result += ' and ';
//         result += 'R1000 cash!';
//     break;

//     case 3:
//         result += 'Apple iPhone 12 Black 64GB';
//         result += ' and ';
//         result += 'R500 cash!';
//     break;

//     case 4:
//         result += 'Bremont Jaguar C-Type Chronograph Watch';
//         result += ' and ';
//         result += 'R1000 cash!';
//     break;

//     case 5:
//         result += 'Beats Fit Pro Earbuds';
//         result += ' and ';
//         result += 'R500 cash!';
//     break;

//     case 6:
//         result += 'Food Basket';
//         result += ' and ';
//         result += 'R100 cash!';
//     break;

//     case 7:
//         result += 'Ster-Kinekor Voucher worth R250';
//         result += ' and ';
//         result += 'R800 cash!';
//     break;

//     case 8:
//         result += 'Rolex Day-Date Watch';
//         result += ' and ';
//         result += 'R1000 cash!';
//     break;

//     case 9:
//         result += '10-Piece Kitchenware set';
//         result += ' and ';
//         result += 'R500 cash!';
//     break;

//     case 10:
//         result += '35" Samsung Smart TV';
//         result += ' and ';
//         result += 'R900 cash!';
//     break;
    
// };

// alert(result);


/*-----Chapter Projects-----*/

//Evaluating a number game

// let ans = 8;
// let guess = Number(prompt("Enter a number between 1 and 10: "));
// if (guess == ans) {
//     alert('Correct!')
// }
// else if (guess > ans) {
//     alert('Too high, try again');
// }
// else {
//     alert('Too low, try again')
// };


//Friend Checker Game

// let name = prompt('Enter a name');
// let message;

// switch(name){
//     case 'Jerry' :
//     case 'Amy' :
//     case 'Bahle' :
//     message = 'I am friends with ' + name;
//     break;

//     default:
//         message = 'I don\'t know ' + name;
// }

// console.log(message);


//Rock Paper Scissors

// const options = ['Rock', 'Paper', 'Scissors'];

// let compRandom = Math.floor(Math.random() * 3);
// let playRandom = Math.floor(Math.random() * 3);

// let message = "Player: " + options[playRandom] + " vs Computer: " + options[compRandom];

// if (playRandom === compRandom) {
//     message += "\nIt's a tie";
// } else if (playRandom > compRandom) {
//     if (compRandom == 0 && playRandom == 2) {
//         message += "\nComputer Wins";
//     } else {
//         message += "\nPlayer Wins";
//     }
// } else {
//     if (compRandom == 2 && playRandom == 0) {
//         message += "\nPlayer Wins";
//     } else {
//         message += "\nComputer Wins";
//     }
// }
// console.log(message);
