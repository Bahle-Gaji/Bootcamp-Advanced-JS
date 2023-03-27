/*-----Practice exercise 3.1-----*/
let array1 = ['Milk', 'Bread', 'Apples'];
// console.log(array1);

array1[1] = 'Bananas';
// console.log(array1);



/*-----Practice exercise 3.2-----*/
let list = [];

list.push('Milk');
list.push('Bread');
list.push('Apples');
// console.log(list);

list.splice(1, 1, 'Bananas', 'Eggs');
// console.log(list);

list.pop()
// console.log(list);

list.sort();
// console.log(list);

// console.log(list.indexOf('Milk'));

list.splice(1, 0, 'Carrots', 'Lettuce');
// console.log(list);

let list2 =['Juice', 'Pop'];
// console.log(list2);

list.push(...list2);
list.push(...list2);
// console.log(list);

// console.log(list.lastIndexOf('Pop'));



/*-----Practice exercise 3.3-----*/
let array2 = [1, 2, 3];
let array3 = [];
array3.push(array2);
array3.push(array2);
array3.push(array2);
// console.log(array3);

// console.log(array3[1][1]);



/*-----Practice exercise 3.4-----*/
let myCar = {
    make: 'Volkswagen',
    model: 'Golf R',
    year: 2018,
    hp: 310,
    torque: 380,
    inProduction: false
};

// var variable = 'color';
// myCar[variable] = 'Lapiz Blue';
// console.log(myCar);

let variable = 'forSale';
myCar[variable] = true;
// console.log(myCar);


// console.log(myCar.make, myCar.model);
// console.log(myCar.forSale);



/*-----Practice exercise 3.5-----*/
let people = {
    friends: []
};

let friend1 = {
    firstName: 'James',
    lastName: 'Sour',
    id: 010102
};

let friend2 = {
    firstName: 'Amanda',
    lastName: 'Killa',
    id: 010103
};

let friend3 = {
    firstName: 'Arnold',
    lastName: 'Sanchez',
    id: 010104
};

people.friends.push(friend1);
// console.log(people);

people.friends.push(friend2);
// console.log(people);

people.friends.push(friend3);
// console.log(people);