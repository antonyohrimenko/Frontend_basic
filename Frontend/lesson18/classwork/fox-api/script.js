const image = document.querySelector('#fox-img')
const button = document.querySelector('#btn-changeImg')

// function getFox() {
//     button.innerText = 'Loading...'
//     fetch('https://randomfox.ca/floof/')
//         .then(response => response.json())
//         .then(data => {
//             image.src = data.image
//             button.innerText = 'Change image'
//         })
// }

async function getFox() {
    button.innerText = 'Loading...'
    const response = await fetch('https://randomfox.ca/floof/')
    const data = await response.json()
    image.src = data.image
    button.innerText = 'Change image'
}

getFox()

button.addEventListener('click', getFox)
