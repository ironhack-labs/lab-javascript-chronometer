var chrone = new Chronometer()

// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  var start = document.getElementById('btnLeft').textContent;
  if (start == 'START'){
    chrone.startClick();
  }else
  chrone.stopClick();
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  // chrone.stopClick();
  console.log("Right button clicked");
});
