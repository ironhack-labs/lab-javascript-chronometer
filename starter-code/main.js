
var chrono = new Chronometer();

// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  chrono.startClick();
  console.log("Left button clicked");
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  chrono.stopClick();
  console.log("Right button clicked");
});
