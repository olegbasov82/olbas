// 1

;( function () {
	window.myUtils = {
		minElemArr: function (obj) {
			let num = Math.min.apply( Math, obj );
			console.log('Самое маленькое число в массиве: '  + num);
			},
		maxElemArr: function (obj) {
			let num = Math.max.apply( Math, obj );
			console.log('Самое большое число в массиве: '  + num);
		},
		meanAr: function (obj) {
			let t = obj[0];

			for (let i = 0; i < obj.length -1; i++) {
				t = t + obj[i + 1];
			}
			t = t / obj.length;
			console.log('Среднее арифметическое значение массива: '  + t);
		},
		cloneArr: function (obj) {
			let newArr = [];

			for (let i in obj) {
				newArr[i] = obj[i];
			}
			newArr.push(15); // Добавляю для различия массивов в консоли
			return newArr;
		},
	};
}());

// 2

let data = {
	x:[],
	y:[],
	line: {color: 'green'},
};

let layout = {
	title: 'HW_OB',
	xaxis: {
		title: 'Ось X',
	},
	yaxis:{
		title: 'Ось Y',
	}
};


function calcY(x) {
	let y;

	if(x >= 1){
		y = 5 / x;
	} else {
		y = x * x - 4 * x;
	}
	return y;
}

for(let i = -5; i <= 5; i = i + 0.01){
	data.x.push(i);
	data.y.push(calcY(i));
}

function pole(n) {
	let table = document.createElement('table');

	for (let i = 0; i < n; i++) {
		let tr = document.createElement('tr');
		for (let j = 0; j < n; j++) {
			let td = document.createElement('td');
		}
	}
}
