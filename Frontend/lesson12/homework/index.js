// наш исходный массив героев

const starWarsHeroes = [
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Luke Skywalker", age: 25, isJedi: true },
    { name: "Han Solo", age: 35, isJedi: false },
    { name: "Princess Leia", age: 30, isJedi: false },
    { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

// Создайте на основе старого массива новый массив объектов по образу: [{ name: "Luke Skywalker", isJedi: true }, {name: "Han Solo", isJedi: false}...]

const starWarsHeroesShort = starWarsHeroes.map(el => (
    {
        name: el.name,
        isJedi: el.isJedi
    }))

console.log(starWarsHeroesShort); // новый массив работает

// Задание 1.2
// Создайте новый массив с джедаями младше 40 лет

const starWarsHeroesSmallAges = starWarsHeroes.filter(el => el.age < 40 && el.isJedi == true)
console.log(starWarsHeroesSmallAges); // новый массив работает

// Задание 1.3
// Посчитайте возраст всех джедаев

const ages = starWarsHeroes.filter(el => el.isJedi == true).reduce((acc, el) => acc + el.age, 0)
console.log(ages); // работает


// Задание 1.4
// Повысьте возраст героев на 10 лет

starWarsHeroes.forEach(el => (el.age += 10))
console.log(starWarsHeroes) // исходный массив поменялся

// Задание 1.5
// Создайте новый массив, где "Anakin Skywalker" заменен на { name: "Darth Vader", isJedi: false, age: 50 }

const newStarWarsHeroes = starWarsHeroes.map(el => {
    if (el.name === 'Anakin Skywalker') {
      return { name: 'Darth Vader', age: 50, isJedi: false }
    } else {
      return el
    }
  })
  console.log(newStarWarsHeroes) // вывелся измененный массив

//   Задание 1.6
// Создайте массив с именами героев, у которых возраст больше 30 лет, преобразуйте каждое имя в верхний регистр и отфильтруйте имена, которые начинаются с буквы "A".

const megaSort = starWarsHeroes
.filter(hero => hero.age > 30)
.map(hero => hero.name.toUpperCase())
.filter(name => name.startsWith('A'))

console.log(megaSort)

// Задание 1.7
// Выведите на экран сообщение для каждого героя, указывающее на его статус джедая, и добавьте к каждому сообщению его возраст.
// Используйте тернарный оператор

const message = starWarsHeroes => {
    for (let hero of starWarsHeroes) {
      let jedi = hero.isJedi ? 'is a jedi' : 'is not a jedi'
      console.log(`${hero.name} ${jedi}. Age: ${hero.age}`)
    }
  }
  
  message(starWarsHeroes)
  
  starWarsHeroes.map(hero => {
    const person = hero.isJedi ? 'jedi' : 'not jedi'
    console.log(`${hero.name} is ${person}. Age: ${hero.age}`)
  })
