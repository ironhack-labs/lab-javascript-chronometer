var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');

printTime();

function printTime() {

  this.intervalId = setInterval(x => {

    console.log(chronometer.intervalId);
    printMinutes();
    printSeconds();

  }, 1000);

}

function printMinutes() {

  minDec.textContent = (chronometer.twoDigitsNumber(chronometer.getMinutes()))[0];
  minUni.textContent = (chronometer.twoDigitsNumber(chronometer.getMinutes()))[1];

}

function printSeconds() {

  secDec.textContent = (chronometer.twoDigitsNumber(chronometer.getSeconds()))[0];
  secUni.textContent = (chronometer.twoDigitsNumber(chronometer.getSeconds()))[1];

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

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function (e) {


  if (!(chronometer.intervalId) && (e.target.textContent == "START")) {

    e.target.textContent = "STOP";
    e.target.className = "btn stop";

    document.querySelector("#btnRight").textContent = "SPLIT";
    document.querySelector("#btnRight").className = "btn split";

    chronometer.startClick();

  }



  else if ((chronometer.intervalId) && (e.target.textContent == "STOP")) {

    e.target.textContent = "START";
    e.target.className = "btn start";

    document.querySelector("#btnRight").textContent = "RESET";
    document.querySelector("#btnRight").className = "btn reset";

    chronometer.stopClick();

  }


});

// Reset/Split Button
btnRight.addEventListener('click', function (e) {

  if ((!chronometer.intervalId) && (e.target.textContent == "RESET")) { e.target.textContent = "SPLIT"; e.target.className = "btn split"; chronometer.resetClick(); clearSplits() }
  else if ((chronometer.intervalId) && (e.target.textContent == "SPLIT")) { addSplit() }


});

function addSplit() {

  listToComplete = document.getElementById("splits");
  splitToAdd = document.createElement("li");
  splitToAdd.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[0] + chronometer.twoDigitsNumber(chronometer.getMinutes())[1] + ":" + chronometer.twoDigitsNumber(chronometer.getSeconds())[0] + chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  listToComplete.appendChild(splitToAdd);

}

function clearSplits() {

  document.getElementById("splits").innerHTML = "";

}
