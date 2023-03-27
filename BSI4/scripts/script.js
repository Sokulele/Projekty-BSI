const buttons = document.querySelectorAll(".btnNumb");
const equation = document.querySelector(".equation");
const sign = document.querySelector(".sign");
const operators = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equalBtn");
const removeAll = document.querySelector(".removing");
const removeLast = document.querySelector(".removeLast");

// parameters to use
var output; //param in calculate()
var previousNumb; //temporary param
var flagOp = false;
//

console.log(buttons);

// Events
buttons.forEach((btn) => btn.addEventListener("click", () => showNumb(btn)));
operators.forEach((operator) =>
	operator.addEventListener("click", () => showNumb(operator))
);
equalBtn.addEventListener("click", () => calculate());
removeAll.addEventListener("click", () => clearEquation());
removeLast.addEventListener("click", () => clearLastNumb());
//

// methods

function showNumb(numb) {
	// Jeśli nasz przycisk klinkniety to '.', a juz była w równaniu to nic ma sie nie dziac
	// checkLenght();
	equation.style.backgroundColor = '#a89b9d';

	if (equation.innerHTML.length >= 25) {
		// console.log(equation.innerHTML);
		// console.log(equation.innerHTML.length);

		//gdy przekroczony zostanie limit wyswietlanych cyfr kolejna wcisnieta jest automatycznie usuwana
		equation.innerHTML = equation.innerHTML.substring(
			0,
			equationStr.length - 1
		);
	}
	if (
		equation.innerHTML === NaN.toString() ||
		equation.innerHTML === Infinity.toString()
	) {
		equation.innerHTML = "";
		sign.innerHTML = "";
	}

	if (numb.textContent === "." && equation.innerHTML.includes(".")) {
		return;
	}
	// Jeśli pierwszy przycisk too '.' to oznacza ze be
	if (numb.textContent === "." && equation.innerHTML === "") {
		return (equation.innerHTML = "0.");
	}

	if (equation.innerHTML === "0") {
		// if (!(numb.textContent === "."))
		if (!isNaN(numb.textContent)) {
			equation.innerHTML = "";
		}
	}

	if (
		equation.innerHTML === "" &&
		(numb.textContent === "+" ||
			numb.textContent === "*" ||
			numb.textContent === "/" ||
			numb.textContent === "x" ||
			numb.textContent === "=" ||
			numb.textContent === "-")
	) {
		return;
	}
	//opis ponizszych f.warunkowych:
	//Pierwszy if - jeśli nie jest liczba to do gornego diva || flagOp to flaga czy poprzednio wcisniety byl operator to nalezy...
	//...clearowac equation div

	//isNan zwraca true jeśli to nie jest liczba
	if (isNaN(numb.textContent) && !(numb.textContent === ".")) {
		// sign.innerHTML = sign.innerHTML + numb.textContent;

		sign.innerHTML = numb.textContent;
		flagOp = true;

		// console.log(flagOp);
	} else {
		if (flagOp) {
			previousNumb = equation.innerHTML; // previousNumb to param uzywany w metodzie calculate() !!!!nie usuwac!!!!

			equation.innerHTML = "";
			flagOp = false;
		}
		equation.innerHTML = equation.innerHTML + numb.textContent;
	}
}

function checkLenght() {
	if (equation.innerHTML.length >= 25) {
		// console.log(equation.innerHTML);
		// console.log(equation.innerHTML.length);
		//gdy przekroczony zostanie limit wyswietlanych cyfr kolejna wcisnieta jest automatycznie usuwana
		equation.innerHTML = equation.innerHTML.substring(
			0,
			equationStr.length - 1
		);
	}
}
function calculate() {
	let operator = sign.innerHTML;
	console.log(operator);
	if (equation.innerHTML === "") {
		return;
	}
	if (sign.innerHTML === "") {
		return equation.innerHTML;
	}
	//Jeśli wcześniej był wciśnięty operator, to żeby zapobiec działanią liczb z operaotrami i błędem to musimy uciec z funkcji.
	if (flagOp) {
		return;
	}
	switch (operator) {
		case "+":
			output = Number(equation.innerHTML) + Number(previousNumb);
			break;
		case "-":
			output = Number(previousNumb) - Number(equation.innerHTML);

			break;
		case "x":
			output = Number(equation.innerHTML) * Number(previousNumb);
			break;
		case "/":
			if (Number(equation.innerHTML === "0")) {
				output = "Dividing by zero";
			} else {
				output = Number(previousNumb) / Number(equation.innerHTML);
			}
			break;
	}


	equation.style.backgroundColor = "#93A8AC";	//robis ie coral
	equation.style.transition = "all 0.5s";
	
	equation.innerHTML = output;
}

function clearEquation() {
	equation.style.backgroundColor = '#a89b9d';
	equation.innerHTML = "";
	sign.innerHTML = "";
}

function clearLastNumb() {
	equation.style.backgroundColor = '#a89b9d';
	let equationStr = equation.innerHTML.toString();

	if (equation.innerHTML === "") {
		return;
	}
	equationStr = equationStr.substring(0, equationStr.length - 1);
	equation.innerHTML = Number(equationStr);
}
//
