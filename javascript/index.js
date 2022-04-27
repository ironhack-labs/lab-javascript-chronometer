const chronometer = new Chronometer();
let Splits = []
let MotorSegundos;
let MotorMinutos;
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
  // ... your code goes here
}
function printMinutes() {
  // ... your code goes here
  const Numero1 = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
console.log(Numero1)
minDecElement.textContent = Numero1[0]
minUniElement.textContent = Numero1[1]
}
function printSeconds() {
  // ... your code goes here
  chronometer.start()
  const Numero1 = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.textContent = Numero1[0]
  secUniElement.textContent = Numero1[1]
}
// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}
function printSplit(split) {
  // ... your code goes here
  Splits.push(split)
  console.log(Splits)
  while(splitsElement.firstChild){
    splitsElement.removeChild(splitsElement.firstChild)
  }
  Splits.forEach(split=>{
    const NuevoElemento  = document.createElement("li")
    NuevoElemento.textContent = split
    splitsElement.appendChild(NuevoElemento)
  })
}
function clearSplits() {
  // ... your code goes here
}
function setStopBtn() {
  // ... your code goes here
  if(btnLeftElement.classList.contains("start")){
    MotorSegundos = setInterval(printSeconds,1000)
    MotorMinutos = setInterval(printMinutes,1000)
    btnLeftElement.classList.remove("start")
    btnLeftElement.classList.add("stop")
    btnLeftElement.textContent = "STOP"
    setSplitBtn()
  } else{
    setStartBtn()
  }
}
function setSplitBtn() {
  // ... your code goes here
  if(btnLeftElement.classList.contains("stop")){
    btnRightElement.classList.remove("reset")
    btnRightElement.classList.add("split")
    btnRightElement.textContent = "SPLIT"
  } else if ( btnRightElement.classList.contains("split")) {
    btnRightElement.classList.remove("split")
    btnRightElement.classList.add("reset")
    btnRightElement.textContent = "RESET"
  }
}
function setStartBtn() {
  // ... your code goes here
  if(btnLeftElement.classList.contains("stop")){
    btnLeftElement.classList.remove("stop")
    clearInterval(MotorSegundos)
    clearInterval(MotorMinutos)
    chronometer.stop()
    btnLeftElement.classList.add("start")
     btnLeftElement.textContent = "START"
     setSplitBtn()
  }
}
function setResetBtn() {
  // ... your code goes here
  chronometer.reset()
  secUniElement.textContent = "0"
}
// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  setStopBtn()
});
// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnRightElement.classList.contains("split")){
    printSplit(chronometer.split())
  }
  if(btnRightElement.classList.contains("reset")){
    setResetBtn()
  }
});
