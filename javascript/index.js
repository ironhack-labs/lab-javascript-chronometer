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
//get ordered list
let splitList = document.getElementById("splits");

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  minDec.textContent = Math.floor(chronometer.getMinutes()/10);
  minUni.textContent = chronometer.getMinutes()%10;
  
}

function printSeconds() {
  secDec.textContent = Math.floor(chronometer.getSeconds()/10);
  secUni.textContent = chronometer.getSeconds()%10;

  console.log("check ", chronometer.getSeconds())
}

// ==> BONUS
function printMilliseconds() {

}

function printSplit() {
  const item = document.createElement("li");
  item.textContent = chronometer.splitClick();
  splitList.appendChild(item);
}

function clearSplits() {

  splitList.innerHTML ="";
}

function setStopBtn() {
  btnLeft.textContent = "STOP";
  btnLeft.className = "btn stop";
}

function setSplitBtn() {
  btnRight.textContent = "SPLIT";
  btnRight.className = "btn split";
}

function setStartBtn() {
  btnLeft.textContent = "START";
  btnLeft.className = "btn start";
}

function setResetBtn() {
  btnRight.textContent = "RESET";
  btnRight.className = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.textContent == "START") {
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
btnRight.addEventListener('click', () => {
  if (btnRight.textContent == "SPLIT") {
    printSplit();
  } else {
    clearSplits();
    chronometer.resetClick()
  }
});
