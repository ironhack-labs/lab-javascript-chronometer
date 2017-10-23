function Chronometer() {
  this.min = 0;
  this.sec = 0;
  this.mili = 0;
}

var chrono;

Chronometer.prototype.startClick = function() {
  var btnL = document.getElementById('btnLeft');
  var btnR = document.getElementById('btnRight');
  btnL.className = "btn stop";
  btnL.innerHTML = "STOP";
  btnR.className = "btn split";
  btnR.innerHTML = "SPLIT";
  mins = this.min;
  secs = this.sec;
  milis = this.mili;
  chrono = setInterval(function() {
    if (milis < 10) {
      milis = "0" + milis;
    }
    document.getElementById('milis').innerHTML = milis;
    milis++;
    if (milis > 99) {
      milis = 0;
      secs++
      if (secs < 10) {
        secs = "0" + secs;
      }
      document.getElementById('secs').innerHTML = secs;
      if (secs >= 59) {
        secs = -1;
      }
      if (secs == 0) {
        mins++;
        if (mins < 10) {
          mins = "0" + mins;
        }
        document.getElementById('mins').innerHTML = mins;
        if (mins >= 59) {
          mins = -1;
        }
      }
    }
  }, 1 * 10);
};

Chronometer.prototype.stopClick = function() {
  var btnL = document.getElementById('btnLeft');
  var btnR = document.getElementById('btnRight');
  btnL.className = "btn start";
  btnL.innerHTML = "START";
  btnR.className = "btn reset";
  btnR.innerHTML = "RESET";
  clearInterval(chrono);
  this.min = mins;
  this.sec = secs;
  this.mili = milis;
};

Chronometer.prototype.getSplits = function() {
  var list = document.getElementById('splitsList');
  var newElement = document.createElement('li');
  var splitMins, splitSecs, splitMilis;
  if (mins == 0) {
    splitMins = "0" + mins;
  } else {
    splitMins = mins;
  }
  if (secs == 0) {
    splitSecs = "0" + secs;
  } else {
    splitSecs = secs;
  }
  if (milis == 0) {
    splitMilis = "0" + milis;
  } else if (milis <= 10) {
    splitMilis = "0" + milis;
  } else {
    splitMilis = milis;
  }
  newElement.innerHTML = splitMins + ":" + splitSecs + ":" + splitMilis;
  list.appendChild(newElement);
}

Chronometer.prototype.doReset = function() {
  this.min = 0;
  this.sec = 0;
  this.mili = 0;
  document.getElementById('secs').innerHTML = "00";
  document.getElementById('mins').innerHTML = "00";
  document.getElementById('milis').innerHTML = "00";
  var list = document.getElementById('splitsList');
  list.innerHTML = "";
}
