const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

// id="btnLeft" class="btn start"

function printTime() {
	console.log('start');
	printMinutes();
	printSeconds();
}

function printMinutes() {
	// ... your code goes here
}

function printSeconds() {
	// ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
	// ... your code goes here
}

function printSplit() {
	// ... your code goes here
}

function clearSplits() {
	// ... your code goes here
}

function setStopBtn() {
	console.log('stop');
	// ... your code goes here
}

function setSplitBtn() {
	// ... your code goes here
}

function setStartBtn() {
	// ... your code goes here
}

function setResetBtn() {
	console.log('reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
	document.querySelector('.btn start');
	return printTime();
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
	document.querySelector('.btn reset');
	return setResetBtn();
});
