var initialChrono = new Chronometer(0, 0);

console.log(initialChrono)

var btnLeft = document.getElementById("btnLeft").innerHTML

// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function() {
  if(document.getElementById("btnLeft").innerHTML == "START"){
    initialChrono.startClick()}
  else if(document.getElementById("btnLeft").innerHTML == "STOP"){
    initialChrono.stopClick()
  }
});


var btnRight= document.getElementById("btnRight").innerHTML

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function() {
  console.log("Right button clicked");
  if(document.getElementById("btnRight").innerHTML == "RESET"){
    initialChrono.resetClick()}
  else if(document.getElementById("btnRight").innerHTML == "SPLIT"){
    initialChrono.splitClick()
  }
});
