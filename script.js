'use strict';

let arr = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina',]

let arr2 = []

let arr3 = []

arr.forEach(element => {

    if (element.includes('n')) {
        arr2.push(element)
    } else {
        arr3.push(element)
    }

});

console.log(arr.join(' '), " - o'zi");
console.log("")
console.log(arr2.join(' '), " - n Harfi bor so'zlar");
console.log(arr3.join(' '), " - n Harfi yo'q so'zlar");
