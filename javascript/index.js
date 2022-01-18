

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

  printSeconds()
  printMinutes()
}

function printMinutes() {


  const min = chronometer.split()
  minDecElement.innerHTML = min[0]
  minUniElement.innerHTML = min[1]
  // ... your code goes here


}

function printSeconds() {
  const sec = chronometer.split()
  secDecElement.innerHTML = sec[3]
  secUniElement.innerHTML = sec[4]
  // ... your code goes here
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
  // ... your code goes here
  btnLeftElement.className = "btn stop"
  btnLeftElement.innerHTML = "STOP"

}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.className = "btn split"
  btnRightElement.innerHTML = "SPLIT"


}

function setStartBtn() {
  btnLeftElement.className = "btn start"
  btnLeftElement.innerHTML = "START"
  btnRightElement.className = "btn reset"
  btnRightElement.innerHTML = "RESET"
  chronometer.stop()

  // ... your code goes here
}

function setResetBtn() {
  // minDecElement.innerHTML = 0
  // minUniElement.innerHTML = 0
  // secDecElement.innerHTML = 0
  // secUniElement.innerHTML = 0


  chronometer.reset()



  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.className === "btn start") {

    chronometer.start()

    intervalId = setInterval(() => {
      printTime()



    }, 1000)

    setStopBtn()
    setSplitBtn()



  } else {

    btnLeftElement.onclick = () => {
      // chronometer.stop()
    }
    setStartBtn()


  }



});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here

  if (btnRightElement.className === 'btn reset') {
    setResetBtn()
  } else {

    const li = document.createElement('li')
    li.innerHTML = `${chronometer.split()}`

    const toSplit = li
    document.querySelector("#splits").appendChild(toSplit)

  }


});

