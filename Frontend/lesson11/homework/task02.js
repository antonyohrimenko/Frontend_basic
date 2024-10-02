// Задание 2
// Создайте функцию compareObjects, которая принимает два объекта в качестве аргументов и проверяет их на равенство (все ключи и значения должны быть одинаковыми). Верните true, если объекты равны, и false в противном случае.


// создаем 2 одинаковых обьекта

const cars1 = { name: 'BMW', age: 10 };
const cars2 = { name: 'BMW', age: 10 };

// обьекты равны в том случае если ключи равны и значение по ключу равно

const compareObjects = function (obj1, obj2) {

    // сравним значение ключей, но сначала положим их в переменные
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    // проверяем что длина равна
  if (keys1.length !== keys2.length) {
    return false
  }

  // проверяем что ключи равны
  for (i = 0; i < keys1.length; i++) {
    if (keys1[i] !== keys2[i]) {
      return false;
    }
  }

  // мы проверяем значения по ключам
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  // если все проверки пройдены возвращаем true
  return true;
}

console.log(compareObjects(cars1,cars2)); // ожидаем true