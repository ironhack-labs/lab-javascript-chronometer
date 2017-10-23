var chrono = new Chronometer(0, 0, 0);



// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  if(document.getElementsByClassName("btn start").length == 1){
    chrono.startClick();
    chrono.startTime();
  } else {
    chrono.stopClick();
    chrono.stopTime();
  }
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  if(document.getElementsByClassName("btn reset").length == 1){
    chrono.resetClick();
  } else {
    chrono.splitClick();
    console.log('entro al reset/split del main.js');
  }
});
