// Start/Stop Button
var chronometer = new Chronometer();

document.getElementById("btnLeft").addEventListener("click", function () {
  if (this.getAttribute('class') === 'btn start') {
    chronometer.startClick();
  } else {
    chronometer.stopClick();
  }
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  if (this.getAttribute('class') === 'btn reset') {
    chronometer.resetClick();
  } else {
    chronometer.splitClick();
  }
});
