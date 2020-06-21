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
	setInterval(() => {
		secDec.innerHTML = printSeconds();
		secUni.innerHTML = "";
		minDec.innerHTML = printMinutes();
		minUni.innerHTML = "";
	}, 1000);
}

function printMinutes() {
	return chronometer.twoDigitsNumber(chronometer.getMinutes());
}

function printSeconds() {
	return chronometer.twoDigitsNumber(chronometer.getSeconds());
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

function setStopBtn() {
	// ... your code goes here
}

function setSplitBtn() {
	// ... your code goes here
}

function setStartBtn() {
	// ... your code goes here
}

function setResetBtn() {
	// ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
	if (btnLeft.classList.contains("start")) {
		chronometer.startClick(() => {
			chronometer.currentTime++;
		});
		printTime();
		btnLeft.innerHTML = "STOP";
		btnLeft.className = "btn stop";
		btnRight.innerHTML = "SPLIT";
		btnRight.className = "btn split";
	} else {
		btnLeft.innerHTML = "START";
		btnLeft.className = "btn start";
		btnRight.innerHTML = "RESET";
		btnRight.className = "btn reset";
		chronometer.stopClick();
	}
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
	if (btnRight.classList.contains("reset")) {
		chronometer.resetClick();
		splits.innerHTML = "";
	} else {
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(chronometer.splitClick()));
		splits.appendChild(li);
	}
});
