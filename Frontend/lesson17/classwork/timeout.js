// Ассинхронность и синхронность

// JS однопоточный язык
// например мы запрашиваем данныее с сервера и мы не знаем когда они прийдут



// синхронный код
console.log('hello!')

// асинхронный код (сделай действие по истечению какого-то кол-ва времени)
setTimeout(() => {
  console.log('Apple')
}, 0)



console.log('hello 2!')

// сначала выполнится весь синхронный код
// только после этого асинхронный

// * 1 setTimeout()
// принимает в себя стрелочную функцию и время через которое должно произойти действие в миллисекундах

setTimeout(() => {
  console.log('Mango')
}, 2000)

