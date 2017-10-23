function Chronometer() {
  this.min = 0;
  this.sec = 1;
}

var chrono;

Chronometer.prototype.startClick = function(){
  var btnL = document.getElementById('btnLeft');
  var btnR = document.getElementById('btnRight');
  btnL.className = "btn stop";
  btnL.innerHTML = "STOP";
  btnR.className = "btn split";
  btnR.innerHTML = "SPLIT";
  mins = this.min;
  secs = this.sec;
  chrono = setInterval(function () {
    if (secs < 10) {
      secs = "0" + secs;
    }
    document.getElementById('secs').innerHTML = secs;
    secs++;

    if (secs > 59) {
      secs = 0;
      mins++;
      if (mins < 10 ) {
        mins = "0" + mins;
      }
      document.getElementById('mins').innerHTML = mins;
    }
  }, 1 * 1000);
};

Chronometer.prototype.stopClick = function(){
  var btnL = document.getElementById('btnLeft');
  var btnR = document.getElementById('btnRight');
  btnL.className = "btn start";
  btnL.innerHTML = "START";
  btnR.className = "btn reset";
  btnR.innerHTML = "RESET";
  clearInterval(chrono);
  this.min = mins;
  this.sec = secs;
};

Chronometer.prototype.getSplits = function() {
  var list = document.getElementById('splitsList');
  var newElement = document.createElement('li');
  var splitMins, splitSecs;
    if (mins == 0) {
      splitMins = "0" + mins;
    } else {
      splitMins = mins;
    }
    if (secs == 0) {
      splitSecs = "0" + secs;
    } else if (secs <= 10 ) {
      splitSecs = "0" + (secs -1);
    } else {
      splitSecs = secs - 1;
    }
  newElement.innerHTML = splitMins + ":" + splitSecs;
  list.appendChild(newElement);
}

Chronometer.prototype.doReset = function() {
  this.min = 0;
  this.sec = 1;
  document.getElementById('secs').innerHTML = "00";
  document.getElementById('mins').innerHTML = "00";
  var list = document.getElementById('splitsList');
  list.innerHTML = "";
}
