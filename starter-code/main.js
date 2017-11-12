/* Instancia*/
var chronometer = new Chronometer();

// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  chronometer.startClick()
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  chronometer.stopClick()
});