const buttons = document.querySelectorAll(".btnNumb");
const equation = document.querySelector(".equation");
const sign = document.querySelector(".prevEq");
const operators = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equalBtn");

var output;

var previousNumb;

console.log(buttons);

buttons.forEach((btn) => btn.addEventListener("click", () => showNumb(btn)));
operators.forEach((operator) =>
	operator.addEventListener("click", () => showNumb(operator))
);

equalBtn.addEventListener("click", () => calculate());
var flagOp = false;
function showNumb(numb) {
	// Jeśli nasz przycisk klinkniety to '.', a juz była w równaniu to nic ma sie nie dziac
	if (numb.textContent === "." && equation.innerHTML.includes(".")) {
		return;
	}
	// Jeśli pierwszy przycisk too '.' to oznacza ze be
	if (numb.textContent === "." && equation.innerHTML === "") {
		return (equation.innerHTML = ".0");
	}

	if (equation.innerHTML === "" && numb.textContent === "-") {
		equation.innerHTML = "-";
	}
	if (
		equation.innerHTML === "" &&
		(numb.textContent === "+" ||
			numb.textContent === "*" ||
			numb.textContent === "/" ||
			numb.textContent === "x" ||
			numb.textContent === "=")
	) {
		return;
	}
	// if (sign.innerHTML !== "") {
	// 	calculate();
	// }
	// sign.innerHTML = sign.innerHTML + numb.textContent;
	// if (isNaN(numb.textContent)) {
	// 	sign.innerHTML =  numb.textContent;

	// } else {
	// 	equation.innerHTML = equation.innerHTML + numb.textContent;
	// }

	//Pierwszy if - jeśli nie jest liczba to do gornego diva || flagOp to flaga czy byl operator zeby clearowac equation div

	if (isNaN(numb.textContent) && !(numb.textContent === ".")) {
		sign.innerHTML = sign.innerHTML + numb.textContent;
		sign.innerHTML = numb.textContent;
		flagOp = true;

		// console.log(flagOp);
	} else {
		if (flagOp) {
			previousNumb = equation.innerHTML;
			// console.log(previousNumb);
			equation.innerHTML = "";
			flagOp = false;
			// alert("asd");
		}
		equation.innerHTML = equation.innerHTML + numb.textContent;
		// equation.innerHTML = "";
	}
}

function calculate() {
	let operator = sign.innerHTML;
	// console.log(operator)
	if (equation.innerHTML === "") {
		return;
	}
	switch (operator) {
		case "+":
			output = Number(equation.innerHTML) + Number(previousNumb);
			console.log(output);
            break;
		case "-":
			output = Number(previousNumb) - Number(equation.innerHTML);
			console.log(output);
			break;
		case "x":
			output = Number(equation.innerHTML) * Number(previousNumb);
			console.log(output);
			break;
		case "/":
			output = Number(previousNumb) / Number(equation.innerHTML);
			console.log(output);
			break;
	}
    equation.innerHTML = output;
    
}
