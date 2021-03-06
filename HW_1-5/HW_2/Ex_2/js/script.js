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
