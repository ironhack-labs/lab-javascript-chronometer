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
let timer;

//clock only displays 1/100 of a second so only needed to updated page every 10 milliseconds.
function printTime() {
  timer = setInterval(() => {
    timerDisplay()
  }, 10);
}

//created timerDisplay function to simplify code
function timerDisplay() {
  minDec.innerText = printMinutes()[0];
  minUni.innerText = printMinutes()[1];
  secDec.innerText = printSeconds()[0];
  secUni.innerText = printSeconds()[1];
  milDec.innerText = printMilliseconds()[0];
  milUni.innerText = printMilliseconds()[1];
}

function printMinutes() {
  return chronometer.getMinutes();
}

function printSeconds() {
  return chronometer.getSeconds();
}

// ==> BONUS
function printMilliseconds() {
  return chronometer.getMilliseconds();
}

function printSplit() {
  let split = chronometer.splitClick(chronometer.getMinutes(), chronometer.getSeconds());
  let node = document.createElement("LI");
  let textnode = document.createTextNode(split);
  node.appendChild(textnode);
  splits.appendChild(node);
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.innerText = "STOP";
}

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.innerText = "SPLIT";
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.innerText = "START";
}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.innerText = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.className === "btn start") {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
    printTime();
  } else {
    chronometer.stopClick();
    clearInterval(timer);
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.className === 'btn reset') {
    chronometer.resetClick();
    timerDisplay();
    clearSplits();
  } else {
    printSplit();
  }
});