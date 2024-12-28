//3.Написать функцию, которая на вход принимает массив, состоящий из массивов целых чисел
// (например: [[1, 2, 3], [4, 5], [6, 7, 8, 9]]) и возвращает массив состоящий
// из наибольшего числа каждого предоставленного подмассива.
function maxNumbersArray(array) {
    let arr = [];
    array.forEach(element => {
        let maxNumber = element[0];
        for (let i = 1; i < element.length; i++) {
            if (element[i] > maxNumber) {
                maxNumber = element[i];
            }
        }
        arr.push(maxNumber);
    });
    return arr;
}
console.log(maxNumbersArray([[1, 2, 3], [4, 5], [6, 7, 8, 9]]));
