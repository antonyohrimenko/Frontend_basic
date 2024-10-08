// * push() - добавление в конец
// * pop() - удаление из конца
// * shift() - удаление из начала
// * unshift() - добавление в начало

// * sort() - мутирующий, сортировка массива, чтобы сортировать числа корректно нужна функция сортировки
// по умолчанию числа сортирует как строки

// * forEach() - производит заданные операции с каждым элементом массива, мутирует
// * map() - производит заданные операции с каждым элементом массива, не мутирует

// * filter() - возвращает массив элементов, удовлетворяющих условию
// * find() - возвращает первый  элемент удовлетворяющий условию

// * reverse()
// * slice()
// * splice()
// * join()

// * split()
// * toUpperCase()
// * toLowerCase()

// * charAt() - принимает в себя индекс нужного элемента
// хорошо подходит для того чтобы сделать букву слова заглавной

// * concat() - не мутирующий
// принимает один или несколько массивов - возвращает объединенный массив

// * findIndex() - метод массивов, не мутирующий,
// возвращает индекс найденного по условию элемента
// если не находит вернет -1 - будьте осторожны и не измените последний элемент

// * includes()
// не мутирующий
// принимает значение и ищет его в массиве
// возвращает булевое значение

// * replace()
// метод только для строк
// находит первое вхождение подстроки и изменяет ее
// принимает два аргумента: то что ищет, и то на что

// * Наследование в JS

// прототипное наследование нативное для js
// пример прототипного наследования

const bicycle = {
    brand: 'Bergamot',
    price: 2000,
    drive() {
      console.log('Driving bicycle ... 🚴🏻‍♂️')
    }
  }
  
  // на основании bicycle мы создали mountainBike
  const mountainBike = {
    __proto__: bicycle, //прототипом для горного велосипеда у нас является bicycle
    price: 300,
    speeds: 7
  }
  
  console.log(bicycle.price)
  bicycle.drive()
  
  mountainBike.drive()
  
  console.log(mountainBike.price)
  
  /// создайте объект vehicle с полями:
  
  // - speed значение 40
  // - capacity значение 4
  // - и методом go() который выводит в консоль "Br-br-br-br!"
  
  // создайте на основе:
  
  // jeep() - со вместимостью 5, скорость 60
  // numberOfDoors() - 2
  
  // вызовите метод go() у jeep
  
  const vehicle = {
    speed: 40,
    capacity: 4,
    go() {
      console.log('Br-br-br-br!')
    },
    accelerate() {
      this.speed += 5
    },
    stop() {
      this.speed = 0
    }
  }
  
  const jeep = {
    __proto__: vehicle,
    speed: 60,
    capacity: 5,
    numberOfDoors: 2
  }
  
  jeep.accelerate()
  jeep.accelerate()
  jeep.accelerate()
  console.log(jeep.speed)
  
  // классовое наследование
  // синтаксический сахар для прототипов
  
  // мы создаем класс
  class Animal {
    constructor(age, name, color) {
      this.age = age
      this.name = name
      this.color = color
    }
    info() {
      console.log(`Меня зовут ${this.name}. Я цвета: ${this.color}`)
      return 'ну вот и все, ребята!'
    }
  }
  
  // создаем экземпляр класса Animal
  const monkey = new Animal(7, 'Цезарь', 'Monkey color')
  
  monkey.info()
  const reindeer = new Animal(10, 'Bamby', 'white')
  console.log(reindeer.name)
  reindeer.info()
  
  // inheritance - отношение между классами
  // extends - способ наследования
  
  class Panda extends Animal {
    constructor(age, name, color, weight) {
      // super отвечает за наследование от конструктора родителя
      super(age, name, color)
      this.weight = weight
    }
    sleep() {
      console.log('Z-z-z-z-z')
    }
    eat() {
      this.weight += 1
    }
  }
  
  // мы передаем в экземпляр класса свойства в том же порядке, в котором передавали их в конструктор
  const po = new Panda(5, 'Po', 'Black and white', 50)
  
  po.eat()
  po.eat()
  po.eat()
  
  console.log(po.weight)
  
  // создадим класс Alcohol с полями:
  
  // - название title
  // - крепость strength
  // - объем volume
  
  // метод drink() выводит в консоль "Приятно выпить <имя напитка>"
  
  // производный класс Cognac:
  // с полями:
  // age - возраст
  // country - страна
  
  // создадим производный класс Martini с полями:
  // sugarAmount - содержание сахара (числом)
  
  // создайте на основе этих двух классов: мартини, коньяк
  
  // у Alcohol добавьте reduce(), который уменьшает volume на 1
  
  class Alcohol {
    constructor(title, strength, volume) {
      this.title = title
      this.strength = strength
      this.volume = volume
    }
    drink() {
      console.log(`Приятно выпить ${this.title}`)
    }
    reduce() {
      this.volume -= 0.1
    }
  }
  
  class Cognac extends Alcohol {
    constructor(age, country, title, strength, volume) {
      super(title, strength, volume)
      this.age = age
      this.country = country
    }
  }
  
  class Martini extends Alcohol {
    constructor(sugarAmount, title, strength, volume) {
      super(title, strength, volume)
      this.sugarAmount = sugarAmount
    }
  }
  
  const ararat = new Cognac(8, 'Armenia', 'Ararat', 40, 0.7)
  const bianco = new Martini(5, 'Bianco', 15, 0.7)
  
  ararat.drink()
  
  bianco.reduce()
  
  console.log(bianco.volume)
  
  
  
  