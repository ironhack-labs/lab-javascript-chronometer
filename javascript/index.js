const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
	printMinutes();
	printSeconds();
}

function printMinutes() {
	let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
	minDec.innerHTML = minutes[0];
	minUni.innerHTML = minutes[1];
}

function printSeconds() {
	let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
	secDec.innerHTML = seconds[0];
	secUni.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
	// ... your code goes here
}

function printSplit() {
	let liElem = document.createElement('li');
	liElem.innerHTML = chronometer.splitClick();
	splits.appendChild(liElem);
}

function clearSplits() {
	splits.innerHTML = '';
}

function setStopBtn(event) {
	event.target.classList.toggle("start");
	event.target.classList.toggle("stop");
	event.target.innerHTML = "STOP";
}

function setSplitBtn() {
	btnRight.classList.toggle("reset");
	btnRight.classList.toggle("split");
	btnRight.innerHTML = "SPLIT";
}

function setStartBtn(event) {
	event.target.classList.toggle("start");
	event.target.classList.toggle("stop");
	event.target.innerHTML = "START";
}

function setResetBtn() {
	btnRight.classList.toggle("reset");
	btnRight.classList.toggle("split");
	btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener("click", (event) => {
	let printTimeIntervalId;
	if ([...event.target.classList].includes("start")) {
		//Button left changes
		setStopBtn(event);
		//Button right changes
		setSplitBtn();
		//Calling functions
		chronometer.startClick();
		printTimeIntervalId = setInterval(() => {
			printTime();
		}, 1000);
	} else {
		//Button left changes
		setStartBtn(event);
		//Button right changes
		setResetBtn();
		chronometer.stopClick();
		clearInterval(printTimeIntervalId);
	}
});

// Reset/Split Button
btnRight.addEventListener("click", (event) => {
	if ([...event.target.classList].includes("reset")) {
		//Resets the clock
		chronometer.resetClick();
		printTime();
		clearSplits();
	} else {
		printSplit();
	}
});
