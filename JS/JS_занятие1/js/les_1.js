
//Первая задача
let allarea = 10*100
let area1=15*25
let gardenbed = parseInt(allarea/area1)
let remainingarea = allarea-area1*gardenbed
console.log(remainingarea);

//Вторая задача
let fullS = 15 * 100; // Общая площадь в см2
let buzyS = 600;
let freeS = fullS - buzyS;
console.log(freeS); // Площадь остатка

// Третья задача
let one = 4,
    two = 73,
    three = 1;
let answer = Math.min(one, two, three);
console.log(answer);

// Четвертая задача
let number = 60;
let m = 58.2;
let n = 61.9;

if (Math.abs(m - number) > Math.abs(n - number)){ 
	console.log("Ближайшее к заданному числу: " + n);
	} else {
		if (Math.abs(m - number) < Math.abs(n - number)) 
		console.log("Ближайшее к заданному числу: " + m);
	else {
	console.log("Оба числа на одинаковом отдалении");
	}	
}

// Пятая задача
let Ax, Ay, Az, Bx, By, Bz, Cx, Cy, Cz;
let AB = (Bx - Ax) ** 2 + (By - Ay) ** 2 + (Bz - Az) ** 2;
let AC = (Cx - Ax) ** 2 + (Cy - Ay) ** 2 + (Cz - Az) ** 2;
let BC = (Cx - Bx) ** 2 + (Cy - By) ** 2 + (Cz - Bz) ** 2;

if (AB > AC && AB > BC && AB == AC + BC) {
  console.log("Прямоугольник является прямоугольным");
} else if (AC > AB && AC > BC && AC == AB + BC) {
  console.log("Прямоугольник является прямоугольным");
} else if (BC > AB && BC > AC && BC == AB + AC) {
  console.log("Прямоугольник является прямоугольным");
} else {
  console.log("Прямоугольник не является прямоугольным");
}