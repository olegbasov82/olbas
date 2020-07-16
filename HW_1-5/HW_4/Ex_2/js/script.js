let app = new Vue({
    el: '#app',
    data: {
        listDisplay: false,
        searchedText: '',
        searchedArticles: [],
        articles: [{
             title: 'Audi A7 Sportback. Безупречно броский',
            url: 'https://www.audi-yug.ru/ru/models/a7/a7-sportback.html',
            img: './img/A7.jpg'
        }, {
            title: 'Видеокарты Nvidia GeForce RTX 2070, RTX 2070 Super, RTX 2080 Super и RTX 2080 Ti сняты с производства',
            url: 'https://www.ixbt.com/news/2020/07/12/nvidia-geforce-rtx-2070-rtx-2070-super-rtx-2080-super-rtx-2080-ti',
            img: './img/nvidia.jpg'
        }, {
            title: 'Трейлер GTA 6 удивил уровнем графики нового поколения',
            url: 'https://prostomob.com/25395-trejler-gta-6-udivil-urovnem-grafiki-novogo-pokoleniya',
            img: './img/gta.jpg'
        }, {
            title: 'Apple предупредила о последствиях заклеивания веб-камеры MacBook',
            url: 'https://3dnews.ru/1015464',
            img: './img/camera.jpg'
        }, {
            title: 'Похоже, в «Форсаже 9» герои действительно попадут в космос',
            url: 'https://www.igromania.ru/news/95612/Pohozhe_v_Forsazhe_9_geroi_deystvitelno_popadut_v_kosmos',
            img: './img/f9.jpg'
        }, {
            title: 'Как Samsung называет Galaxy S21 и почему флагманская линейка подешевеет',
            url: 'https://www.ixbt.com/news/2020/07/12/samsung-galaxy-s21',
            img: './img/s21.jpg'
        }]
    },
    computed: {
        isNotEmptyArray: function() {
            return this.searchedArticles.length > 0;
        }
    },
    methods: {
        renderResults: function() {
            let result = this.searchedArticles;
            result = [];
            let reg = RegExp(this.searchedText, 'i');
            for (let i = 0; i < this.articles.length; i++) {
                if (reg.test(this.articles[i].title)) {
                    result.push(this.articles[i]);
                }
            }
            return this.searchedArticles = result;
        }
    },
    created: function(){
        this.searchedArticles = this.articles;
    }
});
