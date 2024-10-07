const heroes = [
    { hero: 'Iron Man', name: 'Tony Stark', age: 50, isAvenger: true },
    { hero: 'Captain America', name: 'Steve Rogers', age: 110, isAvenger: true },
    { hero: 'Thor', name: 'Thor Odinson', age: 1500, isAvenger: true }
];

const villains = [
    { hero: 'Thanos', name: 'Thanos', age: 1000, isAvenger: false },
    { hero: 'Loki', name: 'Loki Laufeyson', age: 1052, isAvenger: false }
];


//   Задание 1
// Объедините два массива героев в один и отсортируйте по возрасту

const newHerroes = [].concat(heroes, villains).sort((a, b) => b.age - a.age);  // отсортировали по возрасту в порядка от старшего к младшему
console.log(newHerroes);

// Задание 2
// Замените имя героя "Captain America" на "The First Avenger" и увеличьте его возраст на 10 лет

const heroesCaptain = heroes.map(hero => {
    if (hero.hero === 'Captain America') {
        return { ...hero, hero: 'The First Avenger', age: hero.age + 10 }
    }
    return hero
})

console.log(heroesCaptain);


// Задание 3
// Напишите функцию getRandomCharacter, которая возвращает случайного персонажа в строке: Если это герой функция вернет: Congratulations! You got a hero: Iron Man! А если злодей: Attention! Thanos! Call the Avengers!

function getRandomCharacter(arr) {   // передаем массив героев в функцию
    const randomNumber = Math.floor(Math.random() * arr.length)  // генерируем случайное число
    let character = arr[randomNumber]  // выбрали героя по индексу
    character.isAvenger
        ? console.log(`Congratulations! You got a hero: ${character.hero}`)
        : console.log(`Attention! ${character.hero}!! Call the Avengers!`)

    return character
}

console.log(getRandomCharacter(heroes));


// Задание 4
// Создайте функцию getHeroAges(heroes), которая принимает массив героев
// Функция должна выполнить следующие действия:
// Отфильтровать героев, чьи имена начинаются с буквы "T". Отсортировать отфильтрованных героев по возрастанию их возраста. Получить массив возрастов отсортированных героев. Вывести полученный массив возрастов в обратном порядке.

const getHeroAges = heroes => {
    const filteredHeroes = heroes
        .filter(hero => hero.name.startsWith('T')) // отфильтровали всех на Т 
        .sort((a, b) => a.age - b.age) // отсортировали по возрастанию с предикатом
        .map(hero => hero.age) // получили массив с возрастом героев (только цифры)
        .reverse() // перевернули
    return filteredHeroes;
}

console.log(getHeroAges(newHerroes));
