
let product = new Vue({
    el:'#product',
    data:{
        product:{
            id:'A7',
            url:'img/avto.png',
            title: 'Audi A7 Sportback 45 TDI quattro',
            color: 'Blue',
            priceSale: 4810000.00,
            discription: 'Дизельный двигатель V6 3.0 TDI 249 л.с. Максимальный крутящий момент 600 Нм  Разгон от 0 до 100 км/ч - 6,3 с',
        }
    },
    filters: {
       returnPrice: function(value){
           return 'От ₽' + ' ' + value;
       } 
    }
    
})