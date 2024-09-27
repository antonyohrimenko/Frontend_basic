// про способ объявления переменной var
// и почему не стоит ее использовать
helloWord('moon')

color += ' цвет'
console.log(color)

// * 1. вы можете случайно проинициализировать переменную с тем же самым названием и перезаписать значение

var human = 'John'
var human = 'Jack'

// использование let выдаст ошибку

console.log(human)

// * 2. Про hoisting (поднятии) переменной с var до ее определения js не укажет вам ошибку. вы будете использовать переменную и совершать с ней операции до ее инициализации
// переменная с  var до инициализации будет равна undefined

var color = 'blue'

console.log(color)

// * 3. Переменные с var - это глобальные переменные, которые 'видно' из других блоков кода, переменные с let и const внутри циклов и if / else инкапсулируются и вы не имеете к ним доступ.

function isAnimal() {
  if (true) {
    var lion = 'lion'
  }
  console.log(lion)
}

helloWord('sun')

isAnimal()

// Functions - функции
// Функции отличаются от процедур наличием возвращенного значения
// Функция без return возвращает undefined

// * 1. Объявление функции через function declaration
// функции объявленные этим способом поднимаются (hoisting) и могут быть использованы до инициализации

function helloWord(word) {
  console.log('hello', word)
  return 'hello ' + word + '! from function'
}

let returnedFromHello = helloWord('world')

// вызов функции - call
helloWord('javascript')

console.log(returnedFromHello)

function sum(a, b) {
  return a + b
}

console.log(sum(22, 18))

// не получится вызвать функция до ее объявления с function expression
// subtraction(40, 2)

// * 2 Function expression

const subtraction = function (a, b) {
  return a - b
}

console.log(subtraction(100, 1))

// функции могут принимать себя другие функции в качестве аргументов
// здесь три параметра: два числа и функция для них
// в возвращенном значении мы вызываем функцию-аргумент

function calculate(a, b, operation) {
  return operation(a, b)
}

let calcSubtraction = calculate(33, 3, subtraction)

console.log(calcSubtraction)

// создайте функцию helloEng (используйте function expression)
// в ней два параметра - firstName, lastName
// пусть она выведет в консоль фразу "Good day, <firstName> <lastName>"
// например HelloEng('Bilbo', 'Baggins) // 'Good day, Bilbo Baggins'

// создайте функцию helloTurkish (используйте function expression)
// в ней два параметра - firstName, lastName
// пусть она выведет в консоль фразу "Merhaba, <firstName> <lastName>"
// например HelloTurkish('Bilbo', 'Baggins) // 'Merhaba, Bilbo Baggins'

//создайте универсальную функцию universalHello(firstName, lastName, greetingFunction);
// universalHello('Jack', 'Shepard', HelloEng) // 'Good day, Jack Shepard'

const helloEng = function (firstName, lastName) {
  console.log('Good day, ' + firstName + ' ' + lastName)
}

helloEng('Luke', 'Skywalker')

const helloTurkish = function (firstName, lastName) {
  console.log('Merhaba, ' + firstName + ' ' + lastName)
}

helloTurkish('Luke', 'Skywalker')

// greetingFunction - по отношению к universalHello - это функция callback
// функция, вызываемая другой функцией

const universalHello = function (firstName, lastName, greetingFunction) {
  greetingFunction(firstName, lastName)
}

universalHello('Harry', 'Potter', helloEng)

// * Стрелочные функции
// arrow functions
// стрелочная функция без фигурных скобок - возвращает значение после '=>' и не требует return

const multiply = (a, b) => a * b

let multipliedValue = multiply(3, 3)

console.log(multipliedValue)

universalHello('Angela', 'Merkel', (firstName, secondName) =>
  console.log('Moin moin, ' + firstName + ' ' + secondName)
)

const cook = (ingrident1, ingridient2, cookingFunction) =>
  cookingFunction(ingrident1, ingridient2)

// cook('картофель', 'шампиньоны', (a, b) => console.log('Жарю ' + a + ' и ' + b))

// пример использования шаблонных строк
// способ напрямую вписывать внутри строки значения переменных или целые выражения
// нужно:

// 1. Поставить косые кавычки (backticks)
// 2. Написать в нужном месте значок доллара с фигурными скобками: ${}

cook('картофель', 'шампиньоны', (a, b) =>
  console.log(`Жарю ${a} и ${b} в шаблонных строках!`)
)

console.log(
  `Это тоже пример шаблонных строк: ${multipliedValue} - из multipliedValue`
)

console.log(`Value is ${99 + 1}`)
