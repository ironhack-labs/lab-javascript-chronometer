var crono = new Cronometer();

// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function() {
  console.log("Left button clicked");
  var classLeft = document.getElementById("btnLeft");

  if (classLeft.className === "btn start") {
    crono.starClick();
  } else {
    crono.stopClick();
  }
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function() {
  console.log("Right button clicked");
  var classRight= document.getElementById('btnRight');
  if(classRight.className === "btn split"){
      crono.paintSplit();
  }else{
    crono.reset();
  }

});
