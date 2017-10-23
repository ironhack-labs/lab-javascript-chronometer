var newCrono = new Chronometer();

// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  // console.log("Left button clicked");
  newCrono.startClick();
  
 
  
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  console.log("Right button clicked");
  newCrono.changeRightButton();
});

