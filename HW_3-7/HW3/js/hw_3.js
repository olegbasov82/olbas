//  1

let A = [ 12, 4, 3, 10, 1, 20 ];
let B = [-3, -7, -100, -33];

let C = A.concat(B);
// let C = B.concat(A);
console.log(C);

for (let i = 0; i < B.length; i++) {
    A.unshift( B[i] );
    // A.push( B[i] );
} 
console.log(A);



//  2

var area = [ 1, null, 0, null, 1, null, null, null, 0 ];

for (j = 0; j < area.length; j++) {
	if (area[j] == 1) {
		area[j] = "×";
	} else if (area[j] == 0) {
		area[j] = "○";
	} else area[j] = " ";
}

var tbl = "<table><tbody>";
tbl += "<tr><td>" + area[0] + "</td><td>" + area[1] + "</td><td>" + area[2] + "</td></tr>";
tbl += "<tr><td>" + area[3] + "</td><td>" + area[4] + "</td><td>" + area[5] + "</td></tr>";
tbl += "<tr><td>" + area[6] + "</td><td>" + area[7] + "</td><td>" + area[8] + "</td></tr>";
tbl += "</tbody></table>";

document.write(tbl); 


//  3

let arr = [12,4,3,10,1,20];
let min = arr[0], max = arr[0];

for (let i = 1; i < arr.length; i++) {
	let num = arr[i];
	if (num > max) {
		max = num;
	}
	if (num < min) {
		min = num;
	}
}

let res1 = arr.splice(arr.indexOf(min), 1);
let res2 = arr.splice(arr.indexOf(max), 1);

// delete arr[arr.indexOf(min)];

console.log(arr);