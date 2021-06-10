
// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');
console.log(btnLeftElement);
// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

// defining "parent"
let parent = document.getElementById('splits');
//



function printTime() {
  printSeconds();
  printMinutes();
  printMilliseconds();

}

function printMinutes() {
  
    let a = newChrono.getMinutes();
    let b = newChrono.computeTwoDigitNumber(a);
    minDecElement.innerHTML = b[0];
    minUniElement.innerHTML = b[1];
  
  
}

function printSeconds() {

 
    let a = newChrono.getSeconds();
    let b = newChrono.computeTwoDigitNumber(a);
    secDecElement.innerHTML = b[0]
    secUniElement.innerHTML = b[1]
  
 
}

// ==> BONUS
function printMilliseconds() {

}

function printSplit() {
  let splitValue = document.createElement("li");
  splitValue.innerHTML = newChrono.split();
  parent.appendChild(splitValue);
}

function clearSplits() {
  newChrono.reset();
  parent.textContent = '';
}

function setStopBtn() {
  btnLeftElement.setAttribute("class", "btn stop");
  btnLeftElement.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRightElement.setAttribute("class", "btn split");
  btnRightElement.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeftElement.setAttribute("class", "btn start");
  btnLeftElement.innerHTML = "START";
}

function setResetBtn() {
  btnRightElement.setAttribute("class", "btn reset")
  btnRightElement.innerHTML = "RESET";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  if (btnLeftElement.className === "btn start") {
    setStopBtn();
    setSplitBtn();
    newChrono.start(printTime);
    //printTime();
  }
  else {
    setStartBtn();
    setResetBtn();
    newChrono.stop();
  }
});



// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className === "btn reset") {
    clearSplits();
  }
  else {
    printSplit();
  };

});
