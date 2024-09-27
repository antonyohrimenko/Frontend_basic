
const helloEng = function (firstName, lastName) {
    return console.log('Good day,', firstName + " " + lastName);
}

helloEng('Bilbo', 'Baggins');

const helloTurkish = function (firstName, lastName) {
    return console.log('Mahraba,', firstName + " " + lastName);
}


// функцию, которую мы вызываем из другой функции называется callback функцией
const universalHello = function (firstName, lastName, greetingFunction) {
 greetingFunction(firstName, lastName); 
} 

universalHello('Jack', 'Salam', helloTurkish);