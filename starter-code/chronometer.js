function Chronometer() {
  this.seconds = 0;
  this.minutes = 0;
  this.intervalId = null;
  this.isStarted = false;
}

Chronometer.prototype.start = function() {
  this.isStarted = true;
  var secCen = document.getElementById("secCen");
  var secDec = document.getElementById("secDec");
  var minCen = document.getElementById("minCen");
  var minDec = document.getElementById("minDec");

  function count() {
    this.seconds++;
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes >= 60) {
        this.minutes = 0;
      }
    }
  }

  function updateScreen() {
    secCen.innerHTML++;
    if (secCen.innerHTML >= 10) {
      secCen.innerHTML = 0;
      secDec.innerHTML++;
      if (secDec.innerHTML >= 6) {
        secDec.innerHTML = 0;
        minCen.innerHTML++;
        if (minCen.innerHTML >= 10) {
          minCen.innerHTML = 0;
          minDec.innerHTML++;
          if (minDec.innerHTML >= 6) {
            minDec.innerHTML = 0;
            minCen.innerHTML = 0;
            secDec.innerHTML = 0;
            secCen.innerHTML = 0;
          }
        }
      }
    }
  }

  var changeLeft = document.getElementById("btnLeft");
  var changeRight = document.getElementById("btnRight");
  if (changeLeft.className === "btn start") {
    changeLeft.className = "btn stop";
    changeLeft.innerText = "STOP";
    changeRight.className = "btn split";
    changeRight.innerText = "SPLIT";
  }

  function execute() {
    updateScreen();
    count();
  }
  this.intervalId = setInterval(execute, 1000);
};

Chronometer.prototype.stop = function() {
  this.isStarted = false;
  clearTimeout(this.intervalId);
  var changeLeft = document.getElementById("btnLeft");
  var changeRight = document.getElementById("btnRight");
  if (changeLeft.className === "btn stop") {
    changeLeft.className = "btn start";
    changeLeft.innerText = "START";
    changeRight.className = "btn reset";
    changeRight.innerText = "RESET";
  }
};

Chronometer.prototype.split = function() {
  var secCen = document.getElementById("secCen");
  var secDec = document.getElementById("secDec");
  var minCen = document.getElementById("minCen");
  var minDec = document.getElementById("minDec");

  function createNew() {
    var parent = document.getElementById("split-time");
    var listElement = document.createElement("li");
    listElement.appendChild(document.createTextNode(currentSplit));
    parent.appendChild(listElement);
  }

  var currentSplit =
    minDec.innerText +
    " " +
    minCen.innerText +
    " : " +
    secDec.innerText +
    " " +
    secCen.innerText;

  createNew();
};

Chronometer.prototype.reset = function() {
  var secCen = document.getElementById("secCen");
  var secDec = document.getElementById("secDec");
  var minCen = document.getElementById("minCen");
  var minDec = document.getElementById("minDec");
  var ol = document.getElementById("split-time");
  this.seconds = 0;
  this.minutes = 0;
  minDec.innerHTML = 0;
  minCen.innerHTML = 0;
  secDec.innerHTML = 0;
  secCen.innerHTML = 0;
  while (ol.firstChild) {
    ol.removeChild(ol.firstChild);
  }
};
