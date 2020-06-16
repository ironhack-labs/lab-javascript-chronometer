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
  /*printMilliseconds()*/
  printSeconds()
  printMinutes()
  
}

function printMinutes() {
  setInterval(() => {
    minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
    minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0],1000*60})
}

function printSeconds() {
  setInterval(() => {
    secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
    secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0],1000})

}

// ==> BONUS
/*function printMilliseconds() {
  setInterval(() => {console.log('d')
    milUni.innerText = chronometer.twoDigitsNumber(chronometer.getMilliseconds())[1]
    milDec.innerText = chronometer.twoDigitsNumber(chronometer.getMilliseconds())[0],10})
}*/

function printSplit() {
  let li = document.createElement('LI')
  li.innerText = `${minDec.innerText}${minUni.innerText}:${secDec.innerText}${secUni.innerText}`
  splits.appendChild(li)
}

function clearSplits() {
  chronometer.currentTime=0
  let item = splits.lastElementChild
  while(item){
    splits.removeChild(item)
    item=splits.lastElementChild
  }
}

function setStopBtn() {
  btnLeft.innerText='START' 
  chronometer.stopClick()
}

function setSplitBtn() {
  btnRight.innerText='SPLIT'
}

function setStartBtn() {
  btnLeft.innerText='STOP'
  chronometer.startClick()
  printTime()
}

function setResetBtn() {
  btnRight.innerText='RESET'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  btnLeft.classList.toggle('stop')
  btnRight.classList.toggle('split')
    if(btnLeft.innerText=='START'){
      setSplitBtn()
    setStartBtn()
    }

  else{
    setResetBtn()
    setStopBtn()}
})

// Reset/Split Button
btnRight.addEventListener('click', () => {
  
  if(btnRight.innerText=='RESET'){
    clearSplits()
  }
  else{
    printSplit()
    setSplitBtn()
    }
});
