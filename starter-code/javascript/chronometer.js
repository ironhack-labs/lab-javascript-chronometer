var htmlCollection;
var startButton;
var resetButton;
var active = false;

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.counter = 0;
    this.intervalID = undefined;
  }
  startClick() {
    this.intervalID = setInterval(() => {
      this.currentTime += 1;
      this.counter++;
      if (this.counter == 6000) {
        this.currentTime = this.currentTime + 4000;
        this.counter = 0;
      }
      chronometerUpdate(this);
    }, 1);
    this.intervalID;
  }
  stopClick() {
    clearInterval(this.intervalID);
  }
}
function chronometerUpdate(obj) {
  if (obj.currentTime < 10) {
    var currentTime = "00000" + String(obj.currentTime);
  } else if (obj.currentTime < 100) {
    var currentTime = "0000" + String(obj.currentTime);
  } else if (obj.currentTime < 1000) {
    var currentTime = "000" + String(obj.currentTime);
  } else if (obj.currentTime < 10000) {
    var currentTime = "00" + String(obj.currentTime);
  } else if (obj.currentTime < 100000) {
    var currentTime = "0" + String(obj.currentTime);
  } else {
    var currentTime = String(obj.currentTime);
  }
  for (i = 0; i < currentTime.length; i++) {
    htmlCollection[i].innerHTML = currentTime[i];
  }
}

window.onload = function() {
  var ironChrom = new Chronometer();
  htmlCollection = document.getElementsByClassName("chronometer");
  startButton = document.getElementById("btnLeft");
  startButton.addEventListener("click", function() {
    if (active === false) {
      ironChrom.startClick();
      active = true;
      startButton.innerHTML = "Pause";
    } else {
      ironChrom.stopClick();
      active = false;
      startButton.innerHTML = "Start";
    }
  });
  resetButton = document.getElementById("btnRight");
  resetButton.addEventListener("click", function() {
    ironChrom.stopClick();
    ironChrom.currentTime = 0;
    active = false;
    startButton.innerHTML = "Start";
    for (i = 0; i < htmlCollection.length; i++) {
      htmlCollection[i].innerHTML = 0;
    }
  });
};
