var chronometer = new Chronometer();
//get all elements
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var splitList = document.getElementById("splits");

setInterval(function() {
 console.log("setInterval to printTime()");
 printTime();
}, 1000);

function printTime() {
 printSeconds();
 printMinutes();
}

function printMinutes() {
 var minutes = chronometer.twoDigitsNumber(chronometer.setMinutes());
 minDec.innerText = minutes[0];
 minUni.innerText = minutes[1];
}

function printSeconds() {
 var seconds = chronometer.twoDigitsNumber(chronometer.setSeconds());
 secDec.innerText = seconds[0];
 secUni.innerText = seconds[1];
}

//function printMilliseconds() {}

function printSplit() {
 var liElement = document.createElement("li");
 liElement.innerText =
   chronometer.twoDigitsNumber(chronometer.setMinutes()) +
   ":" +
   chronometer.twoDigitsNumber(chronometer.setSeconds());
 splitList.appendChild(liElement);
}

function clearSplits() {
 var liItems = splitList.children;
 for (var i = liItems.length - 1; i >= 0; i--) {
   splitList.removeChild(liItems[0]);
 }
}



// Start/Stop Button
btnLeft.addEventListener("click", function() {
 if (btnLeft.className.includes("start")) {
   btnLeft.className = "btn stop";
   btnLeft.innerText = "STOP";

   btnRight.className = "btn split";
   btnRight.innerText = "SPLIT";
   chronometer.startClick();
 } else {
   btnLeft.className = "btn start";
   btnLeft.innerText = "START";

   btnRight.className = "btn reset";
   btnRight.innerText = "RESET";
   chronometer.stopClick();
 }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
 if (btnRight.className.includes("reset")) {
   clearSplits();
   chronometer.resetClick();
 } else {
   printSplit();
 }
});