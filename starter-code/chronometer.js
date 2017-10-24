"use strict";

function Chronometer() {
  this.seconds = 0;
  this.chronometerDial = 0;
}

// CLICK THE START BUTTON
Chronometer.prototype.start = function() {
  var that = this;

  var leftBtn = document.getElementById('btnLeft');
  var rightBtn = document.getElementById('btnRight');

  leftBtn.innerHTML = "STOP";
  leftBtn.className = "btn stop";

  rightBtn.innerHTML = "SPLIT";
  rightBtn.className = "btn split";

  this.chronometerDial = setInterval(function() {
    that.seconds++;

    var min = Math.floor(that.seconds / 60);
    var sec = that.seconds % 60;

    var minDec = Math.floor(min / 10);
    var minCen = min % 10;
    var secDec = Math.floor(sec / 60);
    var secCen = sec % 60;

    document.getElementById('minDec').innerHTML = minDec;
    document.getElementById('minCen').innerHTML = minCen;
    document.getElementById('secDec').innerHTML = secDec;
    document.getElementById('secCen').innerHTML = secCen;
  }, 1000);

};

// CLICK THE STOP BUTTON
Chronometer.prototype.stop = function() {
  var leftBtn = document.getElementById('btnLeft');
  var rightBtn = document.getElementById('btnRight');

  leftBtn.innerHTML = "START";
  leftBtn.className = "btn start";

  rightBtn.innerHTML = "RESET";
  rightBtn.className = "btn reset";

  clearInterval(this.chronometerDial);
};


// CLICK THE STOP BUTTON
Chronometer.prototype.getSplit = function() {
  return this.seconds;
};



//
// document.getElementById('btnLeft').addEventListener("click", function (){
//
//   document.getElementById('btnLeft').innerHTML = "STOP";
//   document.getElementById('btnLeft').className = "btn stop";
// });


// addEventListener (mejor que .click)
