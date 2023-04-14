const rowNumber = 3
const columnNumber = 4

function func1(minVal, maxVal) {
	return minVal + Math.floor(Math.random() * (maxVal - minVal + 1))
}

let table = document.createElement('table')
document.querySelector('p').after(table)
table.classList.add('table')
for (let i = 0; i < rowNumber; i++) {
	let row = document.createElement('tr')
	table.append(row)
	row.classList.add('table__row')
	for (let j = 0; j < columnNumber; j++) {
		let column = document.createElement('td')
		row.append(column)
		column.classList.add('table__column')
		column.innerText = func1(1, 1000)
	}
}