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

function printTime(minutes, seconds) {
  printMinutes(minutes)
  printSeconds(seconds)


}

function printMinutes(minutes) {
 chronometer.twoDigitsNumber(chronometer.getMinutes(minutes))
 minDec.innerHTML=minutes[0]
 minUni.innerText=minutes[1]

}

function printSeconds(seconds) {
chronometer.twoDigitsNumber(chronometer.getSeconds(seconds))
secUni.innerHTML=seconds[1]
secDec.innerHTML=seconds[0]



}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  btnLeft.innerText='STOP'
  btnLeft.className='btn stop'
  
  

}

function setSplitBtn() {
btnRight.innerText='SPLIT'
btnRight.className = 'btn split'
}

function setStartBtn() {
btnLeft.innerText='START'
btnLeft.className='btn start'


}

function setResetBtn() {
btnRight.innerText = 'RESET'
btnRight.className='btn reset'

}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  console.log(btnLeft.innerText)
  if(btnLeft.innerText==='START'){
    chronometer.startClick(printTime)
    setStopBtn()
    setSplitBtn()
  }else {
    chronometer.stopClick()
    setStartBtn()
    setResetBtn()
    
  }
    
}); 

// Reset/Split Button
btnRight.addEventListener('click', () => {
  
});
