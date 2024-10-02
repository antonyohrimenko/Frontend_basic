// * Методы массивов

// мы уже знаем методы добавления / удаления элементов:

// push() - мутирующий, добавляет элемент в конец массива, возвращает длину нового массива
// unshift() - мутирующий, добавляет элемент в начало массива, возвращает длину нового массива
// pop() - мутирующий, удаляет элемент из конца массива, возвращает удаленный элемент
// shift() - мутирующий, удаляет элемент из начала массива, возвращает удаленный элемент

const brothers = [
    { name: 'Legolas', height: 190, race: 'elf', age: 500, hasMagic: true },
    { name: 'Aragorn', height: 180, race: 'human', age: 50, hasMagic: false },
    { name: 'Ghimli', height: 50, race: 'dwarf', age: 200, hasMagic: false },
    { name: 'Gendalf', height: 200, race: 'mayar', age: 2000, hasMagic: true },
    { name: 'Frodo', height: 60, race: 'hobbit', age: 30, hasMagic: false }
  ]
  
  let sam = { name: 'Sam', height: 62, race: 'hobbit', age: 29, hasMagic: false }
  
  brothers.unshift(sam)
  
  console.log(brothers)
  
  // * метод map()
  
  // метод нужен для создания нового массива на основании исходного массива
  
  // создать массив из имен наших героев
  
  const names = brothers.map(brother => brother.name) // [ 'Sam', 'Legolas', 'Aragorn', 'Ghimli', 'Gendalf', 'Frodo' ]
  
  // 1. создать массив из возрастов
  
  const ages = brothers.map(el => el.age)
  
  console.log(names)
  console.log(ages)
  
  // 2. новый массив с рассой и именем
  
  const namesAndRace = brothers.map(brother => brother.race + ' ' + brother.name)
  console.log(namesAndRace)
  
  // 3.  новый массив с объектами, но только с избранными ключами / значениями
  
  const NamesAndRaceObject = brothers.map(el => ({
    name: el.name,
    race: el.race
  }))
  
  console.log(NamesAndRaceObject)
  
  // 4. массив только высоких братьев
  
  const tallBrothers = []
  
  brothers.map(brother => {
    if (brother.height >= 170) {
      tallBrothers.push(brother)
    }
  })
  
  console.log(tallBrothers)
  
  // 5. массив строк 'Big' / 'Small' - соответствующих каждому брату
  
  const sizes = brothers.map(brother => {
    if (brother.height >= 170) {
      return 'Big'
    }
    return 'Small'
  })
  
  console.log(sizes)
  
  // 5.1 та же задача, красиво в одну строчку через тернарный оператор
  
  const sizes1 = brothers.map(brother =>
    brother.height >= 170 ? 'Большой' : 'Маленький'
  )
  
  console.log(sizes1)
  
  // * forEach
  
  // мутирующий метод, мы можем изменять элементы исходного массива
  // также как и map() принимает в себя стрелочную функцию
  // возвращенное значение - undefined, будьте осторожны и не присвойте его новому массиву случайно...
  
  // можем состарить братьев на 1 год
  
  brothers.forEach(brother => (brother.age += 1))
  
  // перезаписали имена братьев в верхнем регистре с помощью метода строк toUpperCase()
  
  brothers.forEach(brother => (brother.name = brother.name.toUpperCase()))
  
  console.log(brothers)
  
  // * filter()
  
  // не мутирующий метод (создает новый массив)
  // возвращает массив элементов удовлетворяющих одному или нескольким условиям
  
  console.log(brothers.filter(el => el.age > 100))
  
  console.log(brothers.filter(el => el.age > 100 && el.hasMagic === true))
  
  // вам всегда вернется массив, даже если удовлетворительный элемент один
  
  console.log(brothers.filter(el => el.age > 1000))
  
  // если нет таких элементов вернется пустой массив
  
  // * find()
  
  // не мутирующий метод
  // возвращает первый элемент, удовлетворяющий условию
  
  const human = brothers.find(el => el.race === 'human')
  
  const firstWithoutMagic = brothers.find(el => el.hasMagic === false)
  
  // console.log(human)
  
  console.log(firstWithoutMagic)
  
  // * reduce()
  // не мутирующий, возвращает новый массив
  // принимает стрелочную функцию и начальное значение переменной
  
  // допустим мы хотим получить сумму возрастов всех героев
  
  let sum = 0
  
  for (let i = 0; i < ages.length; i++) {
    sum += ages[i]
  }
  
  console.log(sum)
  
  const sum2 = ages.reduce((acc, current) => acc + current, 3000)
  
  console.log(sum2)
  
  // вы можете вызывать методы по цепочке
  // применять их друг за дружкой
  
  const namesStr = brothers
    // здесь мы создаем массив имен братьев
    .map(el => el.name)
    // а здесь с новым массивом проводим конкатенацию элементов строк
    .reduce((acc, name) => acc + name + ', ', 'Brotherhood:  ')
  
  console.log(namesStr)
  