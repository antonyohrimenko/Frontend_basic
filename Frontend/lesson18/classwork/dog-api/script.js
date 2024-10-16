// объявили переменные и присвоили ссылку на элементы
const content = document.querySelector('#content')

// делаем fetch запрос на получение данных
fetch('https://dog.ceo/api/breeds/image/random')
  // обрабатываем данные через метод json()
  .then(res => res.json())
  // результат json() обрабатываем во втором then()
  .then(data => {
    // создание картинки через createElement()
    const img = document.createElement('img')
    // если картинка не загрузится - мы увидим этот текст
    img.alt = 'dog image'
    // адрес картинки
    img.src = data.message
    // добавляем класс для стилизации
    img.classList.add('dog-img')
    // добавляем картинку к контейнеру
    content.append(img)
  })
