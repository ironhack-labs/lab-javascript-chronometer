// Start/Stop Button

var started = false;
var time = 0;
var intervalId;


function updateClock() {
  time = time + 1;
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;
  var minDec = Math.floor(minutes / 10);
  var minCen = minutes % 10;
  var secDec = Math.floor(seconds / 10);
  var secCen = seconds % 10;
  document.getElementById("minDec").innerHTML = minDec;
  document.getElementById("minCen").innerHTML = minCen;
  document.getElementById("secDec").innerHTML = secDec;
  document.getElementById("secCen").innerHTML = secCen;

  console.log(minDec, minCen, secDec, secCen);
}

document.getElementById("btnLeft").addEventListener("click", function() {
  console.log("Left button clicked");

  if (!started) {
    seconds = 0;
    started = true;
    intervalId = setInterval(updateClock, 100);
  } else {
    started = false;
    clearInterval(intervalId);
  }

});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function() {
  console.log("Right button clicked");
});
