var chrono = new Chronometer;
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');

// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  console.log("Left button clicked");
  if(btnLeft.className === 'btn start'){
    chrono.startClick();
  } else {
    chrono.stopClick();
  }
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  console.log("Right button clicked");
  if(btnRight.className === 'btn split'){
    chrono.saveSplit();
  } else {
    chrono.resetChrono();
  }
});
