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
  printMilliseconds();
}

function printMinutes() {
  minDec.innerText = chronometer.getMinutes()[0];
  minUni.innerText = chronometer.getMinutes()[1];
  return chronometer.getMinutes();
}

function printSeconds() {
  secDec.innerText = chronometer.getSeconds()[0];
  secUni.innerText = chronometer.getSeconds()[1];
  return chronometer.getSeconds();
}

// ==> BONUS
// function printMilliseconds() {
//   milDec.innerText = chronometer.getMilliseconds()[0];
//   milUni.innerText = chronometer.getMilliseconds()[1];
//   return chronometer.getMilliseconds();
// }

function printSplit() {
  let splitsLi = document.createElement('li');
  splitsLi.innerHTML = `${printMinutes()}:${printSeconds()}`
  splitsLi.classList.add('split-time');
  splits.appendChild(splitsLi);
}

function clearSplits() {
  let toBeDeletedLi = document.querySelectorAll('.split-time');
  toBeDeletedLi.forEach((li) => {
    li.remove()
  })
}

function setStopBtn() {
  btnLeft.setAttribute("class", "btn stop")
  btnLeft.innerText = "STOP"
}

function setSplitBtn() {
  btnRight.setAttribute("class", "btn split")
  btnRight.innerText = "SPLIT"
}

function setStartBtn() {
  btnLeft.setAttribute("class", "btn start")
  btnLeft.innerText = "START"
}

function setResetBtn() {
  btnRight.setAttribute("class", "btn reset")
  btnRight.innerText = "RESET"
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  let btnLeftClass = btnLeft.getAttribute("class")

  if (btnLeftClass === "btn start") {
    chronometer.startClick(printTime);
    //chronometer.startClickMilli(printMilliseconds);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  let btnRightClass = btnRight.getAttribute("class")

  if (btnRightClass === "btn split") {
    printSplit();
  } else {
    chronometer.resetClick();
    minDec.innerText = 0;
    minUni.innerText = 0;
    secDec.innerText = 0;
    secUni.innerText = 0;
    //milDec.innerText = 0;
    //milUni.innerText = 0;
    clearSplits();
  }
});