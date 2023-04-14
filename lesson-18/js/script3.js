function func1() {
	const currentYear = 2023
	const userBirthYear = parseInt(prompt('Вкажіть Ваш рік народження'))
	const userAge = currentYear - userBirthYear
	document.querySelector('span').innerText = userAge
	// console.log(userAge);
}
func1()