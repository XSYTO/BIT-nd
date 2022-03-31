console.log('---1---');

const number = 10;

if (number > 0) {
    console.log('Geras');
} else if (number < 0) {
    console.log('Blogas');
} else {
    console.log('Blogas');
}

console.log('---2---');

const action = 2;

const zalia = 1;
const geltona = 2;
const raudona = 3;
if (zalia === action) {
    console.log('Eikite');
} if (geltona === action) {
    console.log('Palaukite');
} if (raudona === action) {
    console.log('Eiti draudziama!');
}
console.log('---3---');
const d = 2;
const k = 8;
const n1 = 5;

if (d / k < n1) {
    console.log('Knygos telpa i dezes');
}

const d1 = 3;
const k1 = 18;
const n2 = 5;

if (k1 / d1 > n2) {
    console.log('Knygos netelpa i dezes');
}
console.log('---4---');
let a1 = 1;
let b1 = 2;
console.log(++a1 , --b1);

console.log('---5---');
const c = 50;
const p = 20;
let k2 = Math.floor(c / p);
let likutis = c - p * k2;
console.log('Porcijos:', k2,'.','Likutis:', likutis, 'cnt');

console.log('---6---');

const degtukai = 6;

if (degtukai === 6) {
    console.log('Trikampi sudelioti galima');
   } else if (degtukai === 4) {
     console.log('Trikampi sudelioti negalima');
   } else {
     console.log('Degtuku lauzyti negalima');
   }

console.log('---7---');

const menesiai = [undefined, 31, 28, 31, 30, 31, 30, 31, 31, 31, 30, 31, 31]
const menesioNumeris = 10;
console.log(`menesiu dienos, ${menesiai[menesioNumeris]}`);

console.log('---8---');

const kauliukas = 6;

if (kauliukas === 1) {
    console.log('Kambarį tvarkys jaunėlis');
    } else if (kauliukas === 2) {
        console.log('Kambarį tvarkys vyresnėlis');
    } else if (kauliukas === 3) {
        console.log('Kambarį tvarkys jaunėlis');
    } else if (kauliukas === 4) {
        console.log('Kambarį tvarkys vyresnėlis');
    } else if (kauliukas === 5) {
        console.log('Kambarį tvarkys jaunėlis');
    } else if (kauliukas === 6) {
        console.log('Kambarį tvarkys vyresnėlis');
    } else {
        console.log('Tokia kombinacija neegzistuoja');
    }

    console.log('---9---');

/* 
----------
*/

    console.log('---10---');
const ejoLetai = 43;
const ejoGreitai = 23;
const min1 = 29;
const val1 = 8*60;
const val = 9*60;
const min = 5;
if (val1 + min1 + ejoLetai > val + min) {
    console.log('Petras į pamoką pavėluos');
} if (val1 + min1 + ejoGreitai < val + min) {
    console.log('Petras į pamoką nepavėluos');
}
