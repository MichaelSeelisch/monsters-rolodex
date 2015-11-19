/**
 * Created by michaelseelisch on 17.11.15.
 */
'use strict';

var color = 'red',
    speed = 10;

var car = {
    color,
    speed,
    go() {
        console.log('Vrooooom');
    }
};

console.log(car.color);
console.log(car.speed);

car.go();

/*****/

let firstName = 'John';
let lastName = 'Linquist';

let person = { firstName, lastName };

console.log(person);

let mascot = 'Moose';

let team = { person, mascot };

console.log(team);