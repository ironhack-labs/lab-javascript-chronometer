const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec'); //0
const minUniElement = document.getElementById('minUni'); //0
const secDecElement = document.getElementById('secDec'); //0
const secUniElement = document.getElementById('secUni'); //0
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
	printMinutes();
	printSeconds();
	printMilliseconds();
}

function printMinutes() {
	minUniElement.innerText = chronometer.getMinutes() % 10; //unidades
	minDecElement.innerText = Math.floor(chronometer.getMinutes() / 10); //decenas
}

function printSeconds() {
	secUniElement.innerText = chronometer.getSeconds() % 10; //unidades
	secDecElement.innerText = Math.floor(chronometer.getSeconds() / 10); //decenas
}

// ==> BONUS
function printMilliseconds() {
	// // ... your code goes here
	// milUniElement.innerText = chronometer.getMilliseconds() % 10; //unidades
	// milDecElement.innerText = Math.floor(chronometer.getMilliseconds() / 10); //decenas
}

function printSplit() {
	splitsElement.innerHTML += `<li>${Math.floor(chronometer.getMinutes() / 10)}${chronometer.getMinutes() %
		10}:${Math.floor(chronometer.getSeconds() / 10)}${chronometer.getSeconds() % 10}</li>`;

	//con appenchild y creando un elemento <li>
	// let node = document.createElement('LI');
	// let textnode = document.createTextNode(
	// 	`${Math.floor(chronometer.getMinutes() / 10)}${chronometer.getMinutes() % 10}:${Math.floor(
	// 		chronometer.getSeconds() / 10
	// 	)}${chronometer.getSeconds() % 10}`
	// );
	// node.appendChild(textnode);
	// splitsElement.appendChild(node);
}

function clearSplits() {
	splitsElement.innerHTML = '';
	//Better behaviour, not optimal...
	minUniElement.innerText = '0';
	minDecElement.innerText = '0';
	secUniElement.innerText = '0';
	secDecElement.innerText = '0';
}

function setStopBtn() {
	btnLeftElement.innerHTML = 'STOP';
	btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
	btnRightElement.innerHTML = 'SPLIT';
	btnRightElement.className = 'btn split';
}

function setStartBtn() {
	btnLeftElement.innerHTML = 'START';
	btnLeftElement.className = 'btn start';
}

function setResetBtn() {
	btnRightElement.innerHTML = 'RESET';
	btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
	// ... your code goes here
	// Set the btnLeft button with the text STOP, and the class btn stop.
	// Set the btnRight button with the text SPLIT, and the class btn split.
	if (btnLeftElement.className === 'btn start') {
		setStopBtn();
		setSplitBtn();
		chronometer.start(printTime);
	} else if (btnLeftElement.className === 'btn stop') {
		setStartBtn();
		setResetBtn();
		chronometer.stop();
	}
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
	if (btnRightElement.className === 'btn reset') {
		clearSplits();
		chronometer.reset();
	} else {
		chronometer.split();
		printSplit();
	}
});
