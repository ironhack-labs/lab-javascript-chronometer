var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var splits = document.getElementById("splits");
function printTime() {
  console.log(chronometer.minutes);
  printMinutes(chronometer.minutes);
  printSeconds(chronometer.seconds);
}

function printMinutes(min) {
  minDec.innerHTML = min[0];
  minUni.innerHTML = min[1];
}

function printSeconds(sec) {
  secDec.innerHTML = sec[0];
  secUni.innerHTML = sec[1];
}

function printMilliseconds() {}

function printSplit() {
  console.log("Splitted")
  var li=document.createElement('li');
  li.innerHTML=chronometer.minutes+":"+chronometer.seconds
  console.log(splits)
  splits.appendChild(li) ;

}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  console.log(btnLeft.getAttribute("class"));
  if (btnLeft.getAttribute("class") == "btn start") {
    console.log("Estoy parado y me arranco");
    btnLeft.setAttribute("class", "btn stop");
    btnLeft.innerHTML = "STOP";
    btnRight.setAttribute("class", "btn split");
    btnRight.innerHTML = "SPLIT";
    chronometer.startClick();
  } else {
    console.log("Estoy arrancado y me paro");
    btnLeft.setAttribute("class", "btn start");
    btnLeft.innerHTML = "START";
    btnRight.setAttribute("class", "btn reset");
    btnRight.innerHTML = "RESET";
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.getAttribute("class") == "btn reset") {
    
  } else {
    printSplit();
    
  }
});
