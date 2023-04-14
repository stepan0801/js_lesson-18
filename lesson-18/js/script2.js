function func1() {
	const sumInGrivnas = parseFloat(document.querySelector('.converter__sum-in-grivnas').value)
	const dollarRateToGrivna = 38
	const evroRateToGrivna = 40
	document.querySelector('.converter__sum-in-evro').value = (sumInGrivnas / evroRateToGrivna).toFixed(2)
	document.querySelector('.converter__sum-in-dollars').value = (sumInGrivnas / dollarRateToGrivna).toFixed(2)
}

window.onload = function () {
	document.querySelector('button').onclick = func1
}