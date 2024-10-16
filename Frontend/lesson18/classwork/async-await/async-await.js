//* Асинхронность pt2

function getName() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Tom Cruise')
      }, 2000)
    })
  }
  
  console.log(getName())
  
  // getName().then(data => console.log(data))
  
  // Async / Await - аналог синтаксиса с цепочкой из .then и .catch
  // используется для обработки Promise
  
  // пишите ключевое слово async перед объявлением функции
  // await пишите перед получением асинхронных данных
  
  async function func() {
    const response = await getName()
    console.log(response + '  из async / await')
  }
  
  func()
  
  function getFiveVer1() {
    return new Promise(res => {
      res(5)
    })
  }
  
  function getSix() {
    return 6
  }
  
  getFiveVer1().then(response => console.log(response))
  
  console.log(getSix())
  