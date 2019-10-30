var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var splitList = document.getElementById('splits');

function printTime() {
	printMinutes();
	printSeconds();
}

function printMinutes() {
	let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
	let minutesSplit = minutes.split('');
	minDec.innerText = minutesSplit[0];
	minUni.innerText = minutesSplit[1];
	console.log(minutes);
}

function printSeconds() {
	let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
	let secondsSplit = seconds.split('');
	secDec.innerText = secondsSplit[0];
	secUni.innerText = secondsSplit[1];
	console.log(seconds);
}

function printMilliseconds() {}

function printSplit() {
	let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
	let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
	const splitItem = document.createElement('li');
	splitItem.innerText = `${minutes}:${seconds}`;
	splitItem.onclick = function(event) {
		splitList.removeChild(event.target);
	};
	splitList.appendChild(splitItem);
}

function clearSplits() {
	splitList.innerHTML = '';
}

function setStopBtn() {
	btnLeft.innerText = 'STOP';
	btnLeft.setAttribute('class', 'btn stop');
}

function setSplitBtn() {
	btnRight.innerText = 'SPLIT';
	btnRight.setAttribute('class', 'btn split');
}

function setStartBtn() {
	btnLeft.innerText = 'START';
	btnLeft.setAttribute('class', 'btn start');
}

function setResetBtn() {
	btnRight.innerText = 'RESET';
	btnRight.setAttribute('class', 'btn reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
	if (btnLeft.className.includes('start')) {
		setStopBtn();
		setSplitBtn();
		chronometer.startClick();
		let interval = setInterval(() => {
			printTime();
			interval = chronometer.intervalId;
		}, 1000);
	} else {
		setStartBtn();
		setResetBtn();
		chronometer.stopClick();
		clearInterval(interval);
	}
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
	if (btnRight.className.includes('reset')) {
		clearSplits();
		chronometer.currentTime = 0;
		chronometer.intervalId = 0;
		printTime();
	} else {
		printSplit();
	}
});
