function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

// 1
console.log('Задание №1');
let a = {
    name: 'static',
    count: 0
};

function foo(a, prop, count) {
    let arr = [];
    for(let i=0; i < count; i++) {
        
        let newOb = {...a};
        if(i!=0){
            newOb[prop] = i;
        } 
        arr.push(newOb);
    }
    return arr;
}

console.log(foo(a, 'count', 10));

// 2
console.log('Задание №2');

function createCounter(){
	let arr = [];
	
	return function(){
        let i = getRandomInt(1, 101);
        while(arr.indexOf(i)!=-1) {i = getRandomInt(1, 101)}
        arr.push(i);
		return i;
	}		
}

let counter = createCounter();
console.log('Старт счетчика');
for(let j=0; j<100; j++) { console.log(counter()); }
console.log('Конец счетчика');


// 3
console.log('Задание №3');

let student = {
    name: 'Басов',
    surname: 'Олег',
    age: '38',
    interests: ['Театр','Волейбол', 'Путешествия', 'Юриспруденция'],
    EducationEst: 'ИТМО',
    printInfo: function () {
        let int_str = '';
        for(let i=0; i<this['interests'].length; i++) { int_str += `${(i!=0)?', ':''}${this['interests'][i]}`}
        let info = `${this['name']} ${this['surname']}. ${this['age']} лет. Интересы: ${int_str}. Преподаёт в ${this['EducationEst']}`;
        return info;
    }  
};

console.log(student.printInfo());


// 4
console.log('Задание №4');

function factorial(n) {
    //если n == 1 тогда не запускаем рекурсию, а то получим 0 на выходе
    return (n!=1) ? n*factorial(n-1):1 ; 
}

console.log('2! =', factorial(2));
console.log('3! =', factorial(3));
console.log('4! =', factorial(4));
console.log('5! =', factorial(5));


// 5
console.log('Задание №5');
let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5}, { 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},];
console.log(arr);
let arr_sorted = arr.slice();
arr_sorted.sort(function(a,b) { 
    let x = a['price']-b['price']; 
    return (x<0)? (x/x)*-1:x/x;
});

console.log(arr_sorted);
