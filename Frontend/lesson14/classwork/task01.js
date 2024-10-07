// напишите функцию, которая принимает массив элементов и элемент, который нужно удалить из массива
// функция должна вернуть массив без удаленного элемента
// подумайте про то, чтобы если такого элемента в массиве нет - функция работала корректно

const fruits = ['Pear', 'Orange', 'Melone', 'Peach'];

function deleteElementFromArray(arr, el) {
    const index = arr.findIndex(name => name === el)
    if (index !== -1) {
      arr.splice(index, 1)
      return arr
    }
    console.log('No such element in array :(')
    return arr
  }

  console.log(deleteElementFromArray(fruits, 'Orange'))

