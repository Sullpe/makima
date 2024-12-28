//7.Написать функцию, которая на вход принимает массив и удаляет в нем все "ложные значения"
function removeFalseValues(array) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}
console.log(removeFalseValues([2, 3, 4, 0, '', NaN, null, undefined]));
