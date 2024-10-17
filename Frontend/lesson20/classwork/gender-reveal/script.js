const genderForm = document.getElementById('genderForm')
const answer = document.getElementById('answer')

genderForm.addEventListener('submit', event => {
  event.preventDefault()
  const nickname = event.target.nickname.value
  console.log('nickname ===>>', nickname)
  event.target.nickname.value = ''
  // мы передаем fetch запрос с параметром name и со значением из переменной nickname
  fetch(`https://api.genderize.io/?name=${nickname}`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    // достаем данные из деструктуризации
    let {name, gender, probability} = data
    // заводим динамическую переменную через тернарный оператор
    let emoji = gender === 'male' ? '👨‍🦰' : '👩'
    // реализуем форматирование текста в нижнем регистре + большая первая буква
    name = name.toLowerCase()
    name = name.charAt(0).toUpperCase() + name.slice(1)
    // выводим ответ в шаблонной строке
    answer.textContent = `${emoji} Name: ${name}, gender: ${gender}. Probability: ${probability}`
  })
})
