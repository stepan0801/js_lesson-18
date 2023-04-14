function func1() {
	const inp = parseInt(document.querySelector('.user-action__input').value)
	const table = document.createElement('div')
	table.setAttribute('class', 'table')
	document.querySelector('.user-action').after(table)
	for (let i = 0; i < inp; i++) {
		const inputTable = document.createElement('input')
		inputTable.setAttribute('class', 'table__input')
		table.after(inputTable)
	}

}


function func2() {
	const inputList = document.querySelectorAll('.table__input')
	sum = 0
	for (const input of inputList) {
		sum = sum + parseInt(input.value)
	}
	const resultValue = sum / inputList.length
	document.querySelector('.result-action__value').innerHTML = resultValue.toFixed(2)
}

window.onload = function () {
	document.getElementById('user-btn').onclick = func1
	document.getElementById('result-btn').onclick = func2
}