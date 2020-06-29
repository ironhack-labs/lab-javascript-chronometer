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
let parentList = document.getElementById("splits");


function printTime() {
  setInterval(() => {
  secDec.innerHTML = printSeconds();
  minDec.innerHTML = printMinutes();
  milDec.innerHTML = printMilliseconds();
  secUni.innerHTML = "";
  minUni.innerHTML = "";
  milUni.innerHTML = "";
},10)
}

function printMinutes() {
  return chronometer.twoDigitsNumber(chronometer.getMinutes());
};

function printSeconds() {
  return chronometer.twoDigitsNumber(chronometer.getSeconds());
};

// ==> BONUS
function printMilliseconds() {
  return chronometer.twoDigitsNumber(chronometer.getMilli());
}

function printSplit() {
  chronometer.startClick(printTime())
}

function clearSplits() {
  parentList.innerHTML = "";
}

function setStopBtn() {
  btnLeft.innerHTML = "START"
  btnRight.innerHTML = "RESET"
}

function setSplitBtn() {
  let listItem = document.createElement("li");

  listItem.innerHTML = chronometer.splitClick();
  parentList.appendChild(listItem);
}

function setStartBtn() {
  btnLeft.innerHTML = "STOP"
  btnRight.innerHTML = "SPLIT"
}

function setResetBtn() {
  chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
    btnLeft.classList.toggle('stop')
    btnRight.classList.toggle('split')

    if(btnLeft.innerHTML === "START"){
      printSplit();
      setStartBtn();
    } else {
      chronometer.stopClick()
      setStopBtn()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', () => { 
  if(btnRight.innerHTML === "SPLIT"){
    setSplitBtn()
  } else {
    setResetBtn();
    clearSplits();
  }
});
