// если это четное число она нам вернет строку "<num> - четное число!"
  // если это нечетно число  - "<num> - нечетное число!"
  // а если это не число, то вернет ошибку "Ошибка! функция принимает только числа"


function checkIsNumber(number) {
    return new Promise((resolve, reject) => {
        if (typeof number !== 'number'){
            setTimeout(() => {
                reject('Ошибка! функция принимает только числа')
              }, 1000)
        }
        else {
            if (number %  2 === 0){
                setTimeout(() => {
                    resolve(`${number} - ЧЕТНОЕ число`)
                  }, 1000)
            }
            else {
                setTimeout(() => {
                    resolve(`${number} - НЕ ЧЕТНОЕ число`)
                  }, 1000)
            }
        }
    })  
}

checkIsNumber(5)
    .then(data => console.log(data))
    .catch(error => console.log(error))