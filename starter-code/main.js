var chronometer = new Chronometer();

// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function() {
  if (chronometer.isStarted) {
    chronometer.stop();
  } else {
    chronometer.start();
  }
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function() {
  if (chronometer.isStarted) {
    chronometer.split();
  } else {
    chronometer.reset();
  }
});
