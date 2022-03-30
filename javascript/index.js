const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');



span.addEventListener('click', function () {
  const result = classes.toggle("c");

  // get the DOM elements that will serve us to display the time:
  const minDecElement = document.getElementById('minDec');
  const minUniElement = document.getElementById('minUni');
  const secDecElement = document.getElementById('secDec');
  const secUniElement = document.getElementById('secUni');
  const milDecElement = document.getElementById('milDec');
  const milUniElement = document.getElementById('milUni');
  const splitsElement = document.getElementById('splits');

  function printTime() {
    this.intervalId = setInterval(() => {
      return
    }, 1)
    return this.intervalId
  }

  function printMinutes() {
    getMinutes() = document.querySelector()
  }

  function printSeconds() {
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


  //BOTONES 

  function setStopBtn() {

  }

  function setSplitBtn() {

  }

  function setStartBtn() {

  }

  function setResetBtn() {

  }



  // Start/Stop Button
  btnLeftElement.addEventListener('click', () => {
    if (btnLeftElement === "btn start") {
      btnLeftElement.className = "btn stop"
      btnLeftElement.innetText = "STOP"

      btnRightElement.className = ""
      btnRightElement.innerText = ""
    }
  });

  // Reset/Split Button
  btnRightElement.addEventListener('click', () => {
    // ... your code goes here
  });
