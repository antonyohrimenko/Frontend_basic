// Задание 4
// У вас есть объект productInfo с информацией о продукте, включая его наименование, цену и наличие на складе. Напишите функцию printProductDetails, которая принимает этот объект в качестве аргумента и выводит в консоль сообщение вида: "<товар> - <цена>, товар на складе: <да/нет>", где "да" или "нет" зависит от наличия товара на складе.


// const productInfo = {
//   name: 'Smartphone',
//   price: 699,
//   'in stock': true
// };

// printProductDetails(productInfo); "Smartphone - $699, товар на складе: Да"

// Обьект с информацией о продукте

const productInfo = {
  name: 'Smartphone',
  price: 699,
  'in stock': true
};

const printProductDetails = function (productInfo) {
    const { name: productName, price, 'in stock': inStock } = productInfo
    let available
    if (inStock) {
      available = 'да'
    } else {
      available = 'нет'
    }
    return console.log(`${productName} - $${price}, товар на складе: ${available}`);
  }

  printProductDetails(productInfo);