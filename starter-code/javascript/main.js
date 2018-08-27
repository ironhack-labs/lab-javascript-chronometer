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
	var time = chronometer.setTime();
	var node = document.createElement('li');
	var textNode = document.createTextNode(time.minutes + ':' + time.seconds);
	node.appendChild(textNode);
	splits.appendChild(node);
}

function clearSplits() {
	chronometer.resetClick();
	chronometer.setTime();
	
	while(splits.firstChild){
		splits.removeChild(splits.firstChild);
	}
}

function setStopBtn() {
	chronometer.stopClick();
	btnLeft.classList.remove('btn', 'stop');
	btnLeft.classList.add('btn','start');
	btnLeft.innerHTML ='START';
}

function setSplitBtn() {
	btnRight.classList.remove('btn', 'reset');
	btnRight.classList.add('btn','split');
	btnRight.innerHTML ='SPLIT';
}

function setStartBtn() {
	chronometer.startClick();
	btnLeft.classList.remove('btn', 'start');
	btnLeft.classList.add('btn','stop');
	btnLeft.innerHTML ='STOP';
}

function setResetBtn() {
	btnRight.classList.remove('btn', 'split');
	btnRight.classList.add('btn','reset');
	btnRight.innerHTML ='RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

	if(btnLeft.classList.contains('stop')){
		setResetBtn();
		setStopBtn();
	}else if(btnLeft.classList.contains('start')){
		setSplitBtn();
		setStartBtn();
	}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
	
	if(btnRight.classList.contains('split')){
		printSplit();
	}else if(btnRight.classList.contains('reset')){
		clearSplits();
	}
});
