const submit = document.querySelector('.btn');
const celsius = document.querySelector('.celsius');
const fahrenheit = document.querySelector('.fahrenheit');
const kelvin = document.querySelector('.kelvin');
const weatherImage = document.querySelector('.weatherImage');

let lastEdit = '';

//conditionImage

const conditionImage = {
	extraCold: 'https://images.unsplash.com/photo-1477601263568-180e2c6d046e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHdpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
	cold: ' https://images.unsplash.com/photo-1483309830935-35efd1b07946?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHdpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
	normalCold: 'https://images.unsplash.com/photo-1610296500882-9a3a71730bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
	// normal: ,
	normal: 'https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
	warm: 'https://images.unsplash.com/photo-1522046310824-b844b4b5806f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGRlc2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
	desert: 'https://images.unsplash.com/photo-1514471244491-6fb96fcdf04f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGRlc2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
	lava: 'https://images.unsplash.com/photo-1618962059960-92252801e4d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGxhdmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
};

// updateLastEdited

const updateLastEdited = () => {
	celsius.addEventListener('keyup', (e) => {
		lastEdit = 'celsius';
	});

	fahrenheit.addEventListener('keyup', (e) => {
		lastEdit = 'fahrenheit';
	});

	kelvin.addEventListener('keyup', (e) => {
		lastEdit = 'kelvin';
	});
};

updateLastEdited();

// updateImage
const updateImage = (temp) => {
	if (temp <= -40) {
		weatherImage.setAttribute('src', conditionImage.extraCold);
	} else if (temp > -40 && temp <= 0) {
		weatherImage.setAttribute('src', conditionImage.cold);
	} else if (temp > 0 && temp <= 25) {
		weatherImage.setAttribute('src', conditionImage.normal);
	} else if (temp > 25 && temp <= 45) {
		weatherImage.setAttribute('src', conditionImage.warm);
	} else if (temp > 45 && temp <= 65) {
		weatherImage.setAttribute('src', conditionImage.desert);
	} else if (temp > 65) {
		weatherImage.setAttribute('src', conditionImage.lava);
	}
};

// convert

const convert = (lastEdited) => {
	//celsius
	if (lastEdited === 'celsius') {
		const fValue = (parseFloat(celsius.value) * 9) / 5 + 32;
		const kValue = parseFloat(celsius.value) + 273;

		fahrenheit.value = Math.floor(fValue);
		kelvin.value = Math.floor(kValue);
	}
	//fahrenheit
	else if (lastEdited === 'fahrenheit') {
		const cValue = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
		const kValue = ((parseFloat(fahrenheit.value) - 32) * 5) / 9 + 273;

		celsius.value = Math.floor(cValue);
		kelvin.value = Math.floor(kValue);
	}
	//kelvin
	else if (lastEdited === 'kelvin') {
		const cValue = parseFloat(kelvin.value) - 273;
		const fValue = (parseFloat(kelvin.value) - 273) * 1.8 + 32;

		celsius.value = Math.floor(cValue);
		fahrenheit.value = Math.floor(fValue);
	}
	// other
	else {
		alert(' Enter Value ');
	}
};

// submit
submit.addEventListener('click', (e) => {
	convert(lastEdit);

	let temp = '';
	if (lastEdit === 'celsius') {
		temp = celsius.value;
	} else if (lastEdit === 'fahrenheit') {
		temp = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
	} else if (lastEdit === 'kelvin') {
		temp = parseFloat(kelvin.value) - 273;
	}

	updateImage(temp);
});
