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
  // ... your code goes here
  console.log(chronometer.currentTime)
  printSeconds();
  printMinutes();
}

function printMinutes() {
  // ... your code goes here
  let minutes = minUni || minDec
  //if (chronometer.getSeconds >= 60){ minutes.innerHTML = chronometer.twoDigitsNumber(chronometer.currentTime)}
  setInterval(() => {
    minutes.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes(currentTime))
  })
  
}

function printSeconds() {
  // ... your code goes here
  let seconds = secUni || secDec
  seconds.innerText = chronometer.twoDigitsNumber(chronometer.currentTime)
  
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
  btnLeft.toggle("START")

}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
 
  if (btnLeft.innerText === "START")
  {btnLeft.innerText = "STOP"; btnLeft.style.backgroundColor="red"; chronometer.startClick(printTime)}
  else {btnLeft.innerText = "START";chronometer.stopClick(printTime),btnRight.style.backgroundColor="#5fca5f"}
  
  chronometer.resetClick()
}

function setResetBtn() {
  // ... your code goes here
  if (btnRight.innerText === "RESET")
  {btnRight.innerText = "SPLIT"; chronometer.startClick(printSplit)}
  else {btnRight.innerText = "RESET";chronometer.stopClick()}
  
  chronometer.resetClick()
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if (chronometer.intervalId){
    console.log("click");
  }
  else{
    setStartBtn();

  }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  setResetBtn()
});
