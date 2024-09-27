// Примеры явного и неявного преобразования типов данных в JavaScript


// 1. Преобразование строки в число (Явное)
// javascript
// Копировать код
// let str = "42";
// let num = Number(str);
// console.log(num); 
// Явное преобразование из строки в число, тут все понятно


// 2. Преобразование строки в число (Неявное)
// javascript
// Копировать код
// let str = "42";
// let num = +str;
// console.log(num); 
// Неявное преобразование, потому что указали спец.символом +

// 3. Преобразование числа в строку (Явное)
// javascript
// Копировать код
// let num = 123;
// let str = String(num);
// console.log(str); 
// Явное преобразование из числа в строковый тип - все понятно. 

// 4. Преобразование числа в строку (Неявное)
// javascript
// Копировать код
// let num = 123;
// let str = num + "";
// console.log(str); 
// console.log(typeof str);
// Неявное преобразование на выходе будет 123 и тип будет строковый тк присутствует конкатенация

// 5. Преобразование логического значения в строку (Явное)
// javascript
// Копировать код
// let isTrue = true;
// let str = String(isTrue);
// console.log(str); 
// хз зачем это надо, но преобразовывает значение true в строковое написание true

// 6. Преобразование логического значения в строку (Неявное)
// javascript
// Копировать код
// let isTrue = true;
// let str = isTrue + "";
// console.log(str); 
// console.log(typeof str);
// Я думаю будет тип string и значение true

// 7. Преобразование массива в строку (Явное)
// javascript
// Копировать код
// let arr = [1, 2, 3];
// let str = String(arr);
// console.log(str); 
// будет просто строковое значение 1,2,3 и че с ним потом делать хз



// 8. Преобразование массива в строку (Неявное)
// javascript
// Копировать код
// let arr = [1, 2, 3];
// let str = arr + "";
// console.log(str); 
// тоже самое только не явно, тк имеется конкатенация со строкой


// 9. Преобразование undefined в строку (Явное)
// javascript
// Копировать код
// let value;
// let str = String(value);
// console.log(str); 
// Будет строковый тип и надпись undefined


// 10. Преобразование undefined в строку (Неявное)
// javascript
// Копировать код
// let value;
// let str = value + "";
// console.log(str); 
// Аналогично будет, также есть конкатенация со строковым типом







// 11. Преобразование объекта в строку (Явное)
// javascript
// Копировать код
// let obj = { a: 1 };
// let str = String(obj);
// console.log(str); 
// Будет строка со значениями object Object

// 12. Преобразование объекта в строку (Неявное)
// javascript
// Копировать код
// let obj = { a: 1 };
// let str = obj + "";
// console.log(str); 
// Аналогично но через конкатенацию со строковым типом

// 13. Преобразование логического значения в число (Явное)
// javascript
// Копировать код
// let isTrue = true;
// let num = Number(isTrue);
// console.log(num); 
// Выдаст единицу тк true это значение 1, false 0

// 14. Преобразование логического значения в число (Неявное)
// javascript
// Копировать код
// let isTrue = true;
// let num = +isTrue;
// console.log(num); 
// Выдаст единицу тк true это значение 1, false 0



// 15. Преобразование числа в логическое значение (Явное)
// javascript
// Копировать код
// let num = 1;
// let isTrue = Boolean(num);
// console.log(isTrue); 
// выдаст True

// 16. Преобразование числа в логическое значение (Неявное)
// javascript
// Копировать код
// let num = 1;
// let isTrue = !!num;
// console.log(isTrue);
// Выдаст true, потому что один раз !переворачивает true в false, а затем false еще раз в true



// 17. Преобразование null в строку (Явное)
// javascript
// Копировать код
// let value = null;
// let str = String(value);
// console.log(str); 
// Выведет null 

// 18. Преобразование null в строку (Неявное)
// javascript
// Копировать код
// let value = null;
// let str = value + "";
// console.log(str); 
// Аналогично через конкатенацию со строковым типом



// 19. Преобразование NaN в строку (Явное)
// javascript
// Копировать код
// let value = NaN;
// let str = String(value);
// console.log(str); 
// Выдаст NaN на экран и тип строковый

// 20. Преобразование NaN в строку (Неявное)
// javascript
// Копировать код
// let value = NaN;
// let str = value + "";
// console.log(str); 
// Аналогично через конкатенацию со строковым типом
