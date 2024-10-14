// Promise - обещание
// обещание, что мы получим данные

function getSix() {
    setTimeout(() => {
      return 6
    }, 3000)
  }
  
  let x = getSix()
  // console.log(x) // undefined синхронный код сработает раньше асинхронного
  
  function getSeven() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(17)
      }, 3000)
    })
  }
  
  const promise = getSeven()
  //console.log(promise)
  
  // * специальный вид объектов Promise - ответ на результат асинхронного запроса
  
  // может находится в трех состояниях =>
  
  // <Pending> - ожидание
  // <Fulfilled> - успех
  // <Rejected> - отказ
  
  // console.log(promise)
  
  // * как мы обрабатываем полученный Promise =>
  
  // console.log(promise) - так сделать не получится, мы получим в ответ <pending> - ожидание
  
  // успешный случай из Promise мы обрабатываем с помощью метода then()
  
  // promise.then(data => {
  //   console.log('наконец-то наши данные!')
  //   console.log(data)
  // })
  
  // пример Promise с обработчиком ошибки
  
  function getAgeOfUser(username) {
    return new Promise((resolve, reject) => {
      if (username === 'John') {
        setTimeout(() => {
          resolve(`Age of ${username} is 18!`)
        }, 2000)
      } else {
        setTimeout(() => {
          reject(new Error(`Wrong username: ${username}! Access denied!`))
        }, 4000)
      }
    })
  }
  
  getAgeOfUser('John')
    .then(data => console.log(data))
    .catch(error => console.log(error))
  
  // создайте функцию, которая принимает на вход данные
  // и возвращает строку с определением четное число или нет
  
  // положительный ответ должен придти 5 сек
  // ошибка через 3 сек
  
  // если это четное число она нам вернет строку "<num> - четное число!"
  // если это нечетно число  - "<num> - нечетное число!"
  // а если это не число, то вернет ошибку "Ошибка! функция принимает только числа"
  
  let y = '9'
  
  // проверка число или нет
  console.log(typeof y !== 'number')
  
  function checkIsNumber(input) {
    return new Promise((resolve, reject) => {
      if (typeof input !== 'number') {
        setTimeout(() => {
          reject('Ошибка! функция принимает только числа')
        }, 3000)
      } else {
        setTimeout(() => {
          if (input % 2 === 0) {
            resolve(`${input} - четное число!`)
          } else {
            resolve(`${input} - нечетное число!`)
          }
        }, 5000)
      }
    })
  }
  
  checkIsNumber('hh')
    .then(data => console.log(data))
    .catch(error => console.log(error))
  