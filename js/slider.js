let slider = document.getElementById("myRange");
let demo = document.getElementById("demo");
let priceInput = document.getElementById("price-box");

slider.oninput = function () {
	priceInput.value = numberWithComma(this.value);
};

priceInput.oninput = function () {
	slider.value = numberWithoutComma(this.value);
};

numberWithComma = (num) => {
	let tempNum = num.split("");
	tempNum.splice(tempNum.length - 3, 0, ",");
	return tempNum.join("");
};

numberWithoutComma = (num) => {
	return num.replace(/,/g, "");
};

priceInput.value = numberWithComma(slider.value);
