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
                <div class="controls">
                    <button @click="prevSlide()">Назад</button>
                    <button @click="nextSlide()">Вперед</button>
                </div>
                <div class="slider">
                    <carousel-item v-for="(slide, index) in slides"
                                :slide="slides[index]"
                                :key="slide.id"
                                v-show="activeSlide == slide.id"
                                class="slide">
                    </carousel-item>
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

let app = new Vue({
    el: '#app',
    data: {
        slidesList: [{
            id: 0,
            text:'Друзья приходят и уходят, а враги имеют свойство накапливаться.',
            author: 'Томас Джонс'
        }, {
            id: 1,
            text:'В близкие друзья я выбираю себе людей красивых, в приятели – людей с хорошей репутацией, врагов завожу только умных.',
            author: 'Оскар Уайльд'
        }, {
            id: 2,
            text:'Враги всегда говорят правду, друзья – никогда.',
            author: 'Цицерон'
        }, {
            id: 3,
            text:'Враг – это друг, который знает о нас слишком много.',
            author: 'Константин Мелихан'
        }, {
            id: 4,
            text:'Выбирать врагов нужно так же тщательно, как и друзей.',
            author: 'Оскар Уайльд'
        }]
    },

});
