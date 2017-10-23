function Chronometer() {
  this.started = true;
  this.seconds = 0;
  this.miliseconsInterval = null;


}

Chronometer.prototype.startClick = function() {
  var a = document.getElementById('btnLeft');
  a.className = "btn stop";
  a.innerHTML = "STOP";
  var rightBut = document.getElementById('btnRight');
  rightBut.className = "btn split";
  rightBut.innerHTML = "SPLIT";

};


Chronometer.prototype.stopClick = function() {
  var b = document.getElementById('btnLeft');
  b.innerHTML = "START";
  b.className = "btn start";
  var rightBut2 = document.getElementById('btnRight');
  rightBut2.className = "btn reset";
  rightBut2.innerHTML = "RESET";
};

Chronometer.prototype.startTimer = function() {
  var that = this.started;
  document.getElementById('secCen').innerHTML = this.seconds;
  this.miliseconsInterval = setInterval(function() {
    this.seconds++;
  }, 1000);

};
