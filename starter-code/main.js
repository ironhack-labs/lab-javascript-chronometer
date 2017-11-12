var chrono = new Chronometer("btnLeft", "btnRight", "sphere");
console.log(chrono);

// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  console.log("Left button clicked");
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
  console.log(chrono);
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  console.log("Right button clicked");
  if(document.getElementById("btnRight").className === "btn split") {
    chrono.getSplitTime();
  }
});