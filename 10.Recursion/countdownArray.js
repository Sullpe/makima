//10.Используя рекурсию (без использования циклов).
// Написать функцию, которая принимает массив и целое число (n) и заполняет массив числами от n до 1
function countdownArray(array, n) {
    if (n <= 0) {
        return array;
    }
    array.push(n);
    return countdownArray(array, n - 1);
}
console.log(countdownArray([], 6));
