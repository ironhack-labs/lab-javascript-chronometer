"use strict";

function MinDec(seconds){
  var aux = 0;
  var minCen = 0;

  aux = Math.trunc(seconds/60);
  minCen = Math.trunc(aux/10);

  return (minCen);
}

function MinUnity (seconds){
  var aux = 0;
  var minUnity = 0;

  aux = Math.trunc(seconds/60);
  minUnity = aux % 10;

  return (minUnity);
}

function SecDec (seconds){
  var aux = 0;
  var secCen = 0;

  aux = seconds % 60;
  secCen = Math.trunc(aux / 10);

  return (secCen);
}

function SecUnity (seconds){
  var aux = 0;
  var secUnity = 0;

  aux = seconds % 60;
  secUnity = aux % 10;

  return (secUnity);
}

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

      var minDec = document.getElementById("minDec");
      minDec.innerText = MinDec(seconds);

      var minUnity = document.getElementById("minCen");
      minUnity.innerText = MinUnity(seconds);

      var segDec = document.getElementById("secDec");
      segDec.innerText = SecDec(seconds);

      var segUnity = document.getElementById("secCen");
      segUnity.innerText = SecUnity(seconds);

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
