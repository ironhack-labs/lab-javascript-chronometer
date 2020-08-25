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


}

function printMinutes() {
  if (chronometer.currentTime < 600) {
    minUni.textContent = chronometer.twoDigitsNumber()[0]

  } else if (chronometer.currentTime >= 600) {
    minDec.textContent = chronometer.twoDigitsNumber()[0]
    minUni.textContent = chronometer.twoDigitsNumber()[1]


  }



}

function printSeconds() {
  secUni.textContent = chronometer.splitClick()[chronometer.splitClick().length - 1]
  secDec.textContent = chronometer.splitClick()[chronometer.splitClick().length - 2]

}
printSeconds()

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

  if (btnLeft.innerText === "STOP") {
    btnLeft.innerText = "START"
    btnLeft.classList.remove("stop")
  }

}

function setSplitBtn() {
  if (btnRight.innerText === "SPLIT") {
    btnRight.innerText = "RESET"
    btnRight.classList.remove("split")
  }

}

function setStartBtn() {
  if (btnLeft.innerText === "START") {
    btnLeft.innerText = "STOP"
    btnLeft.classList.add("stop")
    chronometer.startClick(printTime())
    setResetBtn()

  } else {

    setStopBtn()
    setSplitBtn()
  }
}

function setResetBtn() {
  if (btnRight.innerText === "RESET") {
    btnRight.innerText = "SPLIT"
    btnRight.classList.add("split")

  }


}


// Start/Stop Button
btnLeft.addEventListener('click', () => {
  setStartBtn()
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});
