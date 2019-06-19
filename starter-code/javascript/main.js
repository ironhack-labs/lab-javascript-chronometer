var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
let currId = 0;

function printTime() {
  currId = setInterval(function() {
    printMinutes();
    printSeconds();
    printMilliseconds();
  }, 10);
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  minutes = chronometer.twoDigitsNumber(minutes);
  $("#minDec").text(minutes[0]);
  $("#minUni").text(minutes[1]);
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  seconds = chronometer.twoDigitsNumber(seconds);
  $("#secDec").text(seconds[0]);
  $("#secUni").text(seconds[1]);
}

function printMilliseconds() {
  let miliSec = chronometer.getMilli();
  miliSec = chronometer.twoDigitsNumber(miliSec);
  $("#milDec").text(miliSec[0]);
  $("#milDec").text(miliSec[1]);
}

function printSplit() {
  let time = "";
  let theMinutes = chronometer.getMinutes();
  let theSeconds = chronometer.getSeconds();
  let theMili = chronometer.getMilli();
  theMinutes = chronometer.twoDigitsNumber(theMinutes);
  theSeconds = chronometer.twoDigitsNumber(theSeconds);
  theMili = chronometer.twoDigitsNumber(theMili);
  time = time + theMinutes + ":" + theSeconds + ":" + theMili;
  $("#splits").append(`<li>${time}</li>`);
}

function clearSplits() {
  $("#splits").empty();
}

function setStopBtn() {
  $("#btnLeft").text("STOP");
  $("#btnLeft")
    .addClass("stop")
    .removeClass("start");
}

function setSplitBtn() {
  $("#btnRight").text("SPLIT");
  $("#btnRight")
    .addClass("split")
    .removeClass("reset");
}

function setStartBtn() {
  $("#btnLeft").text("START");
  $("#btnLeft")
    .addClass("start")
    .removeClass("stop");
}

function setResetBtn() {
  $("#btnRight").text("RESET");
  $("#btnRight")
    .addClass("reset")
    .removeClass("split");
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if ($("#btnLeft").text() === "START") {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
    printTime();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if ($("#btnRight").text() === "SPLIT") {
    printSplit();
  } else {
    chronometer.resetClick();
    clearSplits();
  }
});
