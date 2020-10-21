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
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(0)
  minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(1)
}
printMinutes()

function printSeconds() {
  secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(0)
  secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(1)
}

//Buttons behaviours
function setStartBtn() {
  // no sé cómo hacer para que imprima el tiempo cada segundo
  let time = setInterval(() => {this.currentTime++}, 1000)
  chronometer.startClick(time)

}
function setStopBtn() {
  chronometer.stopClick()
  printTime()
}
function setResetBtn() {
  chronometer.resetClick()
  printTime()
}

function setSplitBtn() {
  chronometer.splitClick()
}

function printSplit() {
  let li = document.createElement('li')
  li.innerText = chronometer.splitClick() //no sé por qué no funciona si lo igualo directamente a setSplitBtn()
  splits.appendChild(li)
}
printSplit()

function clearSplits() {
  splits.innerText = ""
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  btnLeft.classList.toggle('stop')
  btnRight.classList.toggle('split')

  if (btnLeft.innerHTML === 'START') {
    btnLeft.innerText = 'STOP'
    btnRight.innerText = 'SPLIT'  
    setStartBtn()
    printTime()

  } else if (btnLeft.innerHTML === 'STOP') { 
    btnRight.innerHTML = 'RESET'
    setStopBtn()
  }
  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {

  if (btnRight.innerText === 'RESET') {
    setResetBtn()
    clearSplits()

  } else if (btnRight.innerText === 'SPLIT') {
    printSplit()
  }

});

