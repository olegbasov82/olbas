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
                        <button class="add-button" @click="$emit('add', title, url)">Добавить  </button>
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

let app = new Vue({
    el: '#app',
    data: {
        sitename: 'Участники Московской мили',
        pictures: [{
            id: 1,
            title: 'Audi A8',
            url:'./img/A8.jpg'
        }, {
            id: 2,
            title: 'BMW M3',
            url:'./img/BMW_M3.jpg'
        }, {
            id: 3,
            title: 'Audi R8',
            url:'./img/R8.jpg'
        }, {
            id: 4,
            title: 'BMW X5M',
            url:'./img/Х5М.jpg'
        }, {
            id: 5,
            title: 'Nissan GT-R',
            url:'./img/Nissan GT-R.jpg'
        }, {
            id: 6,
            title: 'Porshe 911',
            url:'./img/Porsche.jpg'
        }, {
            id: 7,
            title: 'Mercedes AMG',
            url:'./img/Mercedes-AMG.jpg'
        }, {
            id: 8,
            title: 'Lamborghini URUS',
            url:'./img/Lamba_Urus.jpg'
        }, {
            id: 9,
            title: 'Ferrari 812 SuperFast ',
            url:'./img/ferrari.jpg'
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
