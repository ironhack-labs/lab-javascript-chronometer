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

function printTime() {
	printSeconds();
	printMinutes();
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

function printMilliseconds() {}

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
}

function setStopBtn() {
	btnLeft.classList.toggle('stop');
	btnLeft.classList.toggle('start');
	btnLeft.textContent = 'STOP';
}

function setSplitBtn() {
	btnRight.classList.toggle('split');
	btnRight.classList.toggle('reset');
	btnRight.textContent = 'SPLIT';
}

function setStartBtn() {
	btnLeft.classList.toggle('stop');
	btnLeft.classList.toggle('start');
	btnLeft.textContent = 'START';
}

function setResetBtn() {
	btnRight.classList.toggle('split');
	btnRight.classList.toggle('reset');
	btnRight.textContent = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
	if (btnLeft.classList.contains('stop')) {
		setStartBtn();
		setResetBtn();
		chronometer.stopClick();
		clearInterval(intervalId);
	} else {
		setStopBtn();
		setSplitBtn();
		chronometer.startClick();
		intervalId = setInterval(() => {
			printTime();
		}, 1000);
	}
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
	if (btnRight.classList.contains('split')) {
		printSplit();
	} else {
		chronometer.resetClick();
		clearSplits();
	}
});
