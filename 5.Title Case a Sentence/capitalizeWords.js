//5.Написать функцию, которая на вход принимает строку и возвращает эту строку в формате: каждое слово начинается с заглавной буквы, остальные в нижнем регистре
function capitalizeWords(str) {
    return str.split(' ')
        .map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(' ');
}
console.log(capitalizeWords('когда что-то заканчивается'));
