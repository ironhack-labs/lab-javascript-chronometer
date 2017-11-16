// getElements
var sec = document.getElementById("secCen");

// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
if (this.classList.contains("start")) {
  Chronometer.startClick();
  startChronometer();
} else {
  Chronometer.stopClick();
  stopChronometer();
}
  console.log("Left button clicked");
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  console.log("Right button clicked");
});
