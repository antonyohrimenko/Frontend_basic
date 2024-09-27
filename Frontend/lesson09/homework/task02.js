// Задание 2
// Используя пройденные на занятии методы массива получите из этого массива новый массив,
// в котором элементы идут в обратной последовательности.
// сделайте два решения - без и с использованием reverse()

const array = [1, 4, 55, 89, 95]; // пусть это будет исходный массив
console.log(Array(array));

// переворачиваем массив используя методы пройденые на уроке 
// допустим мы будем удалять из него последний элемент и сохранять в обратном порядке

let temp = array.length; // запомним тут длину исходного массива
const newArray = [];

for (let i = 0; i < temp; i++) {
    newArray[i] = array.pop();
}

console.log(Array(newArray));

console.log(Array(array)); // проверим что из-за удаления в исходном массиве ничего не осталос
// так как метод pop  мутабельный 



console.log('=========== Развернем массив через Reverse для примера');

const arrayReverse = ['Маша', 'Петя', 'Саша', 'Дима'];
console.log(Array(arrayReverse));
console.log(arrayReverse.reverse());

// для примера посмотрим что осталось в исходном массиве после reverse
console.log(Array(arrayReverse)); // метод reverce тоже мутабельный и изменяет исходный массив =( 


