//2.Написать функцию, которая на вход принимает строку и возвращает длину самого длинного слова в этой строке
function longestWordLength(str) {
    const words = str.split('');
    let maxLength = 0;
    for (const word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }
    return maxLength;
}
console.log(longestWordLength);
