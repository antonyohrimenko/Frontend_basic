// Задание 1
// Создайте стрелочную функцию, которая бы принимала массив и цифру, 
// возвращала бы элемент массива под этим индексом. 
// Если такого индекса нет в массиве - выведите в консоль "No such index in array"


const value = (array, index) => {
    if (array[index] == undefined){
        console.log("No such index in array");
    }
    return array[index];
}

console.log(value(['Маша', 99, 'Петя', 54], 2)); // даем массив, указываем по какому индексу хотим значние