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

let state ={
  btnLeftElement : true,
  btnRightElement : true
}

function printTime() {

  // setInterval(() => {

    //put a console log inside the interval to check in Chrome if it works.
    //once you have checked it, you can remove it

    const seconds = printSeconds();
    const minutes = printMinutes();

    console.log('tick', minutes, seconds);

    //minutes = 23 => minutes[0] = 2 / minutes[1] = 3
    //seconds = 10  => seconds[0] = 1 / seconds[1] = 0

    minDecElement.innerText = minutes[0];
    minUniElement.innerText = minutes[1];
    secDecElement.innerText = seconds[0];
    secUniElement.innerText = seconds[1];
  // }, 1000);
}

function printMinutes() {
  return chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  //return chronometer.splits().slice(0,2)
}

function printSeconds() {
  return chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  //return chronometer.splits().slice(-2)
}

// ==> BONUS
function printMilliseconds() {}


function printSplit() {

  //Get the string with text
  const timeMark = chronometer.split();
  
  //Create the <li></li> element to print
  const newLi = document.createElement('li');
  
  //Set the text to the time string
  newLi.innerText = timeMark;

  //Append it to the DOM
  splitsElement.appendChild(newLi);

}

function clearSplits() {
  splitsElement.innerHTML = '';
  //splits.removeChildren()
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setStartBtn() {
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  btnRightElement.innerText = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === 'START') {

    setStopBtn();
  
    setSplitBtn();
  
    chronometer.start();
  
    printTime();
  
  } else if (btnLeftElement.innerText === "STOP") /* else  */ {

    setStartBtn();

    setResetBtn();

    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  if (btnRightElement.innerText === 'RESET') {
    
    chronometer.stop();
    
    chronometer.reset();
    
    secUniElement.innerText = '0';
    secDecElement.innerText = '0';
    minUniElement.innerText = '0';
    minDecElement.innerText = '0';
    
    clearSplits();
  
  } else {

    printSplit();
  
  }
});
