// 1

function compare(arr1, arr2) {
    if (arr1.lenght !== arr2.lenght) {
        return false;
    }

    for (let i = 0; i < arr1.lenght; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

let ar1 = [ 1, 2, 3 ];
let ar2 = [ 1, 2, 3, 4 ];

console.log(compare(ar1, ar2));


// 2

function range(el1, el2, el3) {
    let arr4 = [];
    for (let j = el1; j < el2; j += el3) {
        arr4.push(j);
    }
    return arr4;
}

let arr3 = range(1, 6, 2);
console.log(arr3);


// 3

let student = {
    SecondName: 'Басов',
    Name: 'Олег',
	Patronymic: 'Олегович',
	Intrests: ['Театр','Волейбол', 'Путешествия', 'Юриспруденция'],
    Education: 'ИТМО',
}

function stud(obj) {
    for (let name in obj) {
        console.log(name + ': ' + obj[name]);
    }
    return;
}

console.log(stud(student));