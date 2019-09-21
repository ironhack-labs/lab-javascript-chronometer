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
  printMinutes()
  printSeconds()
  printMilliseconds()  
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes()).split("")
  minDec.innerText = minutes[0]
  minUni.innerText = minutes[1]
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds()).split("")
  secDec.innerText = seconds[0]
  secUni.innerText = seconds[1]
}

function printMilliseconds() {
  let milliseconds = chronometer.twoDigitsNumber(chronometer.getMilliSeconds()).split("")
  milDec.innerText = milliseconds[0]
  milUni.innerText = milliseconds[1]
}

function printSplit() {
  let split = chronometer.splitClick()
  let listSplits = document.getElementById("splits")
  const liSplit = document.createElement("li")
  liSplit.innerText = split
  listSplits.append(liSplit)
}

function clearSplits() {
  let listSplitsRemove = Array.from(document.querySelectorAll("li"))
  listSplitsRemove.forEach(li => li.remove())
}

function setStopBtn(btn) {  
  btn.classList.toggle("stop")
  btn.classList.toggle("start")
  btn.innerText = "START"
}

function setSplitBtn(btn) {
  btn.classList.toggle("split")
  btn.classList.toggle("reset")  
  btn.innerText = "RESET"
}

function setStartBtn(btn) {
  btn.classList.toggle("start")
  btn.classList.toggle("stop")
  btn.innerText = "STOP"
  printTime()
}

function setResetBtn(btn) {
  btn.classList.toggle("reset")
  btn.classList.toggle("split")
  btn.innerText = "SPLIT"
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.className.includes("start")) {    
    setStartBtn(btnLeft)
    setResetBtn(btnRight)
    chronometer.startClick()
    chronometer.startClickMilliSecond()
    var id = setInterval(() => printTime(), 10)   

    return
  }  
  setStopBtn(btnLeft)
  setSplitBtn(btnRight)
  chronometer.stopClick()
  clearInterval(id)
})

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className.includes("reset")) {
    chronometer.resetClick()
    printTime()
    clearSplits()
    return
  }
  printSplit()
});
