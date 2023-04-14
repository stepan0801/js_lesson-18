function func1() {
	const sum1 = parseFloat(document.querySelector('select').value)
	// let sum1 = 0
	// for (const opt of firstStageList) {
	// 	if (opt.checked) sum1 += parseFloat(opt.value)
	// }
	const secondStageList = document.querySelectorAll('.second-stage__checkbox')
	let sum2 = 0
	for (const inp of secondStageList) {
		if (inp.checked) sum2 += parseFloat(inp.value)
	}
	const thirdStageList = document.querySelectorAll('.third-stage__guide')
	let sum3 = 0
	for (const inp of thirdStageList) {
		if (inp.checked) sum3 += parseFloat(inp.value)
	}

	const sum = sum1 + sum2 + sum3
	document.querySelector('.result__input').value = sum
}

window.onload = function () {
	document.querySelector('.result__button').onclick = func1
}