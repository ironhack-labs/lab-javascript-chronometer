const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds ();
}

function printMinutes() {
  const minutes =chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  );
  minDecElement.innerText = minutesStr [0]
  minUniElement.innerText = minutesStr [1]
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )
  secUniElement.innerText = secondsStr[0]
  secUniElement.innerText = secondsStr[1]
}

// ==> BONUS
function printMilliseconds() {
  // tenemos que cambiar el intervalo y cada cuanto se produce ( en el codigo)
  const miliSecStr =chronometer.computeTwoDigitNumber(
    chronometer.getMilisenconds()
  );
  milUniElement.innerText = miliSecStr[0]
  milUniElement.innerText = miliSecStr[1]
}


function printSplit() {
 const split = document.createElement ("li");
 const time = chronometer.split();

 split.textContent = time ;
 splitsElement.appendChild (split);
}

function clearSplits() {
  splitsElement.innerHTML = "" 
}

function setStopBtn() {
  btnLeftElement.classList.remove (`start`);
 btnLeftElement.classList.add(`stop`);
  btnLeftElement.textContent = `STOP`
 
}

function setSplitBtn() {
  btnRightElement.classList.remove (`reset`);
  btnRightElement.classList.add(`split`);
   btnRightElement.textContent = `SPLIT`
}

function setStartBtn() {
  btnLeftElement.classList.remove (`stop`);
  btnLeftElement.classList.add(`start`);
   btnLeftElement.textContent = `START`
}

function setResetBtn() {
  btnRightElement.classList.remove (`split`);
  btnRightElement.classList.add(`reset`);
   btnRightElement.textContent = `RESET`
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  const isStartButton= btnLeftElement.classList.contains(`start`);
  if (isStartButton){
   chronometer.start(printTime); 
setStopBtn();
setSplitBtn ();
}
else {
  setStartBtn();
  setResetBtn();
}
});
  

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (isResetButn) {
  chronometer.reset(); 
  clearSplits();
  printTime(); //---> necesito llamarla porque al hacer el reset me tiene que printear 00 
  } else {
    printSplit ();
  }
})