let app = new Vue({
    el: '#app',
    data: {
        tabs: [{
            template: `<div class="tabs-panel">
                        <img src="./img/avto.jpg" class="info-pic">
                        <div class="info-text">
                        <h2>Audi A7 Sportback</h2>
                        <p>Audi A7 Sportback— идеальный автомобиль для путешествий, сочетающий спортивный стиль с вместительным багажником и просторным салоном. Два сенсорных дисплея высокого разрешения сделают общение с автомобилем простым и увлекательным. </p>
                        <p>Этот автомобиль не оставляет равнодушным никого. Эффектный и утонченный, при этом оснащенный по последнему слову техники. А еще он в прямом смысле говорит со своим владельцем на понятном языке. Заботу о безопасности доверьте команде из 39 надежных электронных ассистентов. А сами наслаждайтесь мощью одного из двух (340 л.с. и 245 л.с.) бензиновых двигателей и безупречностью инновационного шасси.</p>
                        </div>
                        </div>`
        }, {
            template: `<div class="tabs-panel">
                <div class="info-text">                
                    <h2>Технические данные:</h2>
                    <ul>
						<p>Двигатель:</p>
                        <li>V-образный 6-цилиндровый дизельный двигатель с системой впрыска Common Rail и турбонаддувом;</li>
						<p>Мощность:</p>
                        <li>Объем двигателя: 2967 см3</li>
                        <li>Максимальная мощность, л. с. при об/мин: 249/ 3000 - 4500 </li>
                        <li>Максимальный крутящий момент, Н·м при об/мин: 600/ 1500-2750 </li>
						<p>Трансмиссия:</p>
						<li>Привод: Постоянный полный привод quattro </li>
						<li>Коробка передач: 8-ступенчатая tiptronic  </li>
						<p>Динамические характеристики:/p>
						<li>Максимальная скорость: 250 км/ч </li>
						<li>Коробка передач: Разгон 0-100 км/ч: 6,3 с </li>
						<p>Расход топлива:</p>
						<li>Городской цикл: 7,8-8,0 л/100 км </li>
						<li>Загородный цикл: 5,7-5,8 л/100 км </li>
						<li>Смешанный цикл: 6,5-6,7 л/100 км </li>
                    </ul>
                </div>
            </div>`
        }, {
            template: `<div class="tabs-panel">
                <div class="info-text">
				<img src="./img/avto1.jpg" class="info-pic">
				<h4 style="position: center">Внешние параметры автомобиля</h4>
                </div>
            </div>`
        }, {
            template: `<div class="tabs-panel">
                <div class="info-text">
                    <p>Адрес: 117485, Россия, Москва, ул. Обручева, д. 30/1.
					<p>Информационный центр Audi:</p>
					<p>Телефон для Москвы и для звонков из-за границы: +7 (495) 775-88-88.</p>
					<p>Телефон для звонков из регионов России: 8 (800) 200-23-33.</p>
                </div>
            </div>`
        } ],
        currentTab: 0
    },
    methods: {
        isCurrentTab: function(id) {
            return this.currentTab === id;
        },
        setCurrentTab: function(id) {
            this.currentTab = id;
        }
    }
});

Vue.component('carousel-item',{
    props: ['slide'],
    template: `<div>
                <p><em>"{{slide.text}}"</em></p>
                <p class="author">{{slide.author}}</p>
        </div>`
});

Vue.component('carousel', {
    props: ['slides'],
    data: function() {
        return {
            activeSlide: 0
        }
    },
    template: `<div>
                <div class="slider">
                    <carousel-item v-for="(slide, index) in slides"
                                :slide="slides[index]"
                                :key="slide.id"
                                v-show="activeSlide == slide.id"
                                class="slide">
                    </carousel-item>
                </div>
				<div class="controls">
                    <button @click="prevSlide()">Назад</button>
                    <button @click="nextSlide()">Вперед</button>
                </div>
            </div>`,
    methods: {
        runCarousel: function() {
            let that = this;
            setInterval(function() {
                if (that.activeSlide == that.slides.length - 1) {
                    return that.activeSlide = 0;
                }
                that.activeSlide++;
            }, 5000)
        },
        nextSlide: function() {
            let that = this;
            if (that.activeSlide == that.slides.length - 1) {
                that.activeSlide = 0;
            }
            that.activeSlide++;
        },
        prevSlide: function() {
            let that = this;
            if (that.activeSlide > 0) {
                that.activeSlide--;
            }
            return;
        }
    },
    created() {
        this.runCarousel();
    }
});

let app1 = new Vue({
    el: '#app1',
    data: {
        slidesList: [{
            id: 0,
            text:'Я всегда верил в то, что никогда нельзя сдаваться. Нужно продолжаться сражаться, даже если есть малейший шанс!',
            author: 'Михаэль Шумахер'
        }, {
            id: 1,
            text:'Победитель – не тот, кто в самой быстрой машине, а тот, кто отказывается проигрывать.',
            author: 'Дэйл Эрнхардт'
        }, {
            id: 2,
            text:'Не говори слишком много, ставь перед собой цель и достигай ее.',
            author: 'Ники Лауда'
        }, {
            id: 3,
            text:'Мы здесь ненадолго, но это очень хорошее время.',
            author: 'Колин МакРэй'
        }, {
            id: 4,
            text:'Человек – это невероятная машина, во многом совершенно неизведанная. У каждого из нас есть скрытый бак с энергией, которая хлещет, когда нам это нужно.',
            author: 'Алессандро Дзанарди'
        }]
    },

});


Vue.component('gallery-item',{
    props: ['image'],
    template: `<div>
                    <h5>{{image.title}}</h5>
                    <img :src="image.url">
                    <button class="delete-button" @click="$emit('remove')">X</button>
    </div>`
});

Vue.component('gallery', {
    props: ['gallery', 'new-item'],
    data: function() {
        return {
            title: '',
            url: ''
        }
    },
    template: `<div>
                    <div class="gallery_add">
                        <div>
                            <input type="text" placeholder="Название изображения" class="adding-input" v-model="title">
                            <input type="text" placeholder="Ссылка на изображение" class="adding-input" v-model="url">
                        </div>
                        <button class="add-button" @click="$emit('add', title, url)">Добавь свою  Audi </button>
                    </div>
                    <gallery-item
                        v-for="(img, index) in gallery"
                        :key="img.id"
                        :image="img"
                        @remove="$emit('passid', index)"
                        class="unit_container">
                    </gallery-item>
    </div>`
});

let app3 = new Vue({
    el: '#app3',
    data: {
        sitename: 'Audi club',
        pictures: [{
            id: 1,
            title: 'Audi A5',
            url:'./img/A5.jpg'
        }, {
            id: 2,
            title: 'Audi Q8',
            url:'./img/Audi Q8.jpg'
        }, {
            id: 3,
            title: 'Audi RS7',
            url:'./img/RS 7.jpg'
        }, {
            id: 4,
            title: 'Audi R8',
            url:'./img/R8.jpg'
        }, {
            id: 6,
            title: 'Audi RS6',
            url:'./img/Audi 100.jpg'
        }, {
            id: 5,
            title: 'Audi Sport quattro 1986',
            url:'./img/Audi Sport.jpg'
        }]
    },
    methods: {
        deletePicture(index) {
            this.pictures.splice(index, 1);
        },
        addPicture(name, link) {
            this.pictures.push({
                id: this.pictures.length + 1,
                title: name,
                url: link
            })
        }
    }
});