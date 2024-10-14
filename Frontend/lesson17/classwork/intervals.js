// * 2 setInterval()

// через setInterval мы можем задать действие для многократного повторения
// мы передаем первым параметром стрелочную функцию, вторым - время через которое будет происходить действие

// ! чтобы иметь возможность остановить интервал его кладут в переменную и после используют clearInterval()
const interval = setInterval(() => {
    console.log('Tick!')
  }, 3000)
  
  // останавливаем интервал через 10 секунд
  setTimeout(() => {
    // чтобы остановить interval передаем его аргументом в clearInterval()
    clearInterval(interval)
  }, 10000)
  
  
  // setInterval() и setTimeout() называют макрозадачами
  