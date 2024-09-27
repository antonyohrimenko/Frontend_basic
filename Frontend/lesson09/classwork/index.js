// Массивы Arrays
// Массивы в JS динамические, резиновые

// 2 способа создания массива

const arr1 = []; // предпочтительный способ
const arr2 = new Array(); // не часто используется конструкция

const numbers = [1, 2, 3, 5, 66];
console.log(numbers);

const fruits = ['banana', 'pear', 'apple'];
console.log(fruits);

const mix = ['orange', 124];
console.log(mix);

// получение элементов из массива по индексу
console.log(fruits[0]);
console.log(fruits[10]); // не определено, массив резиновый и по данному индексу нет еще значения


// изменение значения по индексу

fruits[2] = 'orange';
console.log(fruits);


// циклы

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


let i = 0;

while (i <= 10) {
    console.log(i);
    i++; // условие выхода из цикла
}


let cars = ['bmw', 'audi', 'merzedes', 'volvo', 'subaru', 'zhiguli'];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

console.log(Array(cars)); // чисто для проверки как массив в строку записывать


// кривой способ замены
// let temp = cars[0]; 
// cars[0] = cars[4];
// cars[4] = temp;
// console.log(Array(cars))

// как надо универсально
let temp;

for (let i = 0; i < cars.length; i++) {
    if (i == 0) {
        temp = cars[i];
        cars[i] = cars[cars.length - 1];
    }
    else if (i == cars.length - 1) {
        cars[cars.length - 1] = temp;
    }
}
console.log(Array(cars));

// методы массивов

// добавление и удаление элементов
// методы которые ИЗМЕНЯЮТ ИСХОДНЫЙ МАССИВ называются МУТИРУЮЩИЕ методы 

// PUSH и POP изменяют исходный массив


// PUSH() добавляет в конец элменты

const students = ['Иванов', 'Петров', 'Сидоров'];
students.push('Potter');
console.log(Array(students)); // исходный массив изменился (!!!)

// POP() удаляет элемент из конца массива (мутирующий метод)

students.pop();
console.log(Array(students));


// Методы SHIFT() и UNSHIFT() - оба МУТИРУЮЩИЕ, то есть изменяют исходный массив

// unshift добавляет элемент В НАЧАЛО массива

students.unshift('Luke skywalker');
console.log(Array(students));

// shift удаляет первый элемент массива (!!!)



// Spread syntax

const berries = ['blueberrie', 'watermelon', 'strawberrie'];
// копируем массив ОДНОМЕРНЫЙ

const berries2 = [...berries, 'newberries'];
console.log(Array(berries2));






