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
  printMinutes()
  printSeconds()
 
}

function printMinutes() {
 minUniElement.textContent=chronometer.computeTwoDigitNumber(chronometer.getMinutes()).substr(1,1)
  console.log(minUniElement.textContent)
  minDecElement.textContent=chronometer.computeTwoDigitNumber(chronometer.getMinutes()).substr(0,1)
  console.log(minDecElement.textContent)
}

function printSeconds() {
  secUniElement.textContent=chronometer.computeTwoDigitNumber(chronometer.getSeconds()).substr(1,1)
  secDecElement.textContent=chronometer.computeTwoDigitNumber(chronometer.getSeconds()).substr(0,1)
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const listElement=document.createElement("li")
  listElement.classList.add("list-item")
  listElement.textContent= chronometer.split();
splitsElement.appendChild(listElement);
}

function clearSplits() {

   while(splitsElement.firstChild ){
    splitsElement.removeChild(splitsElement.firstChild);
   }

  
  
}

function setStopBtn() {
  // ... your code goes here
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
btnLeftElement.addEventListener('click', event => {
 
  if(btnLeftElement.textContent ==="START" ){
    chronometer.start(printTime);
    btnLeftElement.classList.remove("start");
    btnLeftElement.classList.add("stop");
    btnLeftElement.textContent ="STOP" 
    
    btnRightElement.classList.toggle("split");
    btnRightElement.textContent ="SPLIT" 

    }
  else if( btnLeftElement.textContent === "STOP"){
    chronometer.stop();
    btnLeftElement.classList.remove("stop");
    btnLeftElement.classList.add("start");
    btnLeftElement.textContent ="START" 
    
    btnRightElement.classList.toggle("split");
    btnRightElement.textContent ="RESET"
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  
  if(btnRightElement.textContent ==="SPLIT" ){
    printSplit()
    }
  else if( btnLeftElement.classList.contains( "start" ) ){
    chronometer.reset()
    printTime()
    clearSplits();
  }
});
