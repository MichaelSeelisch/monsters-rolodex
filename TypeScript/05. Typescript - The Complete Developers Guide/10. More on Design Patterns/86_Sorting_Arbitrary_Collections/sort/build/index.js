"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var ChractersCollection_1 = require("./ChractersCollection");
/*
    const numbersCollection = new NumbersCollection([100000, 3, -5, 0]);

    const sorter = new Sorter(numbersCollection);
    sorter.sort();

    console.log(numbersCollection.data);
*/
var charactersCollection = new ChractersCollection_1.CharactersCollection('Xaayb');
var sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
