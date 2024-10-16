const text = document.querySelector('#fact-block')

async function getFact() {  // пишем ассинхронную функцию получения факта о кошке
    const response = await fetch('https://catfact.ninja/fact')  // отправляем запрос на "сервер"
    const data = await response.json()
    text.innerText = '❗️❓  ' + data.fact;
}

getFact()