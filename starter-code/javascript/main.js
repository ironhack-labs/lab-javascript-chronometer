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
  return intervalPrintId = setInterval(function () {
     printMinutes();
     printSeconds();
     printMilliseconds();
  }, 10); //we refresh every 10 milliseconds
}

function printMinutes() {

  minDec.innerHTML = "";
  minUni.innerHTML = "";
  minDec.appendChild(document.createTextNode(chronometer.minutes[0]));
  minUni.appendChild(document.createTextNode(chronometer.minutes[1]));
}

function printSeconds() {

  secDec.innerHTML = "";
  secUni.innerHTML = "";
  secDec.appendChild(document.createTextNode(chronometer.seconds[0]));
  secUni.appendChild(document.createTextNode(chronometer.seconds[1]));
}

function printMilliseconds() {
  
  milDec.innerHTML = "";
  milUni.innerHTML = "";
  milDec.appendChild(document.createTextNode(chronometer.milliseconds[0]));
  milUni.appendChild(document.createTextNode(chronometer.milliseconds[1]));
}

function printSplit() {

  clearSplits(); //we delete the list of splits

  var listSplits = document.getElementById("splits");
  for (var i = 0, l = chronometer.splits.length; i < l; i++) { //we insert a tag <li> for each position of the "splits" array
    var liTag = document.createElement("li");
    liTag.appendChild(document.createTextNode(chronometer.splits[i]));
    listSplits.appendChild(liTag);
  }
}

function clearSplits() {

  var listSplits = document.getElementById("splits");
  listSplits.innerHTML = "";
}

function setStopBtn(btn) {

  btn.classList.replace("start", "stop");
  btn.innerHTML = ""
  btn.appendChild(document.createTextNode("STOP"));
}

function setSplitBtn(btn) {
  btn.classList.replace("reset", "split");
  btn.innerHTML = ""
  btn.appendChild(document.createTextNode("SPLIT"));
}

function setStartBtn(btn) {
  btn.classList.replace("stop", "start");
  btn.innerHTML = "";
  btn.appendChild(document.createTextNode("START"));
}

function setResetBtn(btn) {
  btn.classList.replace("split", "reset");
  btn.innerHTML = "";
  btn.appendChild(document.createTextNode("RESET"));
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

  btnRight = document.getElementById("btnRight");

  if (this.matches(".start")) { // if we click the "start" button...
    setStopBtn(this);
    setSplitBtn(btnRight);
    chronometer.startClick(); //we start the chrono
    printTime(); //we print the time

  } else { // if we click the "stop" button...
    setStartBtn(this);
    setResetBtn(btnRight);
    chronometer.stopClick(); //we stop the chrono
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  
  btnLeft = document.getElementById("btnLeft");

  if (this.matches(".reset")) { //if we click the "reset" button...
    chronometer.resetClick(); // we reset the chrono
    clearSplits(); //we delete the list of splits
    clearInterval(printTime()); // we print the time to 00:00:00

  } else { //if we click the "split" button...
    chronometer.splitClick();
    printSplit();
  }
});