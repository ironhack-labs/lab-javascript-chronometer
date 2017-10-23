var chrono = new Chronometer(0, 0, 0);



// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  if(document.getElementsByClassName("btn start").length == 1){
    chrono.startClick();
    chrono.startTime();
  } else {
    chrono.stopClick();
  }
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  if(document.getElementsByClassName("btn stop").length == 1){
    chrono.stopClick();
  } else {
    console.log('entro al split');
  }
});
