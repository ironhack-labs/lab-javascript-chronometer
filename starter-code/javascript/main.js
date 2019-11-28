var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
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
	item.innerText = chronometer.splitClick();
}

function clearSplits() {}

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
			console.log(chronometer.currentTime);
			printTime();
		}, 1000);
	}
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
	printSplit();
});
