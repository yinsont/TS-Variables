"use strict";
let id = 5; //id variable is type number
let firstname = 'danny'; //firstname variable is type string
let hasDog = true; //hasDog variable is type boolean
let unit; //unit variable is type number which is defined later
unit = 5;
let age; //age can either be a string or number
age = 26;
age = '26';
let anotherAge = 100;
anotherAge = true;
let ids = [1, 2, 3, 4, 5]; // can only contain numbers
let names = ['Danny', 'Anna', 'Bazza']; // can only contain strings
let options = [true, false, false]; //can only contain true or false
let books = [
    { name: 'Fooled by randomness', author: 'Nassim Taleb' },
    { name: 'Sapiens', author: 'Yuval Noah Harari' },
]; // can only contain objects
let arr = ['hello', 1, true]; // any basically reverts TypeScript back into JavaScript
// Declare a variable called person with a specific object type annotation
let person;
// Assign person to an object with all the necessary properties and value types
person = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
};
let anotherPerson = ['Danny', 1, true];
anotherPerson[0] = 100;
// anotherPerson[1] = {name: 'Danny'} // Error - person array can't contain objects
