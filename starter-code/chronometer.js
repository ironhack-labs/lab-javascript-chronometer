var secCen = 0;
var secDec = 0;
var minCen = 0;
var minDec = 0;

var idSecCen = document.getElementById('secCen');
var idSecDec = document.getElementById('secDec');
var idMinCen = document.getElementById('minCen');
var idMinDec = document.getElementById('minDec');

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
  var secCen = 0;
  var secDec = 0;
  var minCen = 0;
  var minDec = 0;
  idSecCen.innerText = secCen;
  idSecDec.innerText = secDec;
  idMinCen.innerText = minCen;
  idMinDec.innerText = minDec;
  //define reset 00:00 Chronometer function
};

Chronometer.prototype.splitClick = function() {
  //define create laps in the Chronometer
};

Chronometer.prototype.startTime = function() {
  var intervalId = setInterval(function() {
  if (secCen >= 9) {
  secDec++;
  secCen = 0;
  if (secDec > 5) {
    minCen++;
    secDec = 0;
    if (minCen >= 9) {
      minDec++;
      minCen = 0;
      if (minDec > 5) {
        secCen = 0;
        secDec = 0;
        minCen = 0;
        minDec = 0;
      };
    };
  };
} else {
  secCen++;
  idSecCen.innerText = secCen;
  idSecDec.innerText = secDec;
  idMinCen.innerText = minCen;
  idMinDec.innerText = minDec;

};
    console.log(minDec + " " + minCen  + " " + secDec + " " + secCen);

    if (chrono.status == "stopped") {
      clearInterval(intervalId);
    }
  }, 1000);
};
