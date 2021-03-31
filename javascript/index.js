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
  printSeconds();
  printMinutes();
}

function printMinutes() {
  // primero declaramos una variable 'getMinutesMet' que va a recibir lo que valga 
  // el método .getMinutes() en el objeto chronometer
  let getMinutesMet = chronometer.getMinutes()
  // luego, aplicamos el método innerHTML a la variable -declarada en linea10- minDec
  // para llegar el elemento HTML a través de su id -enlazado misma linea- y aplicarle
  // el método twoDigitsNumber, de la clase Chronometer (madre del objeto chronometer);
  // 
  minDec.innerHTML = chronometer.twoDigitsNumber(getMinutesMet)[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(getMinutesMet)[1];
}

function printSeconds() {
  // primero declaramos una variable 'getSecondsMet' que va a recibir lo que valga 
  // el método .getSeconds() en el objeto chronometer
  let getSecondsMet = chronometer.getSeconds()
  // luego, aplicamos el método innerHTML a la variable -declarada en linea12- secDec
  // para llegar el elemento HTML a través de su id -enlazado misma linea- y aplicarle
  // el método twoDigitsNumber de la clase Chronometer (madre del objeto chronometer);
  // 
  secDec.innerHTML = chronometer.twoDigitsNumber(getSecondsMet)[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(getSecondsMet)[1];
}

// ==> BONUS
function printMilliseconds() {

}

function printSplit() {
  const ulSplit = document.createElement("ol");
  ulSplit.innerHTML = chronometer.splitClick();
  splits.appendChild(olSplit);
}

function clearSplits() {
  splits.innerHTML = ''
}

function setStopBtn() {
  btnLeft.classList.toggle(`stop`)
  btnLeft.innerHTML = "STOP"
  btnLeft.classList.toggle(`start`)
}

function setSplitBtn() {
  btnRight.classList.toggle(`split`)
  btnRight.innerHTML = "SPLIT"
  btnRight.classList.toggle(`reset`)
}

function setStartBtn() {
  btnLeft.classList.toggle(`start`)
  btnLeft.innerHTML = "START"
  btnLeft.classList.toggle(`stop`)
}


function setResetBtn() {
  btnRight.classList.toggle(`reset`)
  btnRight.innerHTML = "RESET"
  btnRight.classList.toggle(`split`)
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
      if (btnLeft.innerHTML == 'START') {
        errorMessage.style.display = 'none';
        chronometer.startClick()
        setInterval(() => {
          printTime();
        }, 1000);
        setSplitBtn()
        setStopBtn();
      } else if (btnLeft.innerHTML == 'STOP') {
        setResetBtn()
      setStartBtn()
      chronometer.stopClick()
    }
  })


    // Reset/Split Button
    btnRight.addEventListener('click', () => {
        if (btnRight.innerHTML == 'RESET') {
          chronometer.resetClick();
          clearSplits()
          console.log('reset')
        } else if (btnRight.innerHTML == 'SPLIT')
        {  printSplit()
      }
    })