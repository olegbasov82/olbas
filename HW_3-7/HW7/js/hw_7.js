// 1

setInterval(function time() {  
    let clock = document.getElementById('time');
    let date = new Date();  
    let h = date.getHours();  
    let m = date.getMinutes();  
    let s = date.getSeconds(); 

    h = (h < 10) ? '0' + h : h;  
    m = (m < 10) ? '0' + m : m; 
    s = (s < 10) ? '0' + s : s; 

    clock.children[0].innerHTML = h; 
    clock.children[1].innerHTML = m;
    clock.children[2].innerHTML = s;
    }, 1000);
    
    
// 2

let arr = [
    {
        name: 'Чизкейк',
        art: 309,
        price: 450,
        foto: '1.jpg',
    }, {
        name: 'Торт',
        art: 300,
        price: 2500,
        foto: '2.jpg',
    }, {
        name: 'Мармелад',
        art: 160,
        price: 150,
        foto: '3.jpg',
    }
];

function goods(arr1) {
    let tagGoods = document.getElementById("goods");
    tagGoods.innerHTML = "";
    tagGoods.style.display = "flex";
	tagGoods.style.flexWrap = "wrap";

	
	for(let i = 0; i < arr1.length; i++) {
		let name = document.createElement('h1');
        name.innerText = arr1[i].name;
        
        let art = document.createElement('div');
        art.innerText = arr1[i].art;
        
        let price = document.createElement('div');
		price.innerText = arr1[i].price;
		
		let foto = document.createElement('img');
        foto.setAttribute("src", "img/" + arr1[i].foto);
        foto.style.width = "200px";
        foto.style.height = "200px";
		
		let div = document.createElement('div');
		
        div.style.width = "300px";
        div.style.height = "300px";
		
        div.appendChild(name);
        div.appendChild(art);
        div.appendChild(price);
        div.appendChild(foto);
		
		tagGoods.appendChild(div);
	}	
} 

goods(arr);


// 3 



setTimeout( function() {
    document.querySelector('#traffic .red').classList.add('active');
}, 1000);
setTimeout( function() {
    document.querySelector('#traffic .red').classList.remove('active');
}, 4000);

setTimeout( function() {
    document.querySelector('#traffic .yellow').classList.add('active');
}, 4000);
setTimeout( function() {
    document.querySelector('#traffic .yellow').classList.remove('active');
}, 6000);

setTimeout( function() {
    document.querySelector('#traffic .green').classList.add('active');
}, 6000);
setTimeout( function() {
    document.querySelector('#traffic .green').classList.remove('active');
}, 9000);

setTimeout( function() {
    document.querySelector('#traffic .yellow').classList.add('active');
}, 9000);
setTimeout( function() {
    document.querySelector('#traffic .yellow').classList.remove('active');
}, 11000);

setTimeout( function() {
    document.querySelector('#traffic .red').classList.add('active');
}, 11000);
setTimeout( function() {
    document.querySelector('#traffic .red').classList.remove('active');
}, 14000);