// заводим константу для инпут поля и для листа

const form = document.querySelector('#form')
const taskList = document.querySelector('#task-list')
const clear = document.querySelector('#clear')


form.addEventListener('submit', event => {
    event.preventDefault()

    // создаем объект tasks с произвольными ключами для удобства
    // в значении по ключам кладу данные из формы
    let tasks = {
        // получаем данные из полей ввода input
        // обращаемся к event => target => NAME OF INPUT => value
        name: event.target.task.value.toLowerCase(),
    }

    // создали элемент
    const listElement = document.createElement('li')
    // добавили текст
    listElement.textContent = `${tasks.name}`
    listElement.onclick = changeStatus
    taskList.appendChild(listElement)
    event.target.task.value = ''
}
)

// из за того, что прямое обращение к стилям имеет наивысший приоритет
// я создал отдельный класс, чтобы у нас после нажатия не пропадал hover
// но тут есть вопросы к корректности работы

function changeStatus(event) {
    const element = event.target;

    // Если элемент уже зачеркнут, убираем класс "completed"
    if (element.classList.contains('completed')) {
        element.classList.remove('completed');

        // Отключаем hover временно, чтобы увидеть результат немного с костылями
        element.style.pointerEvents = 'none';
        setTimeout(() => {
            element.style.pointerEvents = 'auto'; // Включаем hover снова через 200 мс
        }, 200);
    } else {
        // Если элемент не зачеркнут, добавляем класс "completed"
        element.classList.add('completed');
    }
}

// пишем функцию для удаления элементов
function clearList() {
    // пока в родительском элементе есть дети li
    while (taskList.hasChildNodes()) {
        // удаляем первый элемент из родителя
        taskList.firstChild.remove()
    }
}
// добавляем событие на onCLick кнопке
clear.addEventListener('click', event => {
    clearList();
})


