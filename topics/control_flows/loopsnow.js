// for (i = 1; i <= 10; i++) {
// 	console.log(i);
// }

// let names = ["Ada", "June", "Morris", "Jade", "Peter"];
// for (i = 0; i < names.length; i++) {
// 	if (names[i] === "Jade") {
// 		break;
// 	}
// 	console.log(names[i]);
// }

// for (i = 1; i < 51; i++) {
// 	if (i % 2 === 1) {
// 		// continue;
// 		console.log(i);
// 	}
// }

// i = 0;
// while (1 < 51) {
// 	console.log(i);
// 	i++;
// }

let users = ["Ada", "Jemima", "Joy", "Julia"];
for (let p = 0; p < pros.length; p++) {
	console.log(pros[p]);
	//we reference the name and use [] notation to get each element. if we start from 1, Ada is ignored because it is at position 0
}
console.log("loop ended");

pros.forEach((pro) => {
	console.log(pro);
});
