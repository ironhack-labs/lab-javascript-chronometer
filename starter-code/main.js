// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  if(btnLeft.className === "btn start") {
    chronometer.startClick();
  } else {
    chronometer.stopClick();
  }
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  if(btnRight.className === "btn split"){
    chronometer.splitClick();
  } else {
    chronometer.reset();
  }
});
