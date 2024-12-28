//1.Написать функцию, которая на вход принимает целое число и возвращает факториал этого числа
function factorial(n) {
    if (n < 2) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
let num = prompt('Введите число:');
console.log(factorial(num));