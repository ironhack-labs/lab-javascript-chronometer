const chronometer = new Chronometer();
const errorMessage = document.querySelector("#error-message");
const errorFirst = document.querySelector("#error-message");

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
  printSeconds ();
  printMinutes();

}

function printMinutes() {
 // primero declaramos una variable 'getMinutesMet' que va a recibir lo que valga 
 // el método .getMinutes() en el objeto chronometer
 let getMinutesMet = chronometer.getMinutes()
 // luego, aplicamos el método innerHTML a la variable -declarada en linea10- minDec
 // para llegar el elemento HTML a través de su id -enlazado misma linea- y aplicarle
 // el método twoDigitsNumber, creado en la clase Chronometer (madre del objeto chronometer);
 // 
  minDec.innerHTML = chronometer.twoDigitsNumber(getMinutesMet)[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(getMinutesMet)[1];
}

function printSeconds() {
 // primero declaramos una variable 'seconds' que va a recibir lo que valga 
 // el método .getSeconds() en el objeto chronometer
 let seconds = chronometer.getSeconds()
 // luego, aplicamos el método innerHTML a la variable -declarada en linea12- secDec
 // para llegar el elemento HTML a través de su id -enlazado misma linea- y aplicarle
 // el método twoDigitsNumber, creado en la clase Chronometer (madre del objeto chronometer);
 // 
  secDec.innerHTML = chronometer.twoDigitsNumber(seconds)[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(seconds)[1];
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

}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {


}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  errorMessage.style.display = 'none';
  chronometer.startClick()
  setInterval(() => {
    printTime();
  }, 1000);
  console.log('holaaa');
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});
