const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:

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
 let minutes = chronometer.getMinutes();
 minutes = chronometer.twoDigitsNumber(minutes);
 minDec.innerHTML = minutes[0];
 minUni.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  seconds = chronometer.twoDigitsNumber(seconds);
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  let miliseconds = chronometer.getMiliseconds();
  miliseconds = chronometer.twoDigitsNumber(miliseconds);
  milDec.innerHTML = miliseconds[0];
  milUni.innerHTML = miliseconds[1];
}

function printSplit() {
  const time = chronometer.splitClick()
  splits.innerHTML += `<li>${time}</li>`
}

function clearSplits() {
  splits.innerHTML = ``
}

function setStopBtn() {
  btnLeft.innerText = "STOP"
  btnLeft.className = "btn stop"
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT"
  btnRight.className = "btn split"
}

function setStartBtn() {
  btnLeft.innerText = "START"
  btnLeft.className = "btn start"
}

function setResetBtn() {
  btnRight.innerText = "RESET"
  btnRight.className = "btn reset"
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (chronometer.intervalId === 0) {
    // el boton de la izquierda es start
    //  primero empieza el cronometro
    //  se cambia el boton left a stop
    //  se vuelve split el boton right
    chronometer.startClick(printTime)
    setStopBtn()
    setSplitBtn()

  }else {
    // el boton de la izquierda es stop
    // parar el cronometro
    // se cambia el boton de la derecha a reset
    // se cmabia el boton de la izquierda a start
    chronometer.stopClick()
    setResetBtn()
    setStartBtn()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(chronometer.intervalId === 0){
    // el boton de la derecha es reset
    // tiene que poner a cero el tiempo
    // restaura los splits
    chronometer.resetClick()
    printTime()
    clearSplits()

  }else {
    // el boton de la derecha es split
    // agrega el tiempo en la lista de splits
    printSplit()
  }
});

