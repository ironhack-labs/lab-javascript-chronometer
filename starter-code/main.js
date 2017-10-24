"use strict";

var chronometer = new Chronometer();
var chronometerRunning = false;

// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function() {
  console.log("Left button clicked");
  if (chronometerRunning === false) {
    chronometerRunning = true;
    chronometer.start();
  } else {
    chronometerRunning = false;
    chronometer.stop();
  }
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function() {
  console.log("Right button clicked");
  // var split = chronometer.getSplit();
  // var min = split / 60;
  // var min = split % 60;
});
