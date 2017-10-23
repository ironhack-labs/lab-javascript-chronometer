// Start/Stop Button
console.log(classLeft);
console.log(objeto);
var objeto = new Chronometer();

document.getElementById("btnLeft").addEventListener("click", function () {
  if(classLeft == "btn start"){
    objeto.startClick();
    objeto.setIntervalId();
  }
  if(classLeft == "btn stop") {
    objeto.stopClick();
    console.log("stop");
  }
  console.log("Left button clicked");

});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  console.log("Right button clicked");

});
