const form = document.querySelector('#form')
const personList = document.querySelector('#person-list')
const clearBtn = document.querySelector('#clear')

// функция, которую мы добавляем по нажатию на элемент li
// она проверяет есть ли у элемента свойство textDecoration: line-through
// и если нет добавляет его

let deathList = []
function changeStatus(event) {
    console.log('click!')
    if (event.target.style.textDecoration === 'line-through') {
        event.target.style.textDecoration = 'none'
    } else {
        event.target.style.textDecoration = 'line-through'
    }
}

form.addEventListener('submit', event => {
    // обращаемся к событию через опциональный параметр event
    // убираем перезагрузку формы по умолчанию через метод preventDefault()
    event.preventDefault()

    // создаем объект person с произвольными ключами для удобства
    // в значении по ключам кладу данные из формы
    let person = {
        // получаем данные из полей ввода input
        // обращаемся к event => target => NAME OF INPUT => value
        name: event.target.nickname.value.toLowerCase(),
        place: event.target.location.value.toLowerCase()
    }
    if (deathList.includes(person.name)) {
        event.target.nickname.value = ''
        event.target.location.value = ''
        alert('He is already on the list 💀')
    } else {
        deathList.push(person.name)
        person.name = person.name.charAt(0).toUpperCase() + person.name.slice(1)
        person.place = person.place.charAt(0).toUpperCase() + person.place.slice(1)

        console.log(person)
        // создали элемент
        const listElement = document.createElement('li')
        // добавили текст
        listElement.textContent = `${person.name}, ${person.place}`
        // через свойство onclick добавляем слушатель событий по клику
        // функцию changeStatus прописали заранее
        listElement.onclick = changeStatus
        // добавили к родителю personList
        personList.appendChild(listElement)
        // console.log(personList)
        // console.dir(personList)
        // чистим поля в input после ввода
        event.target.nickname.value = ''
        event.target.location.value = ''
    }
})

// пишем функцию для удаления элементов
function clearList() {
    // пока в родительском элементе есть дети li
    while (personList.hasChildNodes()) {
        // удаляем первый элемент из родителя
        personList.firstChild.remove()
    }

    deathList = []
}
// добавляем событие на onCLick
clearBtn.onclick = clearList
