/* Instancia*/
var chronometer = new Chronometer();

// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  if (btnLeft.className == 'btn start') {
    chronometer.startClick();
  } else if (btnLeft.className == 'btn stop') {
    chronometer.stopClick();
  }
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  if (btnRight.className === 'btn split') {
    chronometer.recordTime();
  } else if (btnRight.className === 'btn reset') {
    chronometer.resetTime();
  }
});