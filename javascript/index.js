const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// Document 
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');




function printTime() {

  printMinutes();
  printSeconds();
 
}

function printMinutes() {
 
  let min = chronometer.computeTwoDigitNumber(chronometer.getMinutes());

  minDecElement.innerText = minutes[0]
  minSecElement.innerText = minutes[1]

}

function printSeconds() {

  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());

  secDecElement.innerText = seconds[0]
  secUniElement.innerText = seconds[1]
}

// ==> BONUS
function printMilliseconds() {

  const miliseconds = chronometer.computeTwoDigitNumber(chronometer.getMiliseconds);

  milDecElement.innerText = miliseconds[0]
  milUniElement.innerText = miliseconds[1]
}


function printSplit() {

  const newLi = document.createElement('li');
  li.innerHTML = newLi.appendChild('li')

 
}


function clearSplits() {

  splitsElement.innerHTML = " ";
  
}


function setStopBtn() {
  btnLeftElement.innerHTML = "STOP"
  btnLeftElement.setAttribute("class", "btn stop")
}

function setSplitBtn() {
  btnRightElement.innerHTML = "SPLIT"
  btnRightElement.setAttribute("class", "btn split")
  
}

function setStartBtn() {
  btnLeftElement.innerHTML = "START"
  btnLeftElement.setAttribute("class", "btn start")
  
  
}

function setResetBtn() {
  btnRightElement.innerHTML = "RESET"
  btnRightElement.setAttribute ("class", "btn reset")
  
}




// Start/Stop Button

btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.innerHTML == "START"){
    setStopBtn();
    printTime();
  } else if(btnLeftElement.innerHTML == "STOP"){
    setStartBtn() 
    printTime()
  }
});



// Reset/Split Button

btnRightElement.addEventListener('click', () => {
  if(btnRightElement.innerHTML == "SPLIT"){
    setResetBtn();
    printTime();
  } else if(btnRightElement.innerHTML == "RESET"){
    setSplitBtn();
    printTime();
  }

});




