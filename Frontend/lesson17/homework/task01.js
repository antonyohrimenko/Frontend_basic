// Задание 1
// Создайте метод getStudent, который возвращает promise - объекта (студент с именем "Anri" и возрастом 32), c задержкой 4 секунды.
// Вызовите этот метод - сохраните в переменную.
// Раскройте promise при помощи then, выведите имя студента.

function getStudent() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ name: 'Anri', age: 32 })
        }, 4000)
    })
}

getStudent().then(student => {
    console.log(`${student.name}, age: ${student.age}`)
})



