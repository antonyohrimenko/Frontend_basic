const containerFilmList = document.getElementById('containerFilmList')

async function getFilmList() {
    const res = await fetch(
        'https://antonyohrimenko.github.io/fakeapi/films.json'
    )
    const data = await res.json()
    data.map(film => {
        const { title, desc, year, img, actors } = film
        const filmCard = document.createElement('section')
        filmCard.classList.add('filmCard')
        const cardTitle = document.createElement('h3')
        cardTitle.textContent = `${title}. ${year} year.`
        const cardDesc = document.createElement('p')
        cardDesc.textContent = desc
        const cardCast = document.createElement('ul')
        actors.map(actor => {
            const li = document.createElement('li')
            li.textContent = actor
            cardCast.append(li)
        })
        const cardImg = document.createElement('img')
        cardImg.src = img
        filmCard.append(cardTitle, cardDesc, cardCast, cardImg)
        containerFilmList.append(filmCard)
    })
}

getFilmList()
