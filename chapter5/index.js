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
let max = 5;

let random = Math.floor((Math.random() * max)+ 1);
alert(`Random is: ${random}`);

// let guess = Number(prompt('Input: '));
// // guess = number(guess);
// console.log(guess);
// console.log(typeof guess);

let correct = 0;

while (correct == false){
    let guess = Number(prompt('Guess a number between 1 and 5:'));
    console.log(guess);

    if(guess == 0 || isNaN(guess)){
        alert("Please guess a NUMBER between 1 and 5:");
    }
    else{
        if(guess === random){
            alert('You guessed correctly. Well done!');
            correct = true;
            break;
        }
        else if (guess > random){
            alert('Guess too high, try again');
        }
        else if(guess < random){
        alert('Guess too low, try again');
        };
    };
};
