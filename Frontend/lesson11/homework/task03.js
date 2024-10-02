// Задание 3
// Напишите функцию findKeyByValue, которая принимает объект и значение в качестве аргументов и возвращает первый ключ, соответствующий переданному значению. Если значение не найдено, верните null.


// создали обьект car
const car = {
    model: 'BMW',
    age: 20,
}


const findKeyByValue = function (obj, value){

    // создаем массив из всех ключей обьекта
    let keys = Object.keys(obj);

    // итерируемся по массиву ключей
  for (const key of keys) {
    // проверяем равно ли значение в объекте переданному значению
    if (obj[key] === value) {
      // возвращаем ключ если условие верное
      return key;
    }
  }
  // null если не совпали
  return null;
}

console.log(findKeyByValue(car, 'BMW')); // ожидаем model

