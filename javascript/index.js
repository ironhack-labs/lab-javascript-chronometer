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
  // 1. Set interval para que el cronómetro vaya incrementando cada 1000

  // 2. Definir que si los segundos llegan a 60 > empiecen los minutos y los segundos se queden a 00

  // 3. Mostrar esto en el DOM
  document.getElementById("sphere").innerHTML = minutes + ":" + seconds;
}

function printMinutes() {
  // Verificar que el formato de "minutes" sea el correcto, no estoy segura de que se guarde como string.
  let decimalMinute = minDec.innerHTML = chronometer.twoDigitsNumber(getMinutes()).charAt(0);
  let unitMinute = minUni.innerHTML = chronometer.twoDigitsNumber(getMinutes()).charAt(1);
  return minutes = decimalMinute + unitMinute;
}

function printSeconds() {
  // Verificar que el formato de "minutes" sea el correcto, no estoy segura de que se guarde como string.

  let decimalSecond = secDec.innerHTML = chronometer.twoDigitsNumber(getSeconds()).charAt(0);
  let unitSecond = unitDec.innerHTML = chronometer.twoDigitsNumber(getSeconds()).charAt(1);
  return seconds = decimalSecond + unitSecond;
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
  //Añadir una nueva clase de "stop" que muestre STOP


  // Toggle entre clases para que al clicar "start", el botón ha se cambie a stop.
  element.onclick = function(event) {
    console.log(event);
  }

}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

    // Añadir callback a la función de PrintTime para que se imprima el tiempo cuando se clique "Start"
    

  // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener('click', () => {

  // Añadir callback a la función de resetClick del chronometer.js para que se "clear" el interval al clicar en el botón de Reset
  // Añadir callback a la función de splitClick del chronometer.js para que se imprima el tiempo al momento de clicar el botón de Split
  // ... your code goes here
});
