function map(array, foo) {
    let newArray = [];
    for (const element of array) {
        newArray.push(foo(element));
    }
    return newArray;
}


function filter(array, foo) {
    let newArray = [];
    array.forEach(element => {
        if (foo(element)) {
            newArray.push(element);
        }
    });
    return newArray;
}


function find(array, element) {
    for (const item of array) {
        if (item === element) {
            return item;
        }
    }
    return 'Элемент не найден';
}


function some(array, foo) {
    for (const element of array) {
        if(foo(element)) return true;
    }
    return false;
}


function every(array, foo) {
    for (const element of array) {
        if(!foo(element)) return false;
    }
    return true;
}

export {map, filter, find, some, every};