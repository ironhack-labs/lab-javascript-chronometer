

const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime(myChronometer) {
	
	const seconds = myChronometer.computeTwoDigitNumber(myChronometer.getSeconds());
	const minutes = myChronometer.computeTwoDigitNumber(myChronometer.getMinutes());
	
	printSeconds(seconds);
	printMinutes(minutes);
}

function getDec(time){
	return time.charAt(0);
}

function getUni(time) {
	return time.charAt(1);
}

function printMinutes(minutes) {
	minUniElement.innerHTML = getUni(minutes);
	minDecElement.innerHTML = getDec(minutes)
}

function printSeconds(seconds) {
	secUniElement.innerHTML = getUni(seconds);
	secDecElement.innerHTML = getDec(seconds);
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

function setStopBtn(btnLeft) {
	btnLeft.classList.remove("start");
	btnLeft.classList.add("stop");
	btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
	// ... your code goes here
}

function setStartBtn(btnLeft) {
	btnLeft.classList.remove("stop");
	btnLeft.classList.add("start");
	btnLeft.innerHTML = "START"
}

function setResetBtn() {
	// ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
	
	if (btnLeftElement.classList.contains('start')){
		
		chronometer.start();
		setStopBtn(btnLeftElement);
		window.setInterval(() => {
			printTime(chronometer);
		}, 1000);
	}
	else{
		
		chronometer.stop();
		setStartBtn(btnLeftElement);
	}
	

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
	
});
