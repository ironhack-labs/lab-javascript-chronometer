//Chronometer
var chrono = new Chronometer("stopped");


// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function() {
  if (chrono.status == "stopped") {
    chrono.startClick();
    chrono.resetStyle();
    chrono.startTime();
  } else if (chrono.status == "running") {
    chrono.stopClick();
    chrono.splitStyle();
  }
    console.log("Left button clicked");
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function() {
  console.log("Right button clicked");
  chrono.resetClick();
});
