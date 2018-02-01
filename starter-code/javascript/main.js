var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime(minutes, seconds) {
	if (minutes > 0) {
		this.printMinutes(minutes);
	}
	this.printSeconds(seconds);
	// chronometer.startClick();
	// chronometer.twoDigitsNumber();
// 	printMinutes(minutes);
// 	printSeconds(seconds);
}

function printMinutes(minutes) {
	minDec.innerHTML = minutes[0];
	minUni.innerHTML = minutes[1];
}

function printSeconds(seconds) {
	// chronometer.setSeconds();
	secDec.innerHTML = seconds[0];
	secUni.innerHTML = seconds[1];
}

function printMilliseconds() {

}

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

// Start/Stop Button
// var bool = true;
btnLeft.addEventListener('click', function () {
	if(btnLeft.className.indexOf('start')>0){
		chronometer.startClick();
	}
	else {
		chronometer.stopClick();
	}
	// if (bool === true) {
	// 	chronometer.startClick();
	// 	btnLeft.classList.add('stop');
	// 	btnLeft.innerHTML = "STOP"
	// 	btnRight.classList.add('split');
	// 	btnRight.innerHTML = "SPLIT";
	// 	// setStartBtn();
	// 	bool = false;
	// } else {
	// 	btnLeft.classList.remove('stop');
	// 	btnLeft.innerHTML = "START"
	// 	btnRight.classList.remove('split');
	// 	btnRight.innerHTML = "Reset"
	// 	setStopBtn();
	// 	bool = true;
	// }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
