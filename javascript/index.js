const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

//ITERATION 2

// Changing buttons texts
btnLeft.addEventListener('click', () => {
  btnLeft.classList.toggle('stop');
  btnRight.classList.toggle('split');
  if (btnLeft.innerHTML === 'START') {
    btnLeft.innerHTML = 'STOP';
    chronometer.startClick(printTime);
    btnRight.innerHTML = 'SPLIT';
  } else {
    btnLeft.innerHTML = 'START';
    chronometer.stopClick();
    btnRight.innerHTML = 'RESET';
  }
});

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

// Print our chronometer
function printTime() {
  setInterval(() => {
    secDec.innerHTML = printSeconds();
    secUni.innerHTML = "";
    minDec.innerHTML = printMinutes();
    minUni.innerHTML = "";
    milDec.innerHTML = printMilliseconds();
    milUni.innerHTML = "";
  }, 1000);
}

function printMinutes() {
  return chronometer.twoDigitsNumber(chronometer.getMinutes());
}

function printSeconds() {
  return chronometer.twoDigitsNumber(chronometer.getSeconds());
}

//ITERATION 3
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML === 'SPLIT') {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(chronometer.splitClick()));
    splits.appendChild(li);

 // console.log(chronometer.splitClick());
  // ITERATION 4
  } else {
    chronometer.resetClick();
    splits.innerHTML ="";
  }
});

// ==> BONUS
function printMilliseconds() {
   return chronometer.twoDigitsNumber(chronometer.getMilliseconds());
}

function printSplit() {
return chronometer.splitClick();
}

function clearSplits() {
return chronometer.resetClick();
}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
}