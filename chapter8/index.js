//-----Decoding and encoding URIs-----

// let uri = 'https://www.example.com/submit?name=maaike van putten';
// let encoded_uri = encodeURI(uri);
// console.log('Encoded: ', encoded_uri);
// let decoded_uri = decodeURI(uri);
// console.log('Decoded: ', decoded_uri);

// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURIComponent(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log("Decoded:", decoded_uri);


/*-----Practice exercise 8.1-----*/

// let str1 = "How's%20it%20going%3F";
// let str2 = "How's it going?";

// let str1_decode_uri_comp = decodeURIComponent(str1);
// console.log(str1_decode_uri_comp);

// let str2_enocde_uri = encodeURI(str2);
// console.log(str2_enocde_uri);

// let url = "http://www.basescripts.com?=Hello World"
// let url_encoded = encodeURI(url);
// console.log(url_encoded);

/*-------------------------------*/



//-----Executing JavaScript with eval()-----
function go(e){
    eval(e.value);
};

//-----Array Methods-----//

//-----Filtering an array
// let arr = ['squirrel', 5, 'Tjed', new Date(), true];

// function checkString(element, index){
//     return typeof element === 'string';
// };

// let filterArr = arr.filter(checkString);
// console.log(filterArr);

//-----Replacing part of an array with another part of the array
// let arr = ["grapefruit", 4, "hello", 5.6, true];
// arr.copyWithin(0, 3, 4);
// arr.copyWithin(0, 3, 5);
// arr.copyWithin(0, 3);
// console.log(arr);

//-----Mapping the values of an array
// let arr = [1, 2, 3, 4];
// let mapped_arr = arr.map(x => x + 1);
// console.log(mapped_arr);



/*-----Practice exercise 8.2-----*/

// let names = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"];

// let newNames = names.filter((value, index, array) => {
//     console.log(value, index)
//     // return array.indexOf(value) == index;
// });

// console.log(newNames);


/*-------------------------------*/



/*-----Practice exercise 8.3-----*/

// let arr = [1, 2, 3, 4, 5, 6];

// let newArr = arr.map((x) => x * 2);
// console.log(newArr);

/*-------------------------------*/



//-----Creating substrings
// let str = 'Create a substring';

// let substr1 = str.slice(5);
// let substr2 = str.slice(0, 3);
// console.log(substr1);
// console.log(substr2);


//-----Replacing parts of the string
// let hi = 'Hi buddy';
// let new_hi = hi.replace('buddy', 'Pascal');

// console.log(new_hi);

// let s3 = "hello hello";
// let new_s3 = s3.replace("hello", "oh");
// console.log(new_s3);


/*-----Practice exercise 8.4-----*/

// let str = 'thIs will be capiTalized for each word';

// let capitalize = (string) => {
//     string = string.toLowerCase();
//     let arr = [];

//     let words = string.split(' ');
//     words.forEach(word => {
//         let capWord = word.slice(0, 1).toUpperCase() + word.slice(1);
//         arr.push(capWord);
//     });
    
//     return arr.join(' ');
// };

// console.log(capitalize(str));

/*-------------------------------*/


/*-----Practice exercise 8.5-----*/
// let str = "I love JavaScript";
// let array = ['a', 'e', 'i', 'o', 'u'];


// str = str.toLowerCase();

// array.forEach((letter, index) => {
//     console.log(letter);

//     str = str.replaceAll(letter, index);
// });

// console.log(str);

/*-------------------------------*/



/*-----Practice exercise 8.6-----*/

// console.log(Math.PI);

// console.log(Math.ceil(5.7));
// console.log(Math.floor(5.7));
// console.log(Math.round(5.7));

// console.log(Math.floor(Math.random() * 11));

// console.log(Math.floor(Math.random() * 10) + 1);

// console.log(Math.floor(Math.random() * 100) + 1);

// function minMax(min, max) {
//     return Math.floor((Math.random() * (max - min + 1)) + min);
// };

// minMax(5, 10);

// for(let i = 0; i < 100; i++){
//     console.log(minMax(1, 100))
// };

/*-------------------------------*/



//-----Date methods----//

// let currentDate = new Date();
// console.log(currentDate);

// let now2 = Date.now();
// console.log(now2);

// let milliDate = new Date(1000);
// console.log(milliDate);

// let stringDate = new Date('Sat Jun 05 2021 12:00:59');
// console.log(stringDate);

// let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
// console.log(specificDate);


//-----Methods to get and set the elements of a date

let d = new Date();
// console.log('Day of day:', d.getDay());
// console.log('Day of the month:', d.getDate());
// console.log('Month of the year:', d.getMonth());
// console.log('Year:', d.getFullYear());
// console.log("Seconds:", d.getSeconds());
// console.log("Milliseconds:", d.getMilliseconds());
// console.log("Time:", d.getTime());

// d.setFullYear(2010);
// console.log(d);

// d.setMonth(9);
// console.log(d);

// d.setDate(10);
// console.log(d);

// d.setHours(10);
// console.log(d);

// d.setTime(1622889770682);
// console.log(d);

//-----Parsing Dates

// let d1 = Date.parse('June 5, 2021');
// console.log(d1);

// let d2 = Date.parse('6/5/2021');
// console.log(d2);


//-----Converting a date to a string
// console.log(d.toString());
// console.log(d.toLocaleDateString());

/*-----Practice exercise 8.7-----*/

// //1.
// let date1 = new Date(2027, 10, 28);
// console.log(date1);

// //2.
// let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// //3.
// let day = date1.getDate();

// //4.
// let year = date1.getFullYear();

// //5. 
// let month = date1.getMonth();

// //6.
// let date = `${day} ${months[month-1]} ${year}`;

// console.log(date);

/*-------------------------------*/


/*-----Chapter Projects-----*/

//-----Word Scrambler

//1.
// let string = 'Javascript';

// function scramble(str){
//     let max = str.length;
//     let tempStr = '';
//     for(let i = 0; i < max; i++){
//         let pos = Math.floor(Math.random() * str.length);
//         tempStr += str[pos];
//         str = str.substr(0, pos) + str.substr(pos + 1);
//     };
//     return tempStr;
// };

// console.log(string);
// console.log(scramble(string));


//-----Countdown timer

// let finalDate = new Date('12/31/2030 23:59:59');
// console.log(finalDate);

// function countDown(){
//     let totalTime = Date.parse(finalDate) - Date.now();
//     let days = Math.floor(totalTime / (1000 * 60 * 60 * 24));
//     let hours = Math.floor(totalTime / (1000 * 60 * 60) % 24);
//     let minutes = Math.floor((totalTime / 1000 / 60) % 60);
//     let secs = Math.floor((totalTime / 1000) % 60);

//     return {days, hours, minutes, secs}

// };

// function update(){
//     let eval = countDown();
//     let output = '';

//     for(let value in eval){
//         output += (`${value} : ${eval[value]}`);
//     };

//     console.log(output);

//     setTimeout(update(), 1000);
// };

// update();