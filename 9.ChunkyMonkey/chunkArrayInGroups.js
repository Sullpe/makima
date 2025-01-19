//9.Написать функцию, которая на вход принимает масссив и целое число.
// Функция должна разбить массив (первый аргумент) на группы длиной size (второй агрумент) и вернуть их в виде двумерного массива. 
function chunkArrayInGroups(array, n) {
    let arr = [];
    for (let i = 0; i < array.length; i += n) {
        let someArray = array.slice(i, i + n);
        arr.push(someArray);
    }
    return arr;
}
console.log(chunkArrayInGroups([1, 2, 3, 4, 5], 3));
