var myChrono = new Chronometer;

// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function() {
    // console.log("Left button clicked");
    if (this.classList.contains("stop")) {
      myChrono.stopClick();
    } else {
      myChrono.startClick();
    }
  });

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  // console.log("Right button clicked");
  myChrono.resetClick();
});
