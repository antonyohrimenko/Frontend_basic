// * 1
// подумали про то, какие элементы будут интерактивными
// нашли их DOM методами и завели под них переменные
const minusBtn = document.querySelector('#counter__btn-minus')
const plusBtn = document.querySelector('#counter__btn-plus')
const counterValue = document.querySelector('#counter__value')

// * 2
// завели счетчик
let counter = 0

// * 3
// отдельно прописали функции обработчики (handlers)
const plusHandler = event => {
  // console.log(event)
  counter++
  counterValue.innerText = counter
}

const minusHandler = () => {
  counter--
  counterValue.innerText = counter
}

// * 4
// добавили на кнопки слушатель событий по клику
plusBtn.addEventListener('click', plusHandler)
minusBtn.addEventListener('click', minusHandler)

// чтобы подробно вывести информацию об элементе со всеми свойствами используйте вывод console.dir
// console.dir(minusBtn)
