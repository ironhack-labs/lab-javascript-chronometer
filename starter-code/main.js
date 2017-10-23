// Start/Stop Button

var chrono = new Chronometer();
document.getElementById("btnLeft").addEventListener("click", function(){
    chrono.startClick();
    chrono.startTimer();
});



// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  console.log("Right button clicked");

});
