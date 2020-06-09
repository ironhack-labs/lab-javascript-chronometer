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
let list = document.querySelector("ol");

function printTime() {
  setInterval(printSeconds, 1000)
  setInterval(printMinutes, 60000)

}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const newLi = document.createElement("li");
  newLi.innerHTML = chronometer.splitClick(chronometer.getMinutes(), chronometer.getSeconds())
  list.appendChild(newLi)
}

function clearSplits() {
  document.querySelectorAll("li").forEach(li => li.remove())
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP"
  btnRight.classList.toggle("split", true)
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT"
}

function setStartBtn() {
  btnLeft.innerHTML = "START"
}

function setResetBtn() {
  btnRight.innerHTML = "RESET"
  btnRight.classList.toggle("split", false)
}

// Start/Stop Button
let flag1 = true;
btnLeft.addEventListener('click', (e) => {
  e.target.classList.toggle("stop", flag1);
  if(flag1) {
    setStopBtn()
    setSplitBtn()
    chronometer.startClick(printTime);

    
  } else {
    setStartBtn()
    setResetBtn()

    chronometer.stopClick();
  } 
  flag1 = !flag1;
});

// Reset/Split Button
let flag2 = true;
btnRight.addEventListener('click', (e) => {
  if([...e.target.classList].includes("split")) {
    printSplit();
  } else {
    chronometer.resetClick();
    clearSplits();
  } 
});

