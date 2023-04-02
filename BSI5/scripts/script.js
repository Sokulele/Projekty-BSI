const name = document.querySelector("#Name");
const surname = document.querySelector("#Surname");
const pesel = document.querySelector("#PESEL");
const telNumb = document.querySelector("#PhoneNumb");
const street = document.querySelector("#Street");
const houseNumb = document.querySelector("#HouseID");
const flatNumb = document.querySelector("#FlatID");
const city = document.querySelector("#City");
const postCode = document.querySelector("#PostCode");
const date = document.querySelector("#Date");
const form = document.getElementById("Form");

form.addEventListener("submit", (sub) => ValidateForm(sub));

function ValidateForm(sub) {
	if (
		nameValid &&
		surnValid &&
		peselValid &&
		phoneValid &&
		streetValid &&
		housNmbValid &&
		flatNmbValid &&
		dateValid &&
		flatNmbValid
	) {
		return;
	} else {
		sub.preventDefault();
	}
}

// variables
var nameValid,
	surnValid,
	peselValid,
	phoneValid,
	streetValid,
	housNmbValid,
	flatNmbValid,
	cityValid,
	dateValid = true;

//
//

name.addEventListener("input", () => NameCheck());
surname.addEventListener("input", () => SurnameCheck());
pesel.addEventListener("input", () => PeselChecker());
telNumb.addEventListener("input", () => TelNumbChecker());
street.addEventListener("input", () => StreetCheck());
houseNumb.addEventListener("input", () => HouseNumbCheck());
flatNumb.addEventListener("input", () => FlatNumbCheck());
city.addEventListener("input", () => CityChecker());
postCode.addEventListener("input", () => PostChodeChecker());
date.addEventListener("input", () => DateChecker());

function DateChecker() {
	let dateValue = date.value;
	let yearValue = new Date(dateValue).getFullYear();
	let monthValue = new Date(dateValue).getMonth() + 1;
	let dayValue = new Date(dateValue).getDate(); //dzien

	let dateError = document.querySelector("#errorDate");

	let currYear = new Date().getFullYear();
	let currMonth = new Date().getMonth() + 1; //january = 0
	let currDay = new Date().getDate();

	let age = currYear - yearValue;
	// console.log(age);
	if (
		currMonth < monthValue ||
		(currMonth === monthValue && currDay < dayValue)
	) {
		age--;
	}

	if (yearValue <= 1900) {
		dateError.innerHTML = "Błędna data urodzenia!";
		dateValid = false;
	} else if (age < 18) {
		dateError.innerHTML = "Musisz być pełnoletni!";
		dateValid = false;
	} else {
		dateError.innerHTML = "";
		dateValid = true;
	}
	// else {
	// }
}

function PostChodeChecker() {
	let postCodeValue = postCode.value;
	let regEx = /^[0-9]{2}-[0-9]{3}/;

	if (!regEx.test(postCodeValue)) {
		postCode.classList.add("error");
		postCodeValue = false;
		// console.log(postCodeValue);
	} else {
		postCode.classList.remove("error");
		postCodeValue = true;
	}
}

function CityChecker() {
	let cityValue = city.value.toLowerCase();
	console.log(cityValue);
	let regEx =
		/^([a-zęóąśłżźćń]{2,}$)|([a-zęóąśłżźćń]{1,}[ ]?[- ']{1}[ ]?[a-zęóąśłżźćń]{2,}$)/;
	console.log(regEx.test(cityValue));

	if (!regEx.test(cityValue)) {
		city.classList.add("error");
		cityValid = false;
		// console.log(cityValid);
	} else {
		city.classList.remove("error");
		cityValid = true;
	}
}
function FlatNumbCheck() {
	let flatNumbValue = flatNumb.value.toLowerCase();
	console.log(flatNumbValue);
	let regEx = /(^[0-9]{1,}[a-z]?$)|(^[a-z]{1,}[0-9]?$)/;
	console.log(regEx.test(flatNumbValue));

	if (!regEx.test(flatNumbValue)) {
		flatNumb.classList.add("error");
		flatNmbValid = false;
		// console.log(flatNmbValid);
	} else {
		flatNumb.classList.remove("error");
		flatNmbValid = true;
	}
}
function HouseNumbCheck() {
	let houseNumbValue = houseNumb.value.toLowerCase();
	console.log(houseNumbValue);
	let regEx = /(^[0-9]{1,}[a-z]?$)|(^[a-z]{1,}[0-9]?$)/;
	console.log(regEx.test(houseNumbValue));

	if (!regEx.test(houseNumbValue)) {
		houseNumb.classList.add("error");
		housNmbValid = false;
		// console.log(housNmbValid);
	} else {
		houseNumb.classList.remove("error");
		housNmbValid = true;
	}
}

function StreetCheck() {
	let streetValue = street.value.toLowerCase();
	// console.log(streetValue);
	let regEx =
		/^[0-9]?[. -]?[a-zęóąśłżźćń]{1,}[. -]?[0-9]?[a-zęóąśłżźćń]{1,}[0-9]?$/;
	console.log(regEx.test(streetValue));

	if (!regEx.test(streetValue)) {
		street.classList.add("error");
		streetValid = false;
		// console.log(streetValid);
	} else {
		streetValid = true;
		street.classList.remove("error");
	}
}
function TelNumbChecker() {
	let telValue = telNumb.value;
	let regEx = /^[0-9]{9}/;
	if (!regEx.test(telValue)) {
		telNumb.classList.add("error");
		phoneValid = false;
		// console.log(phoneValid);
	} else {
		phoneValid = true;
		telNumb.classList.remove("error");
	}
}

function PeselChecker() {
	let peselValue = pesel.value;
	let regEx = /^[0-9]{11}/;
	if (!regEx.test(peselValue)) {
		pesel.classList.add("error");
		peselValid = false;
		// console.log(peselValid);
	} else {
		peselValid = true;
		pesel.classList.remove("error");
	}
}

function SurnameCheck() {
	let surnameValue = surname.value.toLowerCase();
	// console.log(surnameValue);
	let regEx =
		/(^[a-zęóąśłżźćń]{2,}$)|([a-zęóąśłżźćń]{1,}[-']{1}[a-zęóąśłżźćń]{2,}$)/;
	console.log(regEx.test(surnameValue));

	if (!regEx.test(surnameValue)) {
		surname.classList.add("error");
		surnValid = false;
		// console.log(surnValid);
	} else {
		surnValid = true;
		surname.classList.remove("error");
	}
}

function NameCheck() {
	let nameValue = name.value;
	nameValue = nameValue.toLowerCase();
	// console.log(nameValue);
	let regEx = /^[a-zęóąśłżźćń]{2,}$/;
	console.log(regEx.test(nameValue));
	if (!regEx.test(nameValue)) {
		name.classList.add("error");
		nameValid = false;
		// console.log(nameValid);
	} else {
		nameValid = true;
		name.classList.remove("error");
	}
}
