//1. query all the elements
//2. iterate over them and give any tag a class of error where error is inside the text and give any tag a class of success where success is inside the text

// const paras = document.querySelectorAll("p");
// paras.forEach((para) => {
// 	// if para includes error, addclasslist('error) else, addclasslist('success')
// 	// let inc = para.innerText;
// 	if (para.textContent.includes("error")) {
// 		para.classList.add("errorm");
// 	} else if (para.textContent.includes("success")) {
// 		para.classList.add("success");
// 	}
// });

const paras = document.querySelectorAll("p");
const parass = Array.from(paras);
// console.log(parass);

parass.forEach((para) => {
	if (para.textContent.includes("error")) {
		para.classList.add("error");
	} else if (para.textContent.includes("success")) {
		para.classList.add("success");
	} else {
		para.innerHTML += `<span><b>No pass</b></span>`;
	}
});

// create the the array of objects
let dataList = [
	{
		id: 1,
		name: "Ada",
		age: 10,
		status: "Admitted",
	},

	{
		id: 2,
		name: "Mercy",
		age: 15,
		status: "UnAdmitted",
	},

	{
		id: 3,
		name: "John",
		age: 20,
		status: "UnAdmitted",
	},
	{
		id: 4,
		name: "Peter",
		age: 10,
		status: "Admitted",
	},
];

// let objValues = [
// 	{
// 		id: 1,
// 		uname: "Ada",
// 		ustatus: "Admitted",
// 	},

// 	{
// 		id: 1,
// 		uname: "Jimi",
// 		ustatus: "Not Admitted",
// 	},
// ];
// let iterData = objValues.forEach((oneData) => {
// 	console.log(oneData);
// });

// console.log(objValues[1].uname);

// target the table element
// let table = document.querySelector("tbody");
// // console.log(table);
// dataList.forEach((person) => {
// 	console.log(person);
// 	table.innerHTML += `
// 		<tr>
// 		<td>${person.id}</td>
// 		<td>${person.name}</td>
// 		<td>${person.age}</td>
// 		<td>${person.status}</td>
// 		</tr>
// 	`;
// });

let table = document.querySelector("tbody");
dataList.forEach((person) => {
	// console.log(person);
	table.innerHTML += `
		<tr>
			<td>${person.id}</td>
			<td>${person.name}</td>
			<td>${person.age}</td>
			<td>${person.status}</td>
		</tr>
	`;
});

// // //3b. In this example, we want to cycle through a list from an array and create a new element for each content in the array
// let peopleArr = ["Mason", "Tunde", "Joy", "Mercy"];
// let peopleList = document.querySelector(".pple");
// peopleArr.forEach((person) => {
// 	peopleList.innerHTML += `<li>${person}</li>`;
// });
// let listOfPeople = document.querySelector("ul");
// peopleArr.forEach((person) => {
// 	// console.log(person);
// 	listOfPeople.innerHTML += `<li>${person}</li>`;
// });
