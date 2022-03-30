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

let cambio = true;

function printTime() {
  printSeconds()
  printMinutes()
  if (cambio) {
    printMilliseconds()
    cambio = false

  }



}


function printMinutes() {

  // minDecElement.innerHTML = chronometer.getMinutes()

  let mD = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).charAt(0)
  minDecElement.innerHTML = mD

  let mU = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).charAt(1)
  minUniElement.innerHTML = mU




}

function printSeconds() {

  let seU = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).charAt(1)
  secUniElement.innerHTML = seU;

  let seD = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).charAt(0)
  secDecElement.innerHTML = seD;


}

// ==> BONUS
// var global = 0
function printMilliseconds() {
  let con1 = 0;
  let con2 = 0;
  global = setInterval(() => {
    if (con1 === 9) {
      con2++
      milDecElement.innerHTML = con2;
      con1 = 0
    } else {
      con1++
      milUniElement.innerHTML = con1;
    }
    if (con2 === 9) {
      con2 = 0
    }
  }, 10);
}

function printSplit() { }
function clearSplits() { }

function setStopBtn() {
  chronometer.stop()
  clearInterval(global)
  // global = 0
  cambio = false
}

function setSplitBtn() { }

function setStartBtn(para) {
  chronometer.start(para);
  cambio = true
}

function setResetBtn() {

  chronometer.reset();
  // global = 0

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {


  if (chronometer.currentTime === 0) {

    setStartBtn(printTime)
    // chronometer.start(printMinutes)


    btnLeftElement.innerHTML = "STOP"
    btnLeftElement.className = "btn stop"
    btnRightElement.innerHTML = "SPLIT"
    btnRightElement.className = "btn split"

  } else {


    setStopBtn();
    // setStartBtn(printTime)

    setResetBtn()


    btnLeftElement.innerHTML = "START"
    btnLeftElement.className = "btn start"
    btnRightElement.innerHTML = "RESET "
    btnRightElement.className = "btn reset"
  }


  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  if (chronometer.currentTime === 0) {


    setStartBtn(printTime)


    btnLeftElement.innerHTML = "START"
    btnLeftElement.className = "btn start"
    btnRightElement.innerHTML = "RESET"
    btnRightElement.className = "btn resert"

  } else {

    setStartBtn(printTime)

    setSplitBtn()
    setResetBtn();

    btnLeftElement.innerHTML = "STOP"
    btnLeftElement.className = "btn stop"
    btnRightElement.innerHTML = "SPLIT"
    btnRightElement.className = "btn split"
  }






  // ... your code goes here
});
