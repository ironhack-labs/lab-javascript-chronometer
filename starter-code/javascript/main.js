var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

var split = document.getElementById("splits");
 var primiTimeId;



function printTime() {
    primiTimeId =  setInterval(function(){
        printSeconds();
        printMinutes()
    },1000);
}

function printMinutes() {
    minDec.innerHTML = (chronometer.twoDigitsNumber(chronometer.getMinutes()))[0];
    minUni.innerHTML = (chronometer.twoDigitsNumber(chronometer.getMinutes()))[1];
}

function printSeconds() {
    secDec.innerHTML= (chronometer.twoDigitsNumber(chronometer.getSeconds()))[0];
    secUni.innerHTML = (chronometer.twoDigitsNumber(chronometer.getSeconds()))[1];
}

function printMilliseconds() {}

function printSplit() {
let li = document.createElement("li");
li.innerHTML = chronometer.setTime();
split.appendChild(li);

}

function clearSplits() {
  document.getElementById("splits").innerHTML = "";
  chronometer.resetClick();
  minDec.innerHTML = "0";
  minUni.innerHTML = "0";
  secDec.innerHTML = "0";
  secUni.innerHTML = "0";
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.classList.remove("start");
  btnLeft.classList.add = "stop";
  setSplitBtn();
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.classList.remove("reset");
  btnRight.classList.add = "split";
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.classList.remove(" stop");
  btnLeft.classList.add = "start";
  setResetBtn();
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.classList.remove("split");
  btnRight.classList.add = "reset";
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (this.classList.contains('start')) {
    setStopBtn();
    setSplitBtn()
    chronometer.startClick();
    printTime();
    
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (this.classList.contains('reset')) {
    setSplitBtn();
    clearSplits();
  } else {
    setResetBtn();
    printSplit();
  }
});
