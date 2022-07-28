// let textValue = 'it\'s the "vikings" movie';
// console.log(textValue);
// console.log(textValue.length);

// let firstText = "Hannah is ";
// let num = 15;
// console.log(firstText + num + "years old");

// let userInput = prompt("First Name:");
// let userInput1 = prompt("Second Name:");
// document.write(`My name is ${userInput} ${userInput1}`);

// const pieValue = 3.142;
// let radius = prompt("Enter a number");
// let circumOfCircle = 2 + pieValue + Number(radius);
// console.log(typeof radius);
// document.write(`The result of your choice is ${parseInt(circumOfCircle)}`);

function addNum(a, b) {
	return a + b;
}

let result = addNum(7, 7);
let addN = addNum(7, 6);
let newresult = addNum(7, 10);
console.log(result);
console.log(addN);
console.log(newresult);

// let wordStr = "Apple, Banana, Kiwi";
// // let result = wordStr.slice(7);
// let result = wordStr.substring(-9, 3);
// console.log(result);

// let text = "Please visit Microsoft Microsoft!";
// let newText = text.replace(/MICROSOFT/i, "W3Schools");
// console.log(newText.toUpperCase());

// let text1 = "Hello";
// let text2 = "       World";
// let text3 = text1.concat(" ", text2, ", are you ready");
// console.log(text3.trim());

// let text1 = " Hello, World";
// let textTrim = text1.split();
// console.log(textTrim);

// let num1 = 300;
// let changeNum = num1.toString();
// console.log(typeof changeNum);

// let x = 9.656;
// // let x2 = x.toExponential(6);
// // let x2 = x.toFixed(2);
// let x2 = x.toPrecision(2);
// console.log(x2);
// x.toExponential(4);
// x.toExponential(6);

// let fruitArray = [
// 	"Pineapple",
// 	"orange",
// 	50,
// 	["juice", 5, "drinks"],
// 	"pear",
// 	20,
// 	30,
// ];

// let sortArray = ["fruits", "cars", "trees", "computers"];
// let sortNumArray = [1, 2, 50, 10, 1000];

// let secondArray = ["juice", 5, "drinks"];
// console.log(fruitArray[3][2].toString());
// console.log(fruitArray.pop());
// let popItem = fruitArray.pop();
// let pushItem = fruitArray.push("grape", "mango");
// let shiftItem = fruitArray.shift();
// let unshiftItem = fruitArray.unshift("Mango");
// let changeElement = (fruitArray[1] = "Banana");
// let deleteElement = delete fruitArray[1];
// console.log(fruitArray.concat(secondArray));
// let spliceElement = fruitArray.splice(1, 1);
// console.log(spliceElement);
// console.log(Math.min(sortNumArray));
