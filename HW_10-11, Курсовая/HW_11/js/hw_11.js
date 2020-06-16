// Задача №1

function Product(name, price) {
    this.product = {};
    this.product.name = name;
    this.product.price = price;
}

function Cart() {
    this.cart = [];
}

Cart.prototype.setProduct = function(data) {
    let i = this.cart.length;
    this.cart[i] = data;
};

Cart.prototype.numGoods = function() {
    this.numGoods = this.cart.length;
    return this.numGoods;
}

Cart.prototype.sumGoods = function() {
    this.sumGoods = 0;
    let iteration;

    for (let i = 0; i < this.cart.length; i++) {
        iteration = this.cart[i].product.price;
        this.sumGoods = iteration + this.sumGoods;
    }
    return this.sumGoods;
}

let product = new Product('Книга Метро 2033', 1500);
let product2 = new Product('Набор шариковыъ ручек', 100);
let product3 = new Product('Ежедневник', 1200);
let cart = new Cart();

cart.setProduct(product);
cart.setProduct(product2);
cart.setProduct(product3);

console.log(cart.numGoods());
console.log(cart.sumGoods());
console.log(cart);

// Задача №2

function Person(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

Person.prototype.toString = function() {
    return 'Человек: Имя: ' + this.name + '. Возраст: ' + this.age + ' лет. Пол: ' + this.gender + '. Интересы: ' + this.interests + '.';
}

function Student(name, age, gender, interests, university) {
    Person.call(this, name, age, gender, interests);
    this.university = university;
}

Student.prototype.toString = function() {
    return 'Преподаватель: Имя: ' + this.name + ' Возраст: ' + this.age + ' лет. Пол: ' + this.gender + '. Интересы: ' + this.interests + '. Преподает в ' + this.university;
}

let person = new Person('Вячеслав', 24, 'M', 'инфокоммуникационные технологи, волейбол');
let student = new Student('Олег', 38, 'M', 'Театр, волейбол, путешествия, юриспруденция', 'ИТМО');

console.log(person.toLocaleString());
console.log(student.toLocaleString());

// Задача №3 Курсовая работа пятнашки
