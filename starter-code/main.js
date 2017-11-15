// Start/Stop Button
var chronometer = new Chronometer();

document.getElementById("btnLeft").addEventListener("click", function () {
  if(document.getElementById("btnLeft").className === "btn start"){
    chronometer.startClick();
  } else {
    chronometer.stopClick();
  }
  console.log("Left button clicked");
});



// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  console.log("Right button clicked");
});
