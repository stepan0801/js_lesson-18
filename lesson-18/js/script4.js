function func1() {
	let arr1 = ['wish1', 'wish2', 'wish3', 'wish4', 'wish5', 'wish6', 'wish7']
	let randomArr1Index = Math.floor(Math.random() * arr1.length)
	let randomArr1Element = arr1[randomArr1Index]
	// console.log(randomArr1Element);
	return randomArr1Element
}

const divQuantity = 3
for (let i = 0; i < divQuantity; i++) {
	let div = document.createElement('div')
	div.classList.add('added-div')
	div.innerHTML = func1()
	document.querySelector('p').after(div)
}
