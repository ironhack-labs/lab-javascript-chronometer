var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


// Miliseconds. 

function printTime() {
  printSeconds()
  printMinutes()


}

function printMinutes() {
let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes()).split("")
minUni.innerText = minutes[1]
minDec.innerText = minutes[0]
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds()).split("")
  secUni.innerText = seconds[1]
  secDec.innerText = seconds[0]
 



}


function printSplit() {
  const splitValue = chronometer.splitClick()
  const split = document.querySelector("#splits")
  let newSplit = document.createElement("li")
 
  newSplit.innerText = splitValue
  split.append(newSplit)


}

function clearSplits() {
  window.location.reload()
  }

  


function setStopBtn(btn) {
  btn.classList.toggle('start')
  btn.classList.toggle('stop')
  btn.innerText = "STOP"
}
function setSplitBtn(btn) {
  btn.classList.toggle("reset")
  btn.classList.toggle("split")
  btn.innerText = "SPLIT"
}
function setStartBtn(btn) {
  btn.classList.toggle('start')
  btn.classList.toggle('stop')
  btn.innerText = "START"
}
function setResetBtn(btn) {
  btn.classList.toggle("reset")
  btn.classList.toggle("split")
  btn.innerText = "RESET"
}

// Start/Stop Button



btnLeft.addEventListener('click', function () {
  if (btnLeft.className.includes("start")) {
    setStopBtn(btnLeft)
    setSplitBtn(btnRight)
    chronometer.startClick()
    setInterval(() => printTime(), 1000)
    return
}
if (btnLeft.className.includes("stop")){
  chronometer.stopClick()
  
  setStartBtn(btnLeft)
  setResetBtn(btnRight)
  return
}



  
setStopBtn(btnLeft)
setSplitBtn(btnRight)
})
// Reset/Split Button
btnRight.addEventListener('click', function () {

  if (btnRight.className.includes("split")) {
    printSplit()
}
 if (btnRight.className.includes("reset")){
   
   clearSplits()
   
   }
  
 
});
