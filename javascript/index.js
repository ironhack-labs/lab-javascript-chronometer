const chronometer = new Chronometer();


// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
console.log(btnLeft)
// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime(minutes, seconds) {
  gettMinutes(minutes);
  gettSeconds(seconds);
}

function printMinutes() {
minDec.innerHTML = getMinutes(minutes[0])
minUni.innerHTML= gettMinutes(minutes[1])
}

function printSeconds() {
secDec.innerHTML = getSeconds(seconds[0])
secUni.innerHTML= getSeconds(seconds[1])
}

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
  btnLeft.innerHTML = 'STOP';
  btnLeft.setAttribute('class', 'btn stop');
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.setAttribute('class', 'btn split');
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
  btnLeft.setAttribute ('class', 'btn start')
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.setAttribute('class', 'btn reset');
}

// Start/Stop Button

btnLeft.addEventListener('click', function(){
 if (btnLeft.innerText === 'START') {
  setStopBtn()
  chronometer.startClick();

 }
else if (btnLeft.innerHTML === 'STOP') {
  setStartBtn()
  chronometer.stopClick()
}
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerText === 'SPLIT') {
    setResetBtn()
  }
  else if (btnRight.innerText === 'RESET') {
    setSplitBtn()
  }
});

console.log(`${chronometer.getMinutes()}, ${chronometer.getSeconds()}`)
console.log(`${chronometer.currentTime}`)