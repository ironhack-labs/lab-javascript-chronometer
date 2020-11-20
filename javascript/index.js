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
printSeconds()
printMinutes()
}

function printMinutes() {

  minute = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minDec.innerHTML = minute[0]
  minUni.innerHTML = minute[1]

}

function printSeconds() {

  second = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secDec.innerHTML = second[0]
  secUni.innerHTML = second[1]


}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {

let li = document.createElement('li');
li.innerHTML = `${minute}:${second}`
splits.appendChild(li)

}

function clearSplits() {
  
  minDec.innerHTML = "0"
  minUni.innerHTML = "0"
  secDec.innerHTML = "0"
  secUni.innerHTML = "0"
  chronometer.currentTime = 0

  splits.innerHTML = ""

}

function setStopBtn() {
btnLeft.classList.add("stop");
btnLeft.classList.remove("start");
btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
btnRight.classList.add("split");
btnRight.classList.remove("reset");
btnRight.innerHTML = "SPLIT"
}

function setStartBtn() {
  btnLeft.classList.add("start");
  btnLeft.classList.remove("stop")
  btnLeft.innerHTML  = "START";
  printSeconds()

}

function setResetBtn() {

  if(btnLeft.innerHTML === "START") {
  btnRight.classList.add("reset");
  btnRight.classList.remove("split");
  btnRight.innerHTML = "RESET"}
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

  if (btnLeft.innerHTML === "START") {
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();

    }

else {
  chronometer.stopClick();
  setStartBtn();
  setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {

  if (btnRight.innerHTML === "RESET") {
    
  
    clearSplits();

    }

    if (btnRight.innerHTML === "SPLIT") {
      printSplit()
    }
});