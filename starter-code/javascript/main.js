var chronometer = new Chronometer();

var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

// Start/Stop Button
btnLeft.addEventListener('click', function () {
	if (btnLeft.className === "btn start") {
		btnLeft.className = "btn stop";
		btnLeft.innerHTML = "STOP";

		btnRight.className = "btn split";
		btnRight.innerHTML = "SPLIT";

		chronometer.startClick()
		printTime();

	} else {
		btnLeft.className = "btn start";
		btnLeft.innerHTML = "START";

		btnRight.className = "btn reset";
		btnRight.innerHTML = "RESET";

		chronometer.stopClick();
	}
});


function printTime() {
	setInterval(printMinutes,60000)
	setInterval(printSeconds,1000)
}

function printMinutes() {
	minutes = chronometer.getMinutes()
	var minutes = chronometer.twoDigitsNumber(minutes);

	minDec.innerHTML = minutes[0]
	minUni.innerHTML = minutes[1]
}

function printSeconds() {
	var seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());

	secDec.innerHTML = seconds[0];
	secUni.innerHTML = seconds[1];
}

/*
function printMilliseconds() {
	var milliseconds = chronometer.twoDigitsNumber(chronometer.intervalID);

	milDec.innerHTML = milliseconds[0];
	milUni.innerHTML = milliseconds[1];
}
*/

// Reset/Split Button
btnRight.addEventListener('click', function () {

});

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}