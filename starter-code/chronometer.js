function Chronometer(status) {
  this.status = status;
}


Chronometer.prototype.startClick = function() {
  var btnLeft = document.getElementById('btnLeft');
  btnLeft.classList.remove('start');
  btnLeft.classList.add('stop');
  btnLeft.innerText = 'STOP';
  this.status = "running";
};

Chronometer.prototype.stopClick = function() {
  var btnLeft = document.getElementById('btnLeft');
  btnLeft.classList.remove('stop');
  btnLeft.classList.add('start');
  btnLeft.innerText = 'START';
  this.status = "stopped";
};

Chronometer.prototype.resetStyle = function() {
  var btnRight = document.getElementById('btnRight');
  btnRight.classList.remove('reset');
  btnRight.classList.add('split');
  btnRight.innerText = 'SPLIT';
};

Chronometer.prototype.splitStyle = function() {
  var btnRight = document.getElementById('btnRight');
  btnRight.classList.remove('split');
  btnRight.classList.add('reset');
  btnRight.innerText = 'RESET';
};

Chronometer.prototype.resetClick = function() {
//define reset 00:00:00 Chronometer function
};

Chronometer.prototype.splitClick = function() {
//define create laps in the Chronometer
};
