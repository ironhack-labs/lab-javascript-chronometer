const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
	printMinutes();
	printSeconds();
	// ... your code goes here
}

function printMinutes() {
	minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
	minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
	

	// ... your code goes here
}

function printSeconds() {
	secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
	secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];

	// ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
	// ... your code goes here
}

function printSplit() {
	splits.innerHTML +=`<li>${chronometer.splitClick()}</li>`
	// ... your code goes here
}

function clearSplits() {
	splits.innerHTML =``;

	// ... your code goes here
}

function setStopBtn() {
	btnLeft.classList.toggle('start');
	btnLeft.classList.toggle('stop');
	document.querySelector('.btn.stop').textContent="STOP";
	// ... your code goes here
}

function setSplitBtn() {
	btnRight.classList.toggle('split');
	btnRight.classList.toggle('reset');
	document.querySelector('.btn.split').textContent="SPLIT";
	// ... your code goes here
}

function setStartBtn() {
	btnLeft.classList.toggle('start');
	btnLeft.classList.toggle('stop');
	document.querySelector('.btn.start').textContent="START";
	// ... your code goes here
}

function setResetBtn() {
	btnRight.classList.toggle('split');
	btnRight.classList.toggle('reset');
	document.querySelector('.btn.reset').textContent="RESET";
	// ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
	if (document.querySelector('.btn.stop')){
		chronometer.stopClick();
		setStartBtn();
		setResetBtn();
	} else if (document.querySelector('.btn.start')){
		chronometer.startClick(printTime);
		setStopBtn();
		setSplitBtn();
	}
	
	// ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
	if(document.querySelector('.btn.reset')){
		clearSplits();
		chronometer.resetClick();
		printTime();
	} else if (document.querySelector('.btn.split')){
		printSplit();
	}
	// ... your code goes here
});
