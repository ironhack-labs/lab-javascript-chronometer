var chrono = new Chronometer();

// Start/Stop Button
$("#btnLeft").click(function() {
  chrono.startClick();
});

// Reset/Split Button
$("#btnRight").click(function() {
  chrono.stopClick();
});

