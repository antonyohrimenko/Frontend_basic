// Задание 3
// Напишите функцию sumNumbers, которая принимает на вход массив чисел и возвращает строку, в которой перечислены все числа из массива и их сумма. Используйте синтаксис function expression, цикл while, шаблонные строки.
// console.log(sumNumbers(numbers)); // Ожидаемый результат: "Числа: 1, 2, 3, 4, 5. Сумма: 15."

const sumNumbers = function (numbers) {

    let counter = 0; // счетчик
    let sum = 0; // тут храним сумму
    let resultString = "Числа: ";

    while (counter < numbers.length) {
        sum += numbers[counter];
        resultString += numbers[counter];
        if (counter < numbers.length - 1) {
            resultString += ", ";  // Добавляем запятую, если это не последнее число
        }
        counter++;
    }

    resultString += `. Сумма: ${sum}.`;
    return resultString;
}

const numbers = [55, 24, 124, 15, 2];
console.log(sumNumbers(numbers));

