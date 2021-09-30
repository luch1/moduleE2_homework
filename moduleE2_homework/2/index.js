let x;

if (Number(x)) {
    console.log(x + ' число');
}
    else if (String(x)) {
    console.log(x + ' строка');
}
    else if (Boolean(x)) {
    console.log(x + ' логический тип');
}
else {
    console.log('Тип "' + x + '" не определён');
}

//Второй вариант

let x;

if (typeof x === 'number') {
    console.log('число');
}

    else if (typeof x === 'string') {
    console.log('строка');
}

    else if (typeof x === 'boolean') {
    console.log('логический тип');
}
else {
    console.log('Тип "' + x + '" не определён');
}