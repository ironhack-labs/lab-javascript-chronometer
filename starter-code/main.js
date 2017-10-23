"use strict";

var started = false;
var seconds = 0;
var idInterval;


// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function() {
  console.log("Left button clicked");

  if (!started) {
    seconds = 0;
    idInterval = setInterval(function() {
      seconds += 1;
      var seg = document.getElementById("secCen");
      seg.innerText = seconds;
    }, 1000);

    started = true;

  } else {
    clearInterval(idInterval);
    started = false;
  }
});



// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function() {
  console.log("Right button clicked");
});
