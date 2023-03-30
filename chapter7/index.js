// //-----Classes and Objects-----

// let dog1 = {
//     dogName: 'JavaScript',
//     weight: 2.4,
//     color: 'brown',
//     breed: 'chihuahua'
// };

// function Dog(dogName, weight, color, breed){
//     this.dogName = dogName,
//     this.weight = weight,
//     this.color = color,
//     this.breed = breed
// };

// let dog2 = new Dog('Jacky', 30, 'brown', 'labrador');
// console.log(dog1);
// console.log(dog2);

// console.log(dog2.dogName, 'is a', dog1.breed, 'and weighs', dog1.weight, 'kg.');

// //-----Constructors-----

// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName,
//         this.lastName = lastName
//     };
// };

// //let p = new Person('Maaike', 'van Putten');
// //console.log('Hi', p.firstName);

// let p = new Person('Maaike');
// console.log('Hi', p.firstName, p.lastName);



/*-----Practice exercise 7.1-----*/

// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName,
//         this.lastName = lastName
//     };
// };

// let friend1 = new Person('Caleb', 'Africa');
// let friend2 = new Person('Hector', 'Salamanca');

// console.log('Hello', friend1.firstName);
// console.log('Hello', friend2.firstName);

/*-------------------------------*/


// //-----Methods-----

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     };

//     greet() {
//         console.log("Hi there! I'm", this.firstname);
//     };
// };

// let p = new Person('Maaike', 'van Putten');
// p.greet();

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     };

//     greet() {
//         console.log("Hi there!");
//     };

//     compliment(name, object) {
//         return "That's a wonderful " + object + ", " + name;
//     };
// };

// let p = new Person('Harry', 'Bourne');
// let compliment = p.compliment('Harry', 'hat');
// console.log(compliment);



/*-----Practice exercise 7.2-----*/

// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     fullname(){
//         return this.firstName + " " + this.lastName;
//     }
// };

// let person1 = new Person('Jacob', 'Zuma');
// let person2 = new Person('Cerael', 'Ramaphosa');

// console.log(person1.fullname());
// console.log(person2.fullname());

/*-------------------------------*/


// //-----Properties-----

// class Person{
//     #firstName;
//     #lastName;

//     constructor(firstName, lastName){
//         this.#firstName = firstName;
//         this.#lastName = lastName;
//     };
// };

// let p = new Person('Maria', 'Saga');
// console.log(p.firstName);

// //-add m if name doesn't start with m

// class Person{
//     #firstName;
//     #lastName;

//     constructor(firstName, lastName){
//         if(firstName.startsWith('M')){
//             this.#firstName = firstName;
//         }
//         else{
//             this.#firstName ='M' + firstName;
//         }
//         this.#lastName = lastName;
//     };
// };

// let p = new Person('kay', 'Moon');
// console.log(p.firstName);



// //-----Getters and Setters-----

// class Person{
//     #firstName;
//     #lastName;

//     constructor(firstName, lastName){
//         this.#firstName = firstName;
//         this.#lastName = lastName;
//     }

//     get firstName(){
//         return this.#firstName;
//     }
//     set firstName(firstName){
//         this.#firstName = firstName;
//     }


//     get lastName(){
//         return this.#lastName;
//     }
//     set lastName(lastName){
//         this.#lastName = lastName;
//     }
// };

// let p = new Person("Maria", "Saga");
// console.log(p.firstName);

// p.firstName = 'Adnande';
// console.log(p.firstName);


// //-----Inheritance-----

// class Vehicle{
//     constructor(color, currentSpeed, maxSpeed){
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }

//     move(){
//         console.log('Moving at', this.currentSpeed);
//     }

//     accelerate(amount){
//         this.currentSpeed += amount;
//     }
// }

// class Motorcycle extends Vehicle{
//     constructor(color, currentSpeed, maxSpeed, fuel){
//         super(color, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }

//     doWheelie(){
//         console.log('Driving on one wheel!');
//     }
// };

// let motor = new Motorcycle('black', 0, 250, 'petrol');
// console.log(motor.color);
// motor.accelerate(50);
// motor.move();


// //-----Prototypes-----

// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     greet(){
//         console.log('Hi there!');
//     }
// };

// Person.prototype.introduce = function(){
//     console.log('Hi, I\'m', this.firstName);
// };

// Person.prototype.favouriteColor = 'green';
// let p = new Person('Maria', 'Saga');
// console.log(p.favouriteColor)
// p.introduce();


/*-----Practice exercise 7.3-----*/

// class Animal{
//     constructor(species, sound){
//         this.species = species;
//         this.sound = sound;
//     }

//     whatSound(){
//         console.log(this.species, this.sound);
//     }
// }

// Animal.prototype.walk = function(){
//     return this.species + ' walks'
// };

// let lion = new Animal('lion', 'roars');
// let horse = new Animal('horse', 'neighs');

// lion.whatSound();
// console.log(lion.walk());
// console.log(horse.walk());

/*-------------------------------*/



/*-----Chapter Projects-----*/

// class Employee{
//     constructor(firstName, lastName, yearsWorked){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.yearsWorked = yearsWorked;
//     }

// }

// const emp1 = new Employee('Michael', 'Byers', 6);
// const emp2 = new Employee('Jason', 'Isaacs', 3);

// let workers = [emp1, emp2];

// Employee.prototype.detail = function(){
//     return this.firstName + ' ' + this.lastName + ' has worked for ' + this.yearsWorked + ' years.';
// };

// workers.forEach(employee => console.log(employee.detail()));

//----------------

class Menu{
    #valueItem1 = 20;
    #valueItem2 = 10;
    constructor(qty1, qty2){
        this.qty1 = qty1;
        this.qty2 = qty2;
    }

    calc(){
        return (this.#valueItem1 * this.qty1) + (this.#valueItem2 * this.qty2);
    }

    get total(){
        return this.calc();
    }
};

let test1 = new Menu(3, 7);
let test2 = new Menu(0, 2);
let test3 = new Menu(5, 5);

console.log(test1.total);
console.log(test2.total);
console.log(test3.total);

/*--------------------------*/