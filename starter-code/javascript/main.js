const chronometer = new Chronometer()
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const minDec = document.getElementById('minDec');
const minUni = document.getElementById('minUni');
const secDec = document.getElementById('secDec');
const secUni = document.getElementById('secUni');
const milDec = document.getElementById('milDec');
const milUni = document.getElementById('milUni');



// function printTime(init) {

//   if (init === "START") {
//     printMinutes()
//     printSeconds()
//   } else if (init === "RESET") {
//     minDec.innerHTML = '0'
//     minUni.innerHTML = '0'
//     secDec.innerHTML = '0'
//     secUni.innerHTML = '0'
//   }

// }

function printMinutes() {
  chronometer.getMinutes()
  minDec.innerHTML = chronometer.minutes[0]
  minUni.innerHTML = chronometer.minutes[1]
}

function printSeconds() {
  secDec.innerHTML = chronometer.seconds[0]
  secUni.innerHTML = chronometer.seconds[1]
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

  if (btnLeft.innerHTML === 'START') {
    btnLeft.innerHTML = 'STOP'
    btnLeft.classList.remove('start')
    btnLeft.classList.add('stop')
    chronometer.startClick()


  } else {
    btnLeft.innerHTML = 'START'
    btnLeft.classList.remove('stop')
    btnLeft.classList.add('start')
    chronometer.stopClick()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {


  if (btnRight.innerHTML === 'RESET') {
    btnRight.innerHTML = 'SPLIT'
    btnRight.classList.add('split')


  } else {
    btnRight.innerHTML = 'RESET'
    btnRight.classList.remove('split')
  }

});