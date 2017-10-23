var myChrono = new Chronometer;

// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function() {
    console.log("Left button clicked");
    if (this.classList.contains("stop")) {
      myChrono.startClick();
      // myChrono.startCounting();
    } else {
      myChrono.resetClick();
    }
  });
//
// // Reset/Split Button
// document.getElementById("btnRight").addEventListener("click", function () {
//   console.log("Right button clicked");
//   myChrono.resetClick();
// });
