// 1

let num = prompt("Введите любое число");
let res = 0;

for ( let i = 0; i < num.length; i++) {
    res += Number(num[i]);
}

console.log(res);


// 2

let str = "17 05 2020";
console.log(str.replace(/0/ig, "00"));


// 3

let password = prompt("Введите пароль");

let reg = /((?=.*[0-9]{2})(?=.*[!#$%])(?=.*[a-z])(?=.*[A-Z])){9,}/g;


if (reg.test(password) == false) {
    alert("Пароль должен быть не менее 9 символов длиной, содержать минимум 2 цифры, заглавные и строчные буквы один спецсимвол (например, !, $, #, %). Пароль не может содержать кириллицу.");
} else {
    alert("Пароль установлен")
};