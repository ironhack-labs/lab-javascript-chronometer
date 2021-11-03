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
  // chronometer.start() sirve por detras de la consola(source)
  // pero no imprime cada segundo o min las siguientes funciones:
  printMinutes();
  printSeconds();
  printMilliseconds()
}

function printMinutes() {
  let mmTime = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
    // Se puede acceder como arreglos
    minDecElement.innerHTML = mmTime[0];
    minUniElement.innerHTML = mmTime[1];
}

function printSeconds() {
  let ssTime = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
    // Se puede acceder como arreglos
    secDecElement.innerHTML = ssTime[0];
    secUniElement.innerHTML = ssTime[1];
}

// ==> BONUS
function printMilliseconds() {
  let milTime = chronometer.getMilli();
  // Se puede acceder como arreglos
  milDecElement.innerHTML = milTime[0]
  milUniElement.innerHTML = milTime[1]

}


function printSplit() {
  let splitText = chronometer.split();
  // puente de JS a HTLM con CreateElement
  const li = document.createElement("li")
  /* cada que la funcion printSplit se corra (cada click)
  se va a crear un li en HTLM con el texto de la funcion
  chronometer.split()*/
  li.innerHTML = splitText
  splitsElement.appendChild(li);
}

function clearSplits() {
  let clearSp = chronometer.reset();
  minDecElement.innerHTML = clearSp;
  minUniElement.innerHTML = clearSp;
  secDecElement.innerHTML = clearSp;
  secUniElement.innerHTML = clearSp;
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP'
  btnLeftElement.setAttribute ('class','btn stop')
}

function setSplitBtn() {
  btnRightElement.innerHTML = 'SPLIT'
  btnRightElement.setAttribute ('class', 'btn split')
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START'
  btnLeftElement.setAttribute ('class','btn start')
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET'
  btnRightElement.setAttribute ('class','btn reset')
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === 'STOP' ) {
    chronometer.stop();
    setStartBtn ();
    setResetBtn ()
  } else {
    setStopBtn ()
    setSplitBtn ()
    chronometer.start(printTime);
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === 'RESET' ) {
    clearSplits();
  } else {
    printSplit();
  }
});
























