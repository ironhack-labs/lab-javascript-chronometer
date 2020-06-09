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

 setInterval(() => {
   printMinutes()
   printSeconds()
 }, 1000)

 // setInterval llama funciones cada cierto tiempo, entonces esta llamando estas dos funciones
 //impresas en el html cada 1 segundo.

  // ... your code goes here
}

function printMinutes() {

  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
  // ... your code goes here
}

function printSeconds() {

  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {

  const newLi = document.createElement('li')
  
  li.innerHTML = chronometer.splitClick()
  splits.appendChild(li)
  // ... your code goes here
}

function clearSplits() {

  const clearLi = document.querySelectorAll('li')
    document.querySelectorAll('ol').removeChild(clearLi)

    chronometer.resetClick()
  // ... your code goes here
}

function setStopBtn() {
 //btnLeft.classList.toggle('stop')
  btnLeft.innerHTML = 'STOP'
  btnLeft.classList.remove('start')
  btnLeft.classList.add('stop')
  
}

function setSplitBtn() {
  //btnRight.classList.toggle("split")
  btnRight.innerHTML = 'SPLIT'
  btnRight.classList.remove('reset')
  btnRight.classList.add('split')
  
}

function setStartBtn() {
  //btnLeft.classList.toggle('stop')
  btnLeft.innerHTML = 'START'
  btnLeft.classList.remove('stop')
  btnLeft.classList.add('start')

}

function setResetBtn() {
  //btnRight.classList.toggle("split")
  btnRight.innerHTML = 'RESET'
  btnRight.classList.remove('split')
  btnRight.classList.add('reset')
  
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains("start")) { 
    chronometer.startClick(printTime()); 
    setStopBtn(); 
    setSplitBtn();
   }
   else { 
     chronometer.stopClick(); 
     setStartBtn(); 
     setResetBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains("reset")) { 
    chronometer.resetClick()
    clearSplits()
  }else { 
    chronometer.splitClick()
    printSplit()
  }
});

 
