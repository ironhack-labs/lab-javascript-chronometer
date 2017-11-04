var chronometer = new Chronometer();


// Start/Stop Button
$("#btnLeft").click(function () {
  if ($("#btnLeft").attr("class") === "btn start"){
    chronometer.startClick();
  }
  else {
    chronometer.stopClick();
  }
});

// Reset/Split Button
$("#btnRight").click(function () {
  if ($("#btnRight").attr("class") === "btn reset"){
    chronometer.startClick();
  }
  else {
    chronometer.stopClick();
  }
});
