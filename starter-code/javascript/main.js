var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var splits = document.getElementById("splits");

//console.log(chronometer, btnLeft, btnRight, minDec, minUni, secDec, secUni, milDec, milUni)


const printTime = () => {
    
    const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
    printSeconds(seconds)
    const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
    printMinutes(minutes)

}

function printMinutes(minutes) {
    min.innerHTML = minutes;
}

function printSeconds(seconds) {
    sec.innerHTML = seconds;
}

function printMilliseconds() {}

function printSplit() {
    const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
    const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
    const li = document.createElement("li");
    li.innerHTML = minutes + ":" + seconds;
    splits.appendChild(li);
}

function clearSplits() {
    splits.innerHTML = ""
}

function setStopBtn() {
    chronometer.startClick();
    btnLeft.innerHTML = "STOP";
    btnLeft.className = "btn stop";
}

function setSplitBtn() {
    btnRight.innerHTML = "SPLIT";
    btnRight.className = "btn split";
}

function setStartBtn() {
    chronometer.stopClick();
    btnLeft.innerHTML = "START";  
    btnLeft.className = "btn start";
}

function setResetBtn() {
    btnRight.innerHTML = "RESET";
    btnRight.className = "btn reset";
}

window.setInterval(printTime, 1000);

// Start/Stop Button
btnLeft.addEventListener("click", function() {

  if (btnLeft.innerHTML === "START") {
    setStopBtn()
    setSplitBtn()
    

  }

  else if (btnLeft.innerHTML === "STOP") {
    setStartBtn()
    setResetBtn()

  }



});

// Reset/Split Button
btnRight.addEventListener("click", function() {

  if (btnRight.innerHTML === "RESET") {
    clearSplits();
    chronometer.resetClick();
  } 
  else if (btnRight.innerHTML === "SPLIT") {
    printSplit();
  }

});
