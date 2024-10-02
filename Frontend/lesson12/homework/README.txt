Homework
Задание 1
У вас есть массив объектов:

const starWarsHeroes = [
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Luke Skywalker", age: 25, isJedi: true },
    { name: "Han Solo", age: 35, isJedi: false },
    { name: "Princess Leia", age: 30, isJedi: false },
    { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

Используйте методы массивов

Создайте на основе старого массива новый массив объектов по образу: [{ name: "Luke Skywalker", isJedi: true }, {name: "Han Solo", isJedi: false}...]

Задание 1.2
Создайте новый массив с джедаями младше 40 лет

Задание 1.3
Посчитайте возраст всех джедаев

Задание 1.4
Повысьте возраст героев на 10 лет

Задание 1.5
Создайте новый массив, где "Anakin Skywalker" заменен на { name: "Darth Vader", isJedi: false, age: 50 }

Задание 1.6
Создайте массив с именами героев, у которых возраст больше 30 лет, преобразуйте каждое имя в верхний регистр и отфильтруйте имена, которые начинаются с буквы "A".

используйте .startsWith()
Задание 1.7
Выведите на экран сообщение для каждого героя, указывающее на его статус джедая, и добавьте к каждому сообщению его возраст.

Используйте тернарный оператор

Образец:

'Anakin Skywalker is a Jedi. Age: 25' 'Han Solo is not a Jedi. Age: 35'