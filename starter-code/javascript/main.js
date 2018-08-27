var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits 		= document.getElementById('splits');


function printTime(time) {
	printMinutes(time.minutes);
	printSeconds(time.seconds);
}

function printMinutes(minutes) {
	var minutesSplitted = minutes.split("");
	minDec.innerHTML = minutesSplitted[0];
	minUni.innerHTML = minutesSplitted[1];
}

function printSeconds(seconds) {
	var secondsSplitted = seconds.split("");
	secDec.innerHTML = secondsSplitted[0];
	secUni.innerHTML = secondsSplitted[1];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
	chronometer.stopClick();
}

function setSplitBtn() {
	var node = document.createElement('li');
	var textNode = document.createTextNode('10:20');
	node.appendChild(textNode);
	splits.appendChild(node);
}

function setStartBtn() {
	chronometer.startClick();
}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

	if(btnLeft.classList.contains('stop')){
		btnLeft.classList.remove('btn', 'stop');
		btnLeft.classList.add('btn','start');
		btnRight.classList.remove('btn', 'split');
		btnRight.classList.add('btn','reset');
		btnRight.innerHTML ='RESET';
		btnLeft.innerHTML ='START';
		setStopBtn();
	}else if(btnLeft.classList.contains('start')){
		btnLeft.classList.remove('btn', 'start');
		btnLeft.classList.add('btn','stop');
		btnRight.classList.remove('btn', 'reset');
		btnRight.classList.add('btn','split');
		btnRight.innerHTML ='SPLIT';
		btnLeft.innerHTML ='STOP';
		setStartBtn();
	}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
	
	if(btnRight.classList.contains('split')){
		setSplitBtn();
	}
});
