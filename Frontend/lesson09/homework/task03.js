// Задание 3
// Создайте пустой массив countries. Добавьте в массив следующие страны: "Франция", "Германия", "Италия" 
// Удалите последний элемент из массива и сохраните значение в переменной. 
// Добавьте его в начало массива. Выведите countries в консоль

const countries = [];
countries.push('Франция', 'Германия', 'Италия');
const temp = countries.pop(); // удалили и сохранили удаленное в переменную
countries.unshift(temp);
console.log(Array(countries));