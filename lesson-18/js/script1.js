function func1() {
	const num1 = parseFloat(document.getElementById('num1').value)
	const num2 = parseFloat(document.getElementById('num2').value)
	const sum = num1 + num2
	document.getElementById('result').value = sum
}

function func2() {
	const num1 = parseFloat(document.getElementById('num1').value)
	const num2 = parseFloat(document.getElementById('num2').value)
	const subtraction = num1 - num2
	document.getElementById('result').value = subtraction
}

function func3() {
	const num1 = parseFloat(document.getElementById('num1').value)
	const num2 = parseFloat(document.getElementById('num2').value)
	const poduct = num1 * num2
	document.getElementById('result').value = poduct
}

function func4() {
	const num1 = parseFloat(document.getElementById('num1').value)
	const num2 = parseFloat(document.getElementById('num2').value)
	const divide = num1 / num2
	document.getElementById('result').value = divide
}

window.onload = function () {
	document.getElementById('plus').onclick = func1
	document.getElementById('minus').onclick = func2
	document.getElementById('mult').onclick = func3
	document.getElementById('divide').onclick = func4
}