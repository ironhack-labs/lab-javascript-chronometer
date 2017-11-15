// Start/Stop Button
var chronometer = new Chronometer();

document.getElementById("btnLeft").addEventListener("click", function () {
  if(document.getElementById("btnLeft").className === "btn start"){
      console.log("Left button clicked");
      chronometer.startClick();
} else if(document.getElementById("btnLeft").className === "btn stop" ){
  console.log("Left button clicked to stop");
chronometer.stopClick();}
});


// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  if (document.getElementById("btnRight").className === "btn split"){
  // var leftStop = document.getElementById("btnLeft").innerHTML = "START";
  // var rightStop = document.getElementById("btnRight").innerHTML = "RESET";
  console.log("Right button clicked");
  chronometer.splitClick();
} else if(document.getElementById("btnRight").className === "btn reset" ){
  console.log("Left button clicked to reset");
chronometer.resetClick();}
});
