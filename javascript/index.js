

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
	const milliseconds = myChronometer.computeTwoDigitNumber(myChronometer.getMilliSeconds());
	printSeconds(seconds);
	printMinutes(minutes);
	printMilliseconds(milliseconds)
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
function printMilliseconds(milliseconds) {
	milUniElement.innerHTML = getUni(milliseconds);
	milDecElement.innerHTML = getDec(milliseconds)
}

function printSplit(myChronometer) {
	
	const splitTime = myChronometer.split()
	const splitItem = document.createElement('li')
	let child = splitsElement.appendChild(splitItem);
	child.innerHTML = splitTime;
}

function clearSplits(myChronometer) {
	
	let lastChild = splitsElement.lastElementChild;

	while (lastChild){
		splitsElement.removeChild(lastChild);
		lastChild = splitsElement.lastElementChild;
	}

}

function setStopBtn(btnLeft) {
	btnLeft.classList.remove("start");
	btnLeft.classList.add("stop");
	btnLeft.innerHTML = "STOP";
}

function setSplitBtn(btnRight) {
	btnRight.classList.remove("reset");
	btnRight.classList.add("split");
	btnRight.innerHTML = "SPLIT";
}

function setStartBtn(btnLeft) {
	btnLeft.classList.remove("stop");
	btnLeft.classList.add("start");
	btnLeft.innerHTML = "START";
}

function setResetBtn(btnRight) {
	btnRight.classList.remove("split");
	btnRight.classList.add("reset");
	btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
	
	if (btnLeftElement.classList.contains('start')){
		
		chronometer.start();
		setStopBtn(btnLeftElement);
		setSplitBtn(btnRightElement);
		window.setInterval(() => {
			printTime(chronometer);
		}, 1000);
	}
	else{
		
		chronometer.stop();
		setStartBtn(btnLeftElement);
		setResetBtn(btnRightElement);
	}
	

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
	
	if (btnRightElement.classList.contains('reset')){
		
		chronometer.reset();
		printTime(chronometer);
		clearSplits(chronometer);
		
	}
	else{

		printSplit(chronometer);

	}
});
