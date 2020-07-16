let app = new Vue({
    el: '#app',
    data: {
        selectedServices: [],
        services: [{
            name: 'Замена масла в АКПП ',
            price: 3300
        }, {
            name: 'Замена фильтра в АКПП',
            price: 3660
        }, {
            name: 'Замена масла в двигателе',
            price: 1300
        }, {
            name: 'Замена масленного фильтра',
            price: 400
        }, {
            name: 'Замена воздушного фильтра',
            price: 600
        }, {
            name: 'Замена салонного фильтра',
            price: 1200
        }, {
            name: 'Замена цепи ГРМ',
            price: 7320
        }, {
            name: 'Замена приводных ремней',
            price: 2000
        }, {
            name: 'Замена свечей зажигания',
            price: 1500
        }, {
            name: 'Сброс межсервисного интервала',
            price: 400
        }, {
            name: 'Замена антифриза',
            price: 1300
        }]
    },
    computed: {
        countPrice() {
            let sum = 0;
            for(let i =0 ; i < this.selectedServices.length; i++){
                sum += this.selectedServices[i].price;
            }
            return sum;
        }
    },
    filters: {
        priceBeautifier(num) {
            let numStr = num.toString();
            let reg = new RegExp(/(?<=\d)(?=(\d{3})+(?!\d))/, 'g');
            let result = numStr.replace(reg, '.');
            return result + ' руб.';
        }
    }
});
