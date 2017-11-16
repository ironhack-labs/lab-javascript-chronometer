var chrono = new Chronometer("btnLeft", "btnRight", "sphere");

// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  //console.log("Left button clicked");
  switch(chrono.status) {
    case "Stopped":
      chrono.startClick();
      break; 
    case "Running":
      chrono.stopClick();
      break;
    default:
      alert("WTF");
  }
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  //console.log("Right button clicked");
  switch(document.getElementById("btnRight").className) {
    case "btn split":
      chrono.getSplitTime();
      break;
    case "btn reset":
      chrono.doReset();
      break;
    default:
      alert("WTF2");
  }
});