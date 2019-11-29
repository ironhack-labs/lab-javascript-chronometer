// Chronometer object
let chronometer = new Chronometer();

// DOM elements variables
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splitList = document.querySelector('#splits');

let intervalID;

function printTime() {
	printSeconds();
	printMinutes();
	printMilliseconds();
}

function printMinutes() {
	let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
	minDec.textContent = minutes[0];
	minUni.textContent = minutes[1];
}

function printSeconds() {
	let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
	secDec.textContent = seconds[0];
	secUni.textContent = seconds[1];
}

function printMilliseconds() {
	let milliseconds = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
	milDec.textContent = milliseconds[0];
	milUni.textContent = milliseconds[1];
}

function printSplit() {
	let item = document.createElement('li');
	splitList.appendChild(item);
	item.textContent = chronometer.splitClick();
}

function clearSplits() {
	splitList.innerHTML = '';
	minDec.textContent = '0';
	minUni.textContent = '0';
	secDec.textContent = '0';
	secUni.textContent = '0';
	milDec.textContent = '0';
	milUni.textContent = '0';
}

function handleLeftBtn() {
	btnLeft.classList.toggle('stop');
	btnLeft.innerHTML = btnLeft.classList.contains('stop') ? 'STOP' : 'START';
}

function handleRightBtn() {
	btnRight.classList.toggle('split');
	btnRight.innerHTML = btnRight.classList.contains('split') ? 'SPLIT' : 'RESET';
}

function startChronometer() {
	handleLeftBtn();
	handleRightBtn();
	chronometer.startClick();
	intervalID = setInterval(() => {
		printTime();
	}, 1);
}

function stopChronometer() {
	handleLeftBtn();
	handleRightBtn();
	chronometer.stopClick();
	clearInterval(intervalID);
}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
	btnLeft.classList.contains('stop') ? stopChronometer() : startChronometer();
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
	btnRight.classList.contains('split') ? printSplit() : (clearSplits(), chronometer.resetClick());
});
