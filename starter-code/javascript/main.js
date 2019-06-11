var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
  return `${chronometer.twoDigitsNumber(chronometer.getMinutes())[0]}${chronometer.twoDigitsNumber(chronometer.getMinutes())[1]}:${chronometer.twoDigitsNumber(chronometer.getSeconds())[0]}${chronometer.twoDigitsNumber(chronometer.getSeconds())[1]} `}
  

function printMinutes() {
  const intervalMin = setInterval(()=>{
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];  
  },1) 
  return intervalMin
}

function printSeconds() {
  const intervalSec = setInterval(()=>{
    secUni.innerHTML = secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
    
  },1) 
  return intervalSec
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {
  let prueba = document.getElementById("splits")
  console.log(prueba)
  let listElement = document.createElement("li")
  listElement.innerText = printTime()

  prueba.appendChild(listElement)
}

function setStartBtn() {
  chronometer.startClick()
  printSeconds()
  printMinutes()
}

function setResetBtn() {

}

// // Start/Stop Button
btnLeft.addEventListener('click', () => {

if(btnLeft.classList.contains("start")) {
  btnLeft.classList.remove("start")
  btnLeft.className += " stop"
  btnLeft.innerText = "STOP"
  btnRight.classList.remove("reset")
  btnRight.className +=" split"
  btnRight.innerText = "SPLIT"
  setStartBtn()
  // console.log("lo tiene")
}
else{
  btnLeft.classList.remove("stop")
  btnLeft.className += " start"
  btnLeft.innerText = "START"
  btnRight.classList.remove("split")
  btnRight.className +=" reset"
  btnRight.innerText = "RESET"
  chronometer.stopClick() 
  console.log("lo tiene")
}
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains("split")){
    setSplitBtn ()
  } 
  else{
    let orderedList = document.getElementById("splits")
    orderedList.innerHTML = " "
    chronometer.currentTime = 0
  }

});
