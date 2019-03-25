var chronometer = new Chronometer ();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var intervalPrintTime = null;

function printTime() {
  var m1 = chronometer.minutes[0];
  var m2 = chronometer.minutes[1];
  var s1 = chronometer.seconds[0];
  var s2 = chronometer.seconds[1];

  printMinutes(m1, m2);
  printSeconds(s1, s2);
}

function printMinutes(m1, m2) {
  minDec.innerHTML = m1;
  minUni.innerHTML = m2;
}

function printSeconds(s1, s2) {
  secDec.innerHTML = s1;
  secUni.innerHTML = s2;
}

function printMilliseconds() {

}

function printSplit() {
  var minDecLocal = chronometer.minutes[0];
  var minUniLocal = chronometer.minutes[1];
  var secDecLocal = chronometer.seconds[0];
  var secUniLocal = chronometer.seconds[1];
  
  var splitTime = `${minDecLocal}${minUniLocal}:${secDecLocal}${secUniLocal}`

  var node = document.createElement("li");
  var textNode = document.createTextNode(splitTime);
  node.appendChild(textNode);
  document.getElementById("splits").appendChild(node);
}

function clearSplits() {
  var myNode = document.getElementById ("splits");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.innerHTML = "STOP";
  chronometer.startClick();
}

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.innerHTML = "START";
  chronometer.stopClick();
}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  console.log(btnLeft.className);
  if (btnLeft.className === "btn start") {
    setStopBtn();
    setSplitBtn();
    intervalPrintTime = setInterval(() => {
      printTime();      
    }, 1000);
    } else if (btnLeft.className === "btn stop") {
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  console.log(btnRight.className);
  
  if (btnRight.className === "btn reset") {
    chronometer.stopClick();
    chronometer.resetClick();
    clearSplits();
    printMinutes("0", "0");
    printSeconds("0", "0" );
    clearInterval(intervalPrintTime);
  } else if (btnRight.className === "btn split") {
    printSplit();
  }
});
