var chrono = new Chronometer(0, 0);
var chrono2 = new Chronometer(10, 10);



// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  if(document.getElementsByClassName("btn start").length == 1){
    chrono.startClick();
  } else {
    chrono.stopClick();
  }
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  if(document.getElementsByClassName("btn stop").length == 1){
    chrono.stopClick();
  }
});
