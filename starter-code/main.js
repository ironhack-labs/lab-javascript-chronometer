var chronometer = new Chronometer();
var chronometerIsOn = false;
// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function() {
  if (!chronometerIsOn) {
    chronometerIsOn = true;
    chronometer.startClick();
  } else {
    chronometerIsOn = false;
    chronometer.stopClick();
  }
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function() {
  if (chronometerIsOn)  {
    chronometer.getSplits();
  } else {
    chronometer.doReset();
  }
});
