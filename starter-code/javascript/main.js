var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');

function printTime() {
	setInterval(function() {
		printMinutes();
		printSeconds();
	}, 1000);
}

function printMinutes() {
	minDec.innerHTML = chronometer.minutes[0];
	minUni.innerHTML = chronometer.minutes[1];
}

function printSeconds() {
	secDec.innerHTML = chronometer.seconds[0];
	secUni.innerHTML = chronometer.seconds[1];
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
	if (btnLeft.classList.contains('start')) {
		btnLeft.innerHTML = 'STOP';
		btnLeft.className = 'btn stop';
		btnRight.innerHTML = 'SPLIT';
		btnRight.className = 'btn split';
		chronometer.startClick();
		printTime();
	} else {
		btnLeft.innerHTML = 'START';
		btnLeft.className = 'btn start';
		btnRight.innerHTML = 'RESET';
		btnRight.className = 'btn reset';
		chronometer.stopClick();
	}
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
	if (btnRight.classList.contains('split')) {
		var element = document.createElement('li');
		var parent = document.getElementById('splits');
		parent.appendChild(element);
		element.innerHTML = chronometer.minutes + ':' + chronometer.seconds;
	} else {
		chronometer.resetClick();
		var parent = document.getElementById('splits');
		parent.innerHTML = '';
		minDec.innerHTML = "0";
		minUni.innerHTML = "0";
		secDec.innerHTML = "0";
		secUni.innerHTML = "0";
		
	}
});
