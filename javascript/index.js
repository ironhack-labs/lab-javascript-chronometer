const chronometer = new Chronometer();

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
  printMinutes()
  printSeconds()
}

function printMinutes() {
  let mins= chronometer.getMinutes()
}

function printSeconds() {
  let secs= chronometer.twoDigitsNumber(chronometer.getMinutes())
  console.log(mins)
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
  var start= document.getElementById("btnLeft")
  start.innerHTML= 'Stop'
  start.className.add("stop");
 start.className.remove("star")
}

function setSplitBtn() {
  var start= document.getElementById("btnRight");
  start.innerHTML= 'Split'
  start.className.add("split");
  start.className.remove("reset")


  // ... your code goes here
}

function setStartBtn() {
  var start= document.getElementById("btnLeft")
  start.innerHTML= 'Start'
  start.className.add("start");
 start.className.remove("stop")
 
}

function setResetBtn() {
  var start= document.getElementById("btnRight");
  start.innerHTML= 'Reset'
  start.className.add("reset");
  start.className.remove("split")
  
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  chronometer.startClick()
  

  if(!btnLeft.classList.contains('start')){
    chronometer.startClick(printTime)
    setStartBtn()
    setResetBtn() 
  }else{
    setStopBtn()
    setSplitBtn()
  }


});

// Reset/Split Button
btnRight.addEventListener('click', () => {

  if()



});
