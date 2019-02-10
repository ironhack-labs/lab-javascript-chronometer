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
  setInterval(function () {
    printSeconds();
    printMinutes();
}, 1000);
}

function printMinutes() {
  minDec.innerText = chronometer.minutes[0]; 
  minUni.innerText = chronometer.minutes[1]; 
}

function printSeconds() {
  secDec.innerText = chronometer.seconds[0]; 
  secUni.innerText = chronometer.seconds[1];
}


function printSplit() {
  var slist = document.createElement("li");
  slist.innerText = (chronometer.minutes + ':' + chronometer.seconds);
  var parameter = document.getElementById("splits");
  parameter.appendChild(slist);
}

function clearSplits() {
  var par = document.getElementById('splits');
  par.innerText = "";
}

function setStopBtn() {
  chronometer.stopClick();
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
  chronometer.startClick();
  printTime();
}

function setResetBtn() {
  chronometer.resetClick();
  clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener("click", function () {


  if(this.className === "btn start") {
    this.className = "btn stop";
    this.innerHTML = "STOP";
    btnRight.className = "btn split";
    btnRight.innerHTML = "SPLIT";
    setStartBtn();
} else if(this.className === "btn stop") {
    this.className = "btn start";
    this.innerHTML = "START";
    btnRight.className = "btn reset";
    btnRight.innerHTML = "RESET";
    setStopBtn();

 }





});

// Reset/Split Button
btnRight.addEventListener("click", function() {
    if(this.className === "btn reset") {
        setResetBtn();
        printTime();
        clearSplits();
    } else if(this.className === "btn split") {
        setSplitBtn();
    }
});