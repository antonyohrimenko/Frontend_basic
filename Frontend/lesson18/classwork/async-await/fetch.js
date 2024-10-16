// fetch запрос
// с помощью fetch мы посылаем HTTP запросы на получение информации с сервера
// чтобы дождаться этой информации - нам придется обработать promise

// JSON
// JavaScript Object Notation
// используется для хранения информации в парах: ключ - значение

// API
// application programming interface
// интерфейс для взаимодействия с программой

// Делаем наш первый fetch запрос
// делаем запрос на внешний API
fetch('https://dog.ceo/api/breeds/image/random')
  .then(res => res.json()) // обрабатываем promise, к json применяем асинхронный метод json()
  .then(data => console.log(data)) //обрабатываем promise, забираем данные и выводим в консоль
