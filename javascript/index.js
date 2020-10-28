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
  mins = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minDec.innerHTML = mins[0]
  minUni.innerHTML = mins[1]
}
function printSeconds() {
  secs = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secDec.innerHTML = secs[0]
  secUni.innerHTML = secs[1]
}
// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}
function printSplit() {
  let child = document.createElement('li')
  child.innerHTML = `${minDec.innerText}${minUni.innerText}:${secDec.innerText}${secUni.innerText}`
  splits.appendChild(child) 
}
function clearSplits() {
  splits.innerHTML = ''
}
function setStopBtn() {
  chronometer.stopClick()
  btnLeft.innerHTML = 'START'
}
function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT'
}
function setStartBtn() {
  btnLeft.classList.toggle("stop")
}
function setResetBtn() {
  btnRight.innerHTML = 'RESET'
}
// Start/Stop Button
btnLeft.addEventListener('click', () => {
  setStartBtn()
  if(btnLeft.innerHTML === 'START'){
    chronometer.startClick(printTime) // SIGUE POR AQUÍ!!OJO AL MANEJO DEL CALLBACK
    btnLeft.innerHTML = 'STOP'
    // const printInt = setInterval(printTime, 1000)
  } else {
    setStopBtn()
  }
  btnRight.classList.toggle("split")
  if(btnRight.innerHTML === 'RESET'){
    setSplitBtn()
  } else {
    setResetBtn()
  }
});
// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.innerHTML === 'SPLIT'){
    printSplit()
  } else {
    minDec.innerHTML = 0
    minUni.innerHTML = 0
    secDec.innerHTML = 0
    secUni.innerHTML = 0
    clearSplits() 
    // console.log(secUni.innerHTML);
  }
});