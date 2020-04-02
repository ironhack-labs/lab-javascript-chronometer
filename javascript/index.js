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
    minDec.textContent = `${printMinutes().charAt(0)}`
    minUni.textContent = `${printMinutes().charAt(1)}`
    secDec.textContent = `${printSeconds().charAt(0)}`
    secUni.textContent = `${printSeconds().charAt(1)}`
  }, 1000);

}


function printMinutes() {
  return chronometer.twoDigitsNumber(chronometer.getMinutes())
}


function printSeconds() {
  return chronometer.twoDigitsNumber(chronometer.getSeconds())
}

// ==> BONUS
function printMilliseconds() {
  setInterval(() => {
    milDec.textContent = `${chronometer.twoDigitsNumber(chronometer.milliSecCounter).charAt(0)}`
    milUni.textContent = `${chronometer.twoDigitsNumber(chronometer.milliSecCounter).charAt(1)}`
    
  }, 10);
}

function printSplit() {
  let newLi = document.createElement("li");
  splits.appendChild(newLi)
  newLi.innerText = `${chronometer.splitClick()}`
}

function clearSplits() {
  chronometer.resetClick();
  splits.innerHTML = ""
}

function setStopBtn() {
  btnLeft.classList.remove("start")
  btnLeft.classList.add("stop")
  btnLeft.textContent = "STOP"
}

function setSplitBtn() {
  btnRight.classList.remove("reset")
  btnRight.classList.add("split")
  btnRight.textContent = "SPLIT"
}

function setStartBtn() {
  btnLeft.classList.add("start")
  btnLeft.classList.remove("stop")
  btnLeft.textContent = "START"
}

function setResetBtn() {
  btnRight.classList.add("reset")
  btnRight.classList.remove("split")
  btnRight.textContent = "RESET"
}



// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.className.includes("start")) {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    printTime();
    printMilliseconds();

  } else {
    setStartBtn()
    setResetBtn()
    chronometer.stopClick();
  }


});


// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.className.includes("split")) {
    printSplit()

  } else {
    clearSplits()
  }

});