function Chronometer(minutes, seconds) {
  this.minutes = minutes;
  this.seconds = seconds;
}

Chronometer.prototype.startClick = function() {

  document.getElementById("btnLeft").innerHTML = "STOP";
  document.getElementById("btnLeft").className = "btn stop"
}

Chronometer.prototype.stopClick = function() {

  document.getElementById("btnLeft").innerHTML = "START";
  document.getElementById("btnLeft").className = "btn start"
}

Chronometer.prototype.resetClick = function() {
  document.getElementById("btnRight").innerHTML = "SPLIT";
  document.getElementById("btnRight").className = "btn split"
}

Chronometer.prototype.splitClick = function() {
  document.getElementById("btnRight").innerHTML = "RESET";
  document.getElementById("btnRight").className = "btn reset"
}


function seconds() {
  var i = 0;
  var minutes = 0;
  var counterSeconds = setInterval(function() {
    console.log(i);
    i++;
    if (i == 10) {
      i=0;
      minutes +=1;
      console.log("Minutes"+minutes)
    }
  }, 1000);
}

function minutes() {
  var j = 0;
var counterMinutes = setInterval(function() {
//     console.log(j);
//     j++;
//     if (j == 60) {
//       clearInterval(counterMinutes);
//     }
//   }, 1000 * 60);
// }

console.log(seconds()[1],seconds()[0])
