var chronometer = new Chronometer();

function Chronometer () {

}

Chronometer.prototype.startClick = function () {
  btnLeft.className = "btn stop";
  btnLeft.innerHTML = "STOP";
  btnRight.className = "btn split";
  btnRight.innerHTML = "SPLIT";
  this.timmerSetup();
};

Chronometer.prototype.stopClick = function () {
  btnLeft.className = "btn start";
  btnLeft.innerHTML = "START";
  btnRight.className = "btn reset";
  btnRight.innerHTML = "RESET";
  this.timmerStop();
};

var counter = 50;
var seconds = 0;
var minutes = 0;
var minDecV = 0;
var minCenV = 0;
var secDecV = 0;
var secCenV = 0;


Chronometer.prototype.timmerSetup = function () {

  this.counterID = setInterval(function () {
    minutes = Math.trunc(counter/60);
    if(minutes < 10) {
      minCenV = minutes;
    } else {
      minCenV = minutes.toString()[1];
    }
    if(minutes < 10){
      minDecV = 0;
    } else {
      minDecV = seconds.toString()[0];
    }

    seconds = counter - (minutes * 60);
      if (seconds < 10) {
        secCenV = seconds;
      } else if (seconds >=10) {
        secCenV = seconds.toString()[1];
      }
      if(seconds < 10){
        secDecV = 0;
      } else {
        secDecV = seconds.toString()[0];
      }

      minDec.innerHTML = minDecV;
      minCen.innerHTML = minCenV;
      secDec.innerHTML = secDecV;
      secCen.innerHTML = secCenV;

    counter ++;
    },1000);
    };

    Chronometer.prototype.timmerStop = function () {
      clearInterval(this.counterID);
    };

    Chronometer.prototype.splitClick = function () {
        var splitList = document.getElementById("splitList");
        var newLi = document.createElement('li');
        newLi.innerHTML = minDec.innerHTML + minCen.innerHTML + ":" + secDec.innerHTML + secCen.innerHTML;
        splitList.appendChild(newLi);
    };


    Chronometer.prototype.reset = function () {
      this.counter = 0;
      minDec.innerHTML = 0;
      minCen.innerHTML = 0;
      secDec.innerHTML = 0;
      secCen.innerHTML = 0;
      while (splitList.hasChildNodes()) {
        splitList.removeChild(splitList.firstChild);
      }

    };
