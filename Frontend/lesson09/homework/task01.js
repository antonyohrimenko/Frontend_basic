// Homework
// Задание 1
// Создайте массив с элементами: "Мария", "Алексей", "Елена", "Дмитрий". Создайте массив с возрастами: 22, 31, 45, 53. Создайте новый массив, заполнив его элементами в формате "имя возраст лет/годов".

const names = ['Мария', 'Алексей', 'Елена', 'Дмитрий'];
const ages = [22, 31, 45, 53];
const result = [];

for (let i = 0; i < names.length; i++) {
    result[i] = names[i] + " " + ages[i] + " год(а) / лет";
}

console.log(Array(result));