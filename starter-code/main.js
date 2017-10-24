// Start/Stop Button
var theChrono = new Chronometer();

document.getElementById("btnLeft").addEventListener("click", function() {
  console.log("Left button clicked");


  if (document.getElementById("btnLeft").innerHTML === "START") {
    console.log("START");
    theChrono.startClick();
  } else if (document.getElementById("btnLeft").innerHTML === "STOP") {
    console.log("STOP");
    theChrono.stopClick();
  }


});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function() {
  console.log("Right button clicked");

  if (document.getElementById("btnLeft").innerHTML === "START") {
    console.log("RESET");
    theChrono.reset();

  } else if (document.getElementById("btnLeft").innerHTML === "STOP") {
    console.log("SPLIT");
    theChrono.split();
  }

});
