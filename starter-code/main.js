var c = new Chronometer(23,24);
console.log(c);
// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  console.log("Left button clicked");
    c.leftBtnClicked();
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  c.rightBtnClicked();
  console.log("Right button clicked");
});
