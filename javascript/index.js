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

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds()
}

function printMinutes() {
  minUni.textContent=v[1];
  minDec.textContent=v[0];
}

function printSeconds() {
  secUni.textContent=v[1];
  ecDec.textContent=v[0];
}


// ==> BONUS
function printMilliseconds() {
  milDec.innerHTML = chronometer.twoDigitsNumber(ms)[0];
	milUni.innerHTML = chronometer.twoDigitsNumber(ms)[1];
}

function printSplit() {
  let splitValue=document.createElement("li");
  splitValue.innerHTML=newChrono.split();
  parent.appendChild(splitValue);
}

function clearSplits() {
  newChrono.reset();
  parent.textContent = '';
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
	btnLeft.classList.remove("start");
	btnLeft.classList.add("stop")
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
	btnRight.classList.remove("reset");
	btnRight.classList.add("split");
 
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
	btnLeft.classList.remove("stop");
	btnLeft.classList.add("start");
}


function setResetBtn() {
  btnRight.innerHTML = "RESET";
	btnRight.classList.remove("split");
	btnRight.classList.add("reset");
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeft.classList.contains("start")) {
		setStopBtn();
		setSplitBtn();
		chronometer.startClick(printTime);
	} else {
		setStartBtn();
		setResetBtn();
		chronometer.stopClick();
	}
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRight.classList.contains("split")) {
		printSplit()
	} else {
		chronometer.resetClick();
		minDec.innerHTML = 0;
		minUni.innerHTML = 0;
		secDec.innerHTML = 0;
		secUni.innerHTML = 0;
		clearSplits();
	}
});
