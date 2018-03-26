var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var intervalRefresco;

function printTime() {
  intervalRefresco = setInterval(function() {
    printMinutes();
    printSeconds();
  }, 1000);
}

function printMinutes() {
  var timeSplit = chronometer.setTime().split(" ");
  console.log(timeSplit);
  var minDecenas = timeSplit[0][0];
  console.log(minDec);
  var minUnidades = timeSplit[0][1];

  minDec.innerHTML = minDecenas;
  minUni.innerHTML = minUnidades;
}

function printSeconds() {
  var timeSplit = chronometer.setTime().split(" ");
  var secDecenas = timeSplit[1][0];
  var secUnidades = timeSplit[1][1];

  secDec.innerHTML = secDecenas;
  secUni.innerHTML = secUnidades;
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {
  minDec.innerHTML = "0";
  minUni.innerHTML = "0";
  secDec.innerHTML = "0";
  secUni.innerHTML = "0";
  clearInterval(intervalRefresco);
  chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.classList.contains("start")) {
    //si el boton esta corriendo
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    btnLeft.innerHTML = "STOP";

    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
    btnRight.innerHTML = "SPLIT";
    chronometer.startClick();
    printTime();
  } else {
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
    btnLeft.innerHTML = "START";

    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
    btnRight.innerHTML = "RESET";
    chronometer.stopClick();
    clearInterval(intervalRefresco);
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.classList.contains("reset")) {
    setResetBtn();
  } 
  printSplit();
});

// chronometer.startClick()
// setInterval(function (){
//   secUni.innerHTML = "";
//   secDec.innerHTML = "";
//   secDec.innerHTML = chronometer.setTime(0)
//   minUni.innerHTML = "";
//   minDec.innerHTML = "";
//   minUni.innerHTML = chronometer.setTime(1);
// },1000)
