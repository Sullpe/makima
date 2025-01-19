//6. Написать функцию, которая на вход принимает два массива и целое число n.
// Функция должна скопировать каждый элемент первого массива во второй по порядку начиная с индекса n второго массива и
// вернуть полученный массив.
// Входные массивы не должны изменяться. (например: при входных данных  ([1, 2, 3], [4, 5], 1) должно вернуться [4, 1, 2, 3, 5].
function mergeArrays(arr1, arr2, n) {
    const array = [...arr2];
    for (let i = 0; i < arr1.length; i++) {
        array.splice(n + i, 0, arr1[i]);
    }
    return array;
}
console.log(mergeArrays([1, 2, 3], [4, 5], 1));
