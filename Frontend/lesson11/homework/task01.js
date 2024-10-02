// Задание 1
// Ваша задача - написать программу, которая принимает массив объектов-людей и вычисляет общий возраст.

// Создайте функцию calculateTotalAge, которая принимает массив объектов. Каждый объект в массиве представляет одного человека и имеет ключи: name и age В теле цикла, используйте деструктуризацию объекта для получения значения age и name. Верните общий возраст.

// const people = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 35 }
// ];
// console.log(calculateTotalAge(people)); // 90



// создаем массив обьектов
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

// пишем функцию c деструктуризацией
const calculateTotalAge = function (people) {
    let totalAge = 0;
    for (let person of people) {
        const { age } = person  // деструкторизация
        totalAge += age
    }
    return totalAge;
}

// пишем функцию БЕЗ ДЕСТРУКТУРИЗАЦИИ и обычным FOR
// const calculateTotalAge = function (people) {
//     let totalAge = 0;

//     for (let i = 0; i < people.length; i++) {
//         const age = people[i].age;
//         totalAge += age;
//     }
//     return totalAge;
// }

console.log(calculateTotalAge(people));