function Chronometer() {
  this.minDec = 0;
  this.minCen = 0;
  this.secDec = 0;
  this.secCen = 0;
}
var chrono;

Chronometer.prototype.startClick = function() {
  var btnL = document.getElementById('btnLeft');
  var btnR = document.getElementById('btnRight');
  btnL.className = "btn stop";
  btnL.innerHTML = "STOP";
  btnR.className = "btn split";
  btnR.innerHTML = "SPLIT";

  secDec = this.secDec;
  secCen = this.secCen;
  minDec = this.minDec;
  minCen = this.minCen;


  chrono = setInterval(function() {
    if (secCen >= 10) {
      secCen = 0;
      secDec += 1;
    }
    document.getElementById('secCen').innerHTML = secCen;
    secCen++;

    if (secDec >= 6) {
      minCen += 1;
      secDec = 0;
    }
    document.getElementById('secDec').innerHTML = secDec;

    if (minCen >= 10) {
      minDec += 1;
      minCen = 0;
    }
    document.getElementById('minCen').innerHTML = minCen;

    if (minDec >= 6) {
      secCen = 0, secDec = 0, minCen = 0, minDec = 0;
    }
    document.getElementById('minDec').innerHTML = minDec;


  }, 1000);
};

Chronometer.prototype.stopClick = function() {
  var btnL = document.getElementById('btnLeft');
  var btnR = document.getElementById('btnRight');
  btnL.className = "btn start";
  btnL.innerHTML = "START";
  btnR.className = "btn reset";
  btnR.innerHTML = "RESET";
  clearInterval(chrono);
  secDec = this.secDec;
  secCen = this.secCen;
  minDec = this.minDec;
  minCen = this.minCen;
};

Chronometer.prototype.getSplits = function() {
  var list = document.getElementById('splitsList');
  var newElement = document.createElement('li');
  var splitMinDec,splitMinCen, splitSecDec,splitSecCen;

  if (splitMinDec == 0) {
    splitMinDec = "0" + minDec;
  } else {
    splitMinDec = minDec;
  }
  if (splitMinCen == 0) {
    splitMinCen = "0" + minCen;
  } else {
    splitMinCen = minCen;
  }
  if (splitSecDec == 0) {
    splitSecDec = "0" + secDec;
  } else {
    splitSecDec = secDec;
  }
  if (splitSecCen == 0) {
    splitSecCen = "0" + secCen;
  } else {
    splitSecCen = secCen;
  }
  newElement.innerHTML = splitMinDec + splitMinCen+ ":" + splitSecDec + splitSecCen ;
  list.appendChild(newElement);
};

Chronometer.prototype.doReset = function() {

  this.secDec = 0;
  this.secCen = 0;
  this.minDec = 0;
  this.minCen = 0;

  document.getElementById('secCen').innerHTML = "0";
  document.getElementById('secDec').innerHTML = "0";
  document.getElementById('minCen').innerHTML = "0";
  document.getElementById('minDec').innerHTML = "0";

  var list = document.getElementById('splitsList');
  list.innerHTML = "";
};
