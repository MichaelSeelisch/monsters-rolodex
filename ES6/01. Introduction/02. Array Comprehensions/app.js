/**
 * Created by michaelseelisch on 17.11.15.
 */
'use strict';

let people = [
    {
        'firstName': 'Melinda',
        'phone': '1-607-194-5530',
        'email': 'melinda@somwhere.com'
    },
    {
        'firstName': 'John',
        'phone': '1-9807-194-6430',
        'email': 'john@somwhere.com'
    },
    {
        'firstName': 'Ferris',
        'phone': '1-23-763-1834',
        'email': 'ferris@somwhere.com'
    }
]

let emails = [for({email} of people) email]

let mail = [for({email, firstName} of people) if(firstName === 'Melinda') email]

console.log(emails);
console.log(mail);

/**************/
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var aboveFive = [for(num of nums) if (num > 5) num];

console.log(aboveFive);

/***************/
var nums = [1, 2, 3, 4];

var letters = ['a', 'b', 'c', 'd', 'e'];

var output_01 = [for(num of nums) for(letter of letters) num + letter];
var output_02 = [for(num of nums) [for(letter of letters) num + letter]];

console.log(output_01);
console.log(output_02);