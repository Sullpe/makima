//8.Написать функцию, которая на вход принимает массив, состоящий из двух строк. Функция должна вернуть true,
// если строка в первом элементе массива содержит все буквы строки во втором элементе массива (регистр игнорируется).
function stringContainsAllLetters(arr) {
    const str1 = arr[0].toLowerCase();
    const str2 = arr[1].toLowerCase();
    for (let char of str2) {
        if (!str1.includes(char)) {
            return false;
        }
    }
    return true;
}
console.log(stringContainsAllLetters(['Когда что-то заканчивается, что-то обязательно начинается', 'начинается']));
