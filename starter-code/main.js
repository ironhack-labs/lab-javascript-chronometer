"use strict";

var chronometer = new Chronometer();

// Start/Stop Button
var leftButton = document.getElementById("btnLeft");
leftButton.addEventListener("click", function() {
  if (!chronometer.started) {
    leftButton.setAttribute('class', 'btn stop');
    leftButton.innerText = 'STOP';
    rightButton.setAttribute('class', 'btn split');
    rightButton.innerText = 'SPLIT';
    chronometer.start();
  } else {
    leftButton.setAttribute('class', 'btn start');
    leftButton.innerText = 'START';
    rightButton.setAttribute('class', 'btn reset');
    rightButton.innerText = 'RESET';
    chronometer.stop();
  }
});

// Reset/Split Button
var rightButton = document.getElementById("btnRight");
rightButton.addEventListener("click", function() {
  if (rightButton.className === 'btn split') {
    chronometer.split();
  } else {
    rightButton.setAttribute('class', 'btn reset');
    chronometer.reset();
  }

  // console.log("Right button clicked");
});
