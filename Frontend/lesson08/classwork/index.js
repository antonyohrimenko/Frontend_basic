// вывод в консоль сообщение
console.log("Hello JS");

// создание переменных

let dog = "Sharik";
const cat = "BARSIK";

dog = "Sobaken";
console.log(dog);

// примитивные типы данных (7 типов)

// 1. String

let str1 = "Hello";
let str2 = 'Hello_2';
let str3 = "13"; // это строка тоже не число
let str4 = str1 + " " + str3;

console.log(str4);
console.log(str4.toLocaleUpperCase());

// 2. Number

let num1 = 9;
let num2 = 9.15;
console.log(num1 + num2);

// 3. BigInt

let num3 = 1234n;

// 4. Boolean
let isFriday = false;

if (isFriday) {
    console.log(isFriday);
}
else {
    console.log("Да суббота же");
}


// 5. Undefined (неопределен). Будет определен когда ему что-то присводится

let str5;
console.log(str5);

// 6. Null (отсутствие значения)

let empty = null;
console.log(empty);

// 7. Symbol (символ)

let s1 = Symbol("Какой-то символ");



// ПРЕОБРАЗОВАНИЕ ТИПОВ ДАННЫХ 

// 1. Неявное преобразование типов данных

let str7 = "" + 9;   // будет 9
console.log(typeof (str7));

// 2. Явное преобразование типов 

const num4 = 10;
let str8 = String(num4);
console.log(typeof (str8));


// странные варианты неявных преобразований

const res1 = 5 + 12 + "5"; // 175 
const res2 = "5" + 5 + 12; // 5512

console.log(res1);
console.log(res2);

const num5 = +"5"; // неявное преобразование в число. Символ "+" является символом преобразования в число
console.log(typeof (num5));

const num6 = +"5" + +"10";  // + тут как и сложение и как преобразование строки в число
console.log(num6);

// явные преобразования интересные

const num7 = Number("123*#"); // NaN  Not a Number
console.log(num7);
console.log(typeof num7); // Какого хрена? WAAAAAAAT? 
// NaN относится к числам - Помнить! 


// преобразование boolean

const abc = Boolean(1); // true
const abc2 = Boolean(0); // false
const abc3 = Boolean(-1); // true

console.log(abc);
console.log(abc2);
console.log(abc3);


const abc4 = Boolean(""); // false
console.log(abc4);

const abc5 = Boolean("Hello");  // true
console.log(abc5);



// строгое и не строгое равенство
// ==== (3 равно) строгое равенство
// == (2 равно) не строгое равенство
// = - присваивание

console.log(9 === "9"); // false
console.log(9 == "9"); // true - происходит не явное преобразование в строку




// ИСПОЛЬЗОВАНИЕ ШАБЛОННЫХ СТРОК

const FIRST_NAME = "Anton";
const LAST_NAME = "Okhrimenko";
const CITY = "Hamburg";

const GREETING = `Hello, ${FIRST_NAME + " " + LAST_NAME} ! Your city is ${CITY}!`;
console.log(GREETING);






