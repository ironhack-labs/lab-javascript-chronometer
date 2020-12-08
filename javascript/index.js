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
let printTimeInterval = 0;

function printTime() {
  printTimeInterval = setInterval(() => {
    printMinutes();
    printSeconds();
    printMilliseconds();
  }, 10)
}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()).slice(0, 1);
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()).slice(1)
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()).slice(0, 1);
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()).slice(1)
}

// ==> BONUS
function printMilliseconds() {
  milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.milliseconds).slice(0, 1);
  milUni.innerHTML = chronometer.twoDigitsNumber(chronometer.milliseconds).slice(1);
}

function printSplit() {
  let newLi = document.createElement("li");
  let newContent = document.createTextNode(chronometer.splitClick());
  newLi.appendChild(newContent); //añade texto al li creado. 
  splits.appendChild(newLi); // añade el elemento creado y su contenido al DOM 
}

function clearSplits() {
  while (splits.firstChild) {
    splits.removeChild(splits.firstChild);
  }
}

function setStopBtn() {
  clearInterval(printTimeInterval);
  chronometer.stopClick()
}

function setSplitBtn() {
  printSplit()
}

function setStartBtn() {
  chronometer.startClick(printTime());

}

function setResetBtn() {
  clearSplits()
  chronometer.currentTime = 0;
  chronometer.milliseconds = 0;
  minDec.innerHTML = 0;
  minUni.innerHTML = 0;
  secDec.innerHTML = 0;
  secUni.innerHTML = 0;
  milDec.innerHTML = 0;
  milUni.innerHTML = 0;
  setStopBtn(btnLeft)
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === 'START') {
    btnLeft.innerHTML = 'STOP'
    btnRight.innerHTML = 'SPLIT'
    setStartBtn(btnLeft)
  } else {
    btnLeft.innerHTML = 'START';
    btnRight.innerHTML = 'RESET';
    setStopBtn(btnLeft);
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML === 'RESET') {
    setResetBtn(btnRight);
  } else {
    setSplitBtn(btnRight);
  }
});