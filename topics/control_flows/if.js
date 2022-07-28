// let time = new Date();
// let hrs = time.getHours();

// // if
// if (hrs < 12) {
// 	console.log(`good morning, we are in the ${hrs}th hour`);
// }

// // if_else
// if (hrs > 12) {
// 	console.log(`good morning, we are in the ${hrs}th hour`);
// } else {
// 	console.log(`it's the ${hrs}th hour`);
// }

// // else_if
// if (Math.random() * 25 > hrs) {
// 	console.log(`good morning, its ${hrs} hours`);
// } else if (Math.random() * 25 < hrs) {
// 	console.log(`good afternoon, its ${hrs} hours`);
// } else {
// 	console.log("good evening");
// }

// // multiple conditions (logical operators)
// let age = 18;

// if (age === 18 && age >= 18) {
// 	console.log(`since you are ${age} and above, please vote`);
// }

// if (age < 18 || age >= 18) {
// 	console.log(`since you are not ${age} years, don't vote`);
// }

// if (age < 18 && age >= 18) {
// 	console.log(`since you are ${age} and above, please vote`);
// }

// let students = ["Joy", "Mercy", "Peter", "James"];
// // console.log(pros.length);
// if (students.length >= 4) {
// 	students.forEach((student) => {
// 		console.log(student);
// 	});
// 	// console.log();
// }

// let email = "2@@234";
// if (email.length !== 8 && email.includes("@")) {
// 	console.log("too short");
// }

// // // logical not
// console.log(true); //true
// console.log(false); //false
// console.log(!true); //false
// console.log(!false); //true

// let uname = false;
// if (uname) {
// 	// this evaluates to false
// 	console.log("please log in");
// } else if (!uname) {
// 	// this evaluates to true
// 	console.log("logged in");
// }

// let age = 18;
// if (age > 18) {
// 	console.log(`Since you are above ${age}, you are free to vote`);
// } else if (age === 18) {
// 	console.log(`Since you are ${age}, you are free to vote`);
// } else {
// 	console.log(`You cannot vote because you are below ${18} years`);
// }

// let password = "p@sswor";
// if (password.length !== 8 && password.includes("@")) {
// 	console.log(`your password is too short and does not contain @`);
// } else {
// 	console.log(`perfect`);
// }

score = 55;
if (score >= 70) {
	console.log(`you scored an A`);
} else if (score >= 60 && score <= 69) {
	console.log(`you scored an B`);
} else if (score >= 50 && score <= 59) {
	console.log(`you scored an C`);
} else if (score >= 40 && score <= 49) {
	console.log(`you scored an D`);
} else if (score >= 30 && score <= 39) {
	console.log(`you scored an E`);
} else {
	console.log(`you scored an F`);
}
