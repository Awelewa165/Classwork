// let validButton = document.querySelector(".btn");
// let form = document.querySelector(".form");

// // console.log(validButton);
// validButton.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	// console.log(e.target);
// 	let formname = document.forms["newform"]["name"].value.toLowerCase().trim();
// 	// console.log(formname);
// 	let formemail = document.forms["newform"]["email"].value.toLowerCase().trim();
// 	// console.log(formemail);
// 	let initialpass = document.forms["newform"]["initpass"].value
// 		.toLowerCase()
// 		.trim();
// 	let finalpass = document.forms["newform"]["pass"].value.toLowerCase().trim();

// 	// 	// or you can also fetch form fields like this
// 	// 	// 	// let formname = newform.name.value;
// 	// 	// 	// let formemail = newform.email.value;
// 	// 	// 	// let initialpass = newform.initpass.value;
// 	// 	// 	// let finalpass = newform.pass.value;

// 	// fetch the error fields
// 	let name_error = document.getElementById("error_name");
// 	let email_error = document.getElementById("error_email");
// 	let initialpasswError = document.getElementById("error_initpass");
// 	let password_error = document.getElementById("error_pass");
// 	// var regex = /^[a-zA-Z]{6, 1}$/;
// 	var regex = /[a-zA-Z]/;

// 	if (formname === "") {
// 		name_error.textContent = "please enter your name";
// 	} else if (regex.test(formname) === false) {
// 		name_error.textContent = "Please enter a valid name";
// 	} else {
// 		name_error.textContent = "";
// 	}

// 	if (formemail === "") {
// 		email_error.textContent = "please enter your email";
// 	} else {
// 		email_error.textContent = "";
// 	}

// 	if (initialpass === "") {
// 		initialpasswError.textContent = "please enter a password";
// 	} else if (finalpass === "") {
// 		password_error.textContent = "please confirm your password";
// 	} else if (initialpass !== finalpass) {
// 		password_error.textContent = "password does not match";
// 	} else {
// 		initialpasswError.textContent = "";
// 		password_error.textContent = "";
// 	}

// 	form.reset();
// });

// // console.log("chil \n dren");

const submitForm = document.querySelector(".btn");
const regForm = document.querySelector(".form");
// console.log(regForm);

submitForm.addEventListener("click", (e) => {
	e.preventDefault();

	let nameField = document.forms["newform"]["name"].value;
	let emailField = document.forms["newform"]["email"].value;
	let initpassField = document.forms["newform"]["initpass"].value;
	let passField = document.forms["newform"]["pass"].value;

	let error_name = document.getElementById("error_name");
	let error_email = document.getElementById("error_email");
	let error_initpass = document.getElementById("error_initpass");
	let error_pass = document.getElementById("error_pass");
	// let nameRegex = //;
	// let emailRegex = //

	if (nameField === "") {
		error_name.textContent = "Please Enter Your Name";
	} else {
		error_name.textContent = "";
	}

	if (emailField === "") {
		error_email.textContent = "Please Enter Your Email";
	} else {
		error_email.textContent = "";
	}

	if (initpassField === "") {
		error_initpass.textContent = "Please Enter Your Password";
	} else if (initpassField.length < 8) {
		error_initpass.textContent = "Password is too short";
	} else if (passField === "") {
		error_pass.textContent = "Please Confirm Your Password";
	} else if (initpassField !== passField) {
		error_pass.textContent = "Password does not match";
	} else {
		error_initpass.textContent = "";
		error_pass.textContent = "";
	}

	// if (
	// 	error_name !== "" &&
	// 	error_email !== "" &&
	// 	error_initpass !== "" &&
	// 	error_pass !== ""
	// ) {
	// 	console.log(error_email);
	// } else {
	// 	newform.reset();
	// }

	newform.reset();
});
