//1.Написать функцию, которая принимает на вход массив из двух чисел и возвращает сумму этих двух чисел плюс сумму всех чисел между ними. 
// Наименьшее число не всегда будет на первом месте. (Например sumAll([4, 1]) должен возвращать 10)
function sumAll(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}
// console.log(sumAll([4, 1]));


//2.Написать функцию, которая на вход принимает два массива и возвращает новый массив с элементами найденными только в одном массиве, но не в обоих.
function diffArrays(arr1, arr2) {
    const array1 = arr1.filter(item => !arr2.includes(item));
    const array2 = arr2.filter(item => !arr1.includes(item));
    return [...array1, ...array2];
}
//console.log(diffArrays([1, 2, 3], [2, 3, 4]));
    
    
//3.Написать функцию, которая на вход принимает массив и еще один или несколько аргументов (точное количество не известно). 
 // Удалить из массива все элементы, которые имеют то же значение, что и эти аргументы   
 function removeElements(arr, ...args) {
    return arr.filter(item => !args.includes(item));
}
//console.log(removeElements([1, 2, 3, 4, 5], 3, 5));
    

// 4.Создайте функцию, которая просматривает массив объектов (первый аргумент) и возвращает массив всех объектов, имеющих совпадающие пары имя и значение (второй аргумент). 
// Например: whatisinAName([[{ "apple": 1, "bat": 2), ("apple": 1). ("apple": 1, "bat": 2, "cookie": 2}, ["bat":2}], ["apple": 1, "bat": 2}) должен вернуться [[ "apple": 1, "bat": 2). ("apple": 1, "bat": 2, "cookie":2]]
function whatIsAName(array, object) {
    return array.filter(obj => {
        for (const key in object) {
            if (!obj.hasOwnProperty(key) || obj[key] !== object[key]) {
                return false;
            }
        }
        return true;
    });
}
//console.log(whatIsAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 }));


// 5.Написать функцию, которая конвертирует строку в spinal-case регистр.
function spinalCase(str) {
    return str.split(' ').join('-')
}
//console.log(spinalCase("туннель в лето выход прощаний"));


// 6.Написать функцию, которая осуществляет поиск и замену в предложении. 
// Первый аргумент это строка, в которой осуществляется поиск и замена. 
// Второй аргумент это слово, которое нужно заменить, третий аргумент слово, на которое нужно заменить. 
// При замене сохраняйте регистр первого символа в исходном слове.
function searchAndReplace(string, change, toChange) {
    let arr = string.split(' ');
    for (let element of arr) {
        if (element.toLowerCase() === change.toLowerCase()) {
            if (change[0].toLowerCase() !== change[0]) {
                toChange = toChange[0].toUpperCase() + toChange.slice(1);
            } else toChange = toChange.toLowerCase();
            arr[arr.indexOf(element)] = toChange;
        };
    }
    return arr.join(' ');
}
//console.log(searchAndReplace("туннель в лето выход прощаний", "туннель", "дорога"));


// 7.Написать функцию, которая на вход принимает последовательность букв и ищет пропущенные буквы. 
// Если все буквы присутствуют в диапазоне, то возвращается undefined. Например: fearNotLetter("abce") должна вернуть "d"
function fearNotLetter(str) {
    const start = str.charCodeAt(0);
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) !== start + i) {
            return String.fromCharCode(start + i);
        }
    }
    return undefined;
}
//console.log(fearNotLetter("абвд"));


// 8.Написать функцию, которая принимает два или более массивов и возвращает новый массив уникальных значений. 
// Значения должны быть отсортированы по их первоначальному порядку.
function uniqueArray(...arrays) {
    return [...new Set(arrays.flat())];
}
//console.log(uniqueArray([1, 2], [2, 3, 4], [3, 4, 5]));


// 9.Написать функцию, которая заменяет символы &. <, >, "(двойные кавычки), и (апостроф) в строке их соответствующим НTML кодом.
function changeSymbols(string) {
    return string
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lsaquo;")
        .replace(/>/g, "&rsaquo;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}
//console.log(changeSymbols("туннель' <в лето &выход> прощаний"));


// 10.Написать функцию, которая суммирует все простые числа до п (аргумент функции)
function sumPrime(n) {
    let sum = 0;
    nextPrime: for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        sum += i;
    }
    return sum;
}
//console.log(sumPrime(20));


// 11.Написать функцию, которая принимает массив и функцию и удаляет каждый элемент массива начиная с первого, 
// пока функция не вернет true, а затем возвращает оставшуюся часть массива. 
// Например: dropElements([1. 2. 3. 4], function(n) (return n >= 3;}) должна вернуть [3, 4].
function dropElements(array, func) {
    const index = array.findIndex(func);
    for (let i = 0; i < index; i++) {
        array.shift();
    }
    return array;
}
//console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; }));


// 12.Написать функцию, которая принимает массив различной вложенности и возвращает одномерный массив. 
// Например: steamrollArray ([1, [2], [3. [[4]]]]) должна вернуть [1, 2, 3, 4].
function arrayOfDifferentNesting(array) {
    return array.flat(Infinity);
}
//console.log(arrayOfDifferentNesting([1, [2], [3, [[4]]]]));


// 13.Написать функцию, которая суммирует два аргумента вместе. 
// Если указан только один аргумент, то возвращает функцию, которая ожидает второй аргумент и возвращает сумму.   
function sumArguments(a) {
    if (arguments.length === 1) {
        return function(b) {
            return a + b;
        };
    }
    return a + arguments[1];
}
//console.log(sumArguments(2, 3));