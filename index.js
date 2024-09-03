

function rollDice(){
	const countDisplay = document.getElementById("countDisplay").value;
	const diceResult = document.getElementById("diceResult");
	const diceImage = document.getElementById("diceImage");
	const values = [];
	const images = [];

	for(let i = 0 ;i<countDisplay; i++){
		const value = Math.floor(Math.random() *6)+1;
		values.push(value);
		images.push(`<img src="Dice Image/${value}.png" alt = "Dice ${value}">`)
		
	}
diceResult.textContent = `Dice : ${values.join(',')}`
diceImage.innerHTML = images.join('');
	}

