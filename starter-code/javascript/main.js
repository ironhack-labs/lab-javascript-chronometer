// ================================================================
// Set up objects
// ================================================================

var chronometerDisplay = new ChronometerDisplay();
var chronometer = new Chronometer(chronometerDisplay);

// ================================================================
// Add event listeners for buttons
// ================================================================

let btnLeft = chronometerDisplay.btnLeft;
let btnRight = chronometerDisplay.btnRight;

  // Start/Stop button
btnLeft.addEventListener('click', () => {
  if( btnLeft.innerHTML === "START" ) {
    chronometer.startClick();
    btnLeft.innerHTML = "STOP";
    btnLeft.className = "btn stop";
    btnRight.innerHTML = "SPLIT"
    btnRight.className = "btn split";
  } else {
    chronometer.stopClick();
    btnLeft.innerHTML = "START";
    btnLeft.className = "btn start";
    btnRight.innerHTML = "RESET"
    btnRight.className = "btn reset";
  };

});
  // Reset/Split Button
btnRight.addEventListener('click', () => {
  if( btnRight.innerHTML === "RESET" ) {
  chronometer.resetClick();
  } else {
  chronometer.splitClick();
  };
});