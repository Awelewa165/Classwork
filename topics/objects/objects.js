let person = {
	name: "John",
	color: "fair",
	location: "Lagos",
	age: 5,
};

// console.log(person.name);

let person1 = {
	name: "John",
	color: "fair",
	location: "Lagos",
	age: 5,
	fullDetail: function () {
		return `${this.name} is a ${this.age} year old boy who stays in ${this.location}`;
	},
};

// console.log(person1.fullDetail());
console.log(Object.values(person1));

let users = [
	["Richard", "Bola", "Tinuke", "Ada"],
	{
		name: "John",
		color: "fair",
		location: "Lagos",
		age: 5,
	},

	{
		name: "Judith",
		color: "dark",
		location: "Abuja",
		age: 3,
		list: ["Melbourne", "Nigeria", "Ghana", "Mali"],
	},

	["Ben", "Kelvin", "Ade", "Bolu"],
];

// console.log(users[2].list[1]);
