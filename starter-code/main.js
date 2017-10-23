// Start/Stop Button
var chronometer = new Chronometer();

document.getElementById("btnLeft").addEventListener("click", function() {
  if (document.getElementById('btnLeft').innerHTML.includes('STOP')) {
    chronometer.stopClick();
  } else {

    chronometer.startClick();
    chronometer.startTimer();
  }
});



// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function() {
  console.log("Right button clicked");
});
