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
  minDec.innerHTML = printMinutes()[0]
  minUni.innerHTML = printMinutes()[1]
  secDec.innerHTML = printSeconds()[0]
  secUni.innerHTML = printSeconds()[1]
  milDec.innerHTML = printMilliseconds()[0]
  milUni.innerHTML = printMilliseconds()[1]
}

function printMinutes() {
return chronometer.twoDigitsNumber(chronometer.getMinutes())
}

function printSeconds() {
  return chronometer.twoDigitsNumber(chronometer.getSeconds())
}

// ==> BONUS
function printMilliseconds() {
 return chronometer.twoDigitsNumber(chronometer.getMiliSeconds())
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
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
function changeButtonStyle(){
  if(btnLeft.classList.contains("start")){
    btnLeft.classList.toggle("stop")
    btnRight.classList.toggle("split")
  }
  if(btnLeft.innerText === "START"){
    btnLeft.innerText = "STOP"
    chronometer.startClick()
    btnRight.innerText = "SPLIT"
  }
  else{
    btnLeft.innerText = "START"
    chronometer.stopClick()
    btnRight.innerText = "RESET"
  }
} 

//Start Button
btnLeft.addEventListener('click',() => {
  changeButtonStyle()
  setInterval(()=>{printTime()},1)
});


// Reset/Split Button
btnRight.addEventListener('click', () => {
if(btnRight.innerText == "RESET"){
  chronometer.resetClick()
  splits.innerHTML = ""
}
else{
  const newLi = document.createElement("li")
  splits.append(newLi)
  newLi.innerHTML = chronometer.splitClick() 
}
});


