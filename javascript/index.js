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
}

function printMinutes() {
	minUniElement.innerText = chronometer.getMinutes() % 10;
	minDecElement.innerText = Math.floor(chronometer.getMinutes() / 10);
}

function printSeconds() {
	secUniElement.innerText = chronometer.getSeconds() % 10; 
	secDecElement.innerText = Math.floor(chronometer.getSeconds() / 10); 
}

// ==> BONUS
function printMilliseconds() {
	// ... your code goes here
}

function printSplit() {
	splitsElement.innerHTML += `<li>${Math.floor(chronometer.getMinutes() / 10)}${chronometer.getMinutes() %
		10}:${Math.floor(chronometer.getSeconds() / 10)}${chronometer.getSeconds() % 10}</li>`;
}

function clearSplits() {
	splitsElement.innerHTML = '';
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
	// 	Set the btnLeft button with the text STOP, and the class btn stop.
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
	} else if (btnRightElement.className === 'btn split') {
		chronometer.split();
		printSplit();
	}
});
