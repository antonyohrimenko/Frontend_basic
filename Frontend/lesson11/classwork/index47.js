// Обьекты (!!!) - лекция группы 47 
// Ссылочный тип данных, данные хранятся в формате ключ: значение
// индекс отсутствует (!!)


// ключи обьектов это строковые значения

const person1 = {
    name: 'John',
    lastName: 'Johnson',
    age: 40,
    isAdult: true,
    isMarried: false,
    siblings: ['Emma', 'Ron', 'Ethan']
}

const person2 = {
    name: 'Emma',
    lastName: 'Johnson',
    age: 43,
    isAdult: true,
    isMarried: true,
    siblings: ['John', 'Ron', 'Ethan']
}

// обычно при работе над обьектами мы складываем их в массивы
// const family = [person1, person2];
// console.log(family);

// console.log(person1);


// обращаемся к полям обьекта

// обращаемся к значению обьекта через точку
console.log(person2.name, person2.lastName);

// пример деструктуризации обьекта
// в одно действие мы забираем обьекты по ключам, обьявляем переменные
// с названиями равными ключам (совпадающими с именами этих ключей). Присваиваем
// значения в эти новые переменные. Разбиваем обьект на кусочки и кусочки кладем
// сразу в одельные переменные

const name1 = person2.name; // пример без дуструктуризации

const { name2, lastName, age2, isAdult, isMarried2, siblings } = person2;
// и теперь в этих переменных будут храниться значения всех ключей


// поработаем с массивом
const family = [person1, person2];
console.log(family);

for (let i = 0; i < family.length; i++) {
    console.log(family[i].name);
}



// Objects лекция 41 группы идеальная (!!!!!)

// объект ссылочный тип данных
// в нем хранятся данные в формате: ключ и значение
// ключи объекта это строковые значения

//два на вид одинаковых объекта будут не равны, потому что это разные ссылки

const user = {
    name: 'John',
    age: 30,
    isMarried: false
  }
  
  const user1 = {
    name: 'John',
    age: 30,
    isMarried: false,
    'has dog': true
  }
  
  console.log(user === user1) // false
  // но мы можем сравнивать значения этих объектов
  console.log(user.name === user.name) // true
  
  // * Способы обращения к ключам объекта в js
  
  // 1. Классический через точку '.'
  
  // обратились через точку и переписали значения
  user.name = 'Ethan'
  
  console.log(user)
  console.log(user1)
  
  // 2. Через квадратные скобки, если ключ состоит из двух слов
  
  console.log(user1['has dog']) // обращение к ключу объекта из нескольких слов с пробелом
  
  // но так лучше не делать, читабельность кода хуже
  
  // 3. Через квадратные скобки, если значение для ключа лежит в переменной
  
  const key = 'firstName'
  
  const client = {
    firstName: 'Frank',
    role: 'admin'
  }
  
  console.log(client[key])
  
  // мы можем создавать в одну строку объекты, ключами которых будут имена переменных
  
  // const name = 'Bilbo'
  // const hasRing = false
  
  // в одну строку добавляем ключи и значения
  // const hobbit = { name, hasRing }
  
  // hobbit.city = 'Shire'
  
  // console.log(hobbit)
  
  // при деструктуризации объекта мы извлекаем его значения по ключам
  // и присваиваем эти значения соответствующим переменным
  
  const { age, isMarried } = user
  
  // console.log(dog)
  
  console.log(
    `Это возраст нашего юзера: ${age}, а это его семейное положение: ${isMarried}`
  )
  
  const aragorn = {
    name: 'Aragorn',
    race: 'human',
    hasRing: false,
    age: 40
  }
  
  const { name, race } = aragorn
  
  console.log(name, race)
  
  // Метод внутри объекта
  
  const dog = {
    name: 'Bobik',
    bark() {
      console.log('Woof-woof!')
    }
  }
  
  // bark() - это метод объекта dog
  dog.bark()
  
  console.log(dog.hasTail)
  
  const data = undefined
  
  // если обратиться к ключу от undefined код ляжет
  // но фреймворки, например, React предполагают что вы можете так сделать, ожидая undefined
  // для этого для безопасного обращения напишите знак вопроса перед точкой
  // это позволит вам не упасть в ошибку
  
  console.log(data?.role)
  
  // метод объекта Object.keys() дает нам массив из ключей объекта
  // объект мы передаем параметром
  
  const dogKeys = Object.keys(dog)
  const aragornKeys = Object.keys(aragorn)
  
  console.log(dogKeys)
  console.log(aragornKeys)
  
  // Object.values() дает нам массив ключей из объекта
  // можете использовать его для того чтобы превратить объект в массив, если вам не важно сохранить ключи
  
  const dogValues = Object.values(dog)
  const aragornValues = Object.values(aragorn)
  
  console.log(dogValues)
  console.log(aragornValues)
  