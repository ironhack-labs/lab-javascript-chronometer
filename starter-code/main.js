var chrono = new Chronometer("btnLeft", "btnRight", "sphere");
console.log(chrono);

// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  console.log("Left button clicked");
  if(this.className === "btn start") {
    chrono.startClick();  
  }
  console.log(chrono);
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  console.log("Right button clicked");
  console.log(this);
});