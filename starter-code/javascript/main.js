var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
//var splits      = document.getElementById('splits');
//var vuelta      = document.createElement('li');


function printTime() {
  printSeconds()
  printMinutes()
  //printMilliseconds()
}

function printMinutes() {
  const intervalMin = setInterval(()=>{
    minDec.innerText= chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
    minUni.innerText= chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
  })
  return intervalMin
  
}

function printSeconds() {
  const intervalSec = setInterval(()=>{
    secDec.innerText= chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
    secUni.innerText= chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
  })
  return intervalSec
}


function printMilliseconds() {
  //milDec.innerText= chronometer.twoDigitsNumber(chronometer.getMiliSeconds()[0])
  //milUni.innerText= chronometer.twoDigitsNumber(chronometer.getMiliSeconds()[1])
}
console.log(chronometer.getMiliSeconds())
function printSplit() {
}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {
  let splits = document.getElementById("splits")
  let vuelta = document.createElement("li")
  let minutos = chronometer.getMinutes()
  let segundos = chronometer.getSeconds()
  let miliSegundos = chronometer.getMiliSeconds()
  minutos= chronometer.twoDigitsNumber(minutos)
  segundos= chronometer.twoDigitsNumber(segundos) 
  //miliSegundos= chronometer.twoDigitsNumber(miliSegundos)
  vuelta.innerText = (`${minutos}: ${segundos}`)
  splits.appendChild(vuelta)
}

function setStartBtn() {
  chronometer.startClick()
  printSeconds()
  printMinutes()
  //printMilliseconds()

}

function setResetBtn() {
  
  
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(btnLeft.innerText === "START"){
    btnLeft.setAttribute("class", "btn stop")
    btnLeft.innerText = 'STOP'
    btnRight.setAttribute("class", "btn split")
    btnRight.innerText = 'SPLIT'
    setStartBtn()
  }
  else{
    btnLeft.setAttribute("class", "btn start")
    btnLeft.innerText = 'START'
    btnRight.setAttribute("class", "btn reset")
    btnRight.innerText = 'RESET'
    chronometer.stopClick()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.innerText === "SPLIT"){
    setSplitBtn()
  }
  else{
    chronometer.currentTime =0
    let ol = document.getElementById("splits")
    ol.innerHTML = ""
  }
});
