const flowersContainer = document.querySelector('#flowersContainer')

async function getFlowers() {
  const res = await fetch(
    'https://dmitrii-kuvaldin.github.io/flowers-api/flowers.json'
  )
  const data = await res.json()
  // код в map() будет повторятся для каждого элемента массива из json
  data.map(flower => {
    // забираем данные и кладем их в переменные
    const { name, color, description, image } = flower
    // создаем контейнер и добавляем к нему класс
    const card = document.createElement('div')
    card.classList.add('flowerCard')
    // создаем заголовок карточки и добавляем текст
    const cardHeading = document.createElement('h3')
    cardHeading.textContent = name.charAt(0).toUpperCase() + name.slice(1)
    cardHeading.classList.add('flowerCard__heading')
    // создаем параграф и добавляем описание
    const cardDesc = document.createElement('p')
    cardDesc.textContent = description + `.`
    // создаем параграф и добавляем описание цвета + стилизуем
    const cardColor = document.createElement('p')
    cardColor.textContent = `Color: ${color}`
    cardColor.style = `color: ${color}`
    // создаем картинку и добавляем src с ее адресом + класс
    const cardImage = document.createElement('img')
    cardImage.src = image
    cardImage.classList.add('cardImg')
    // добавляем элементы карточки к самой карточке
    card.append(cardHeading, cardDesc, cardColor, cardImage)
    console.log(card)
    // добавляем карточку к контейнеру
    flowersContainer.append(card)
  })
}

getFlowers()
