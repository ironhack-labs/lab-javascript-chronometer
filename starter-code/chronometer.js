function Cronometer() {
  this.minDec = 0;
  this.minCen = 0;
  this.secDec = 0;
  this.secCen = 0;
  this.status = 0;
};

Cronometer.prototype.starClick = function() {
  this.changeLeftButton();
  this.changeRightButton();
  var that = this;
  this.status = setInterval(function() {
    that.runCount();
  }, 1 * 1000);

};

Cronometer.prototype.runCount = function() {
  this.secCen++;

  if (this.secCen > 9) {
    this.secDec++;
    this.secCen = 0;
  }
  if (this.secDec >= 6) {
    this.minCen++;
    this.secDec = 0;
  }
  if (this.minCen > 9) {
    this.minDec++;
    this.minCen = 0;
  }
  if (this.minDec >= 6) {
    this.minDec = 0;
    this.minCen = 0;
    this.secDec = 0;
    this.secCen = 0;
  }
  this.paintingNumbers();
};

Cronometer.prototype.changeLeftButton = function() {
  var classLeft = document.getElementById("btnLeft");
  if (classLeft.className === "btn start") {
    classLeft.className = "btn stop";
    classLeft.innerHTML = "STOP";
  } else {
    classLeft.className = "btn start";
    classLeft.innerHTML = "START";
  }
};

Cronometer.prototype.changeRightButton = function() {
  var classRight = document.getElementById("btnRight");
  if (classRight.className === "btn reset") {
    classRight.className = "btn split";
    classRight.innerHTML = "SPLIT";
  } else {
    classRight.className = "btn reset";
    classRight.innerHTML = "RESET";
  }
};

Cronometer.prototype.stopClick = function() {
  this.changeLeftButton();
  this.changeRightButton();
  clearInterval(this.status);
};

Cronometer.prototype.paintingNumbers = function() {
  document.getElementById("minDec").innerHTML = this.minDec;
  document.getElementById("minCen").innerHTML = this.minCen;
  document.getElementById("secDec").innerHTML = this.secDec;
  document.getElementById("secCen").innerHTML = this.secCen;
};

Cronometer.prototype.paintSplit = function() {
  var parent = document.getElementById("splits");
  var li = document.createElement("li");
  li.className = "liElem";
  li.innerHTML = this.minDec.toString() + this.minCen.toString() + ":" + this.secDec.toString() + this.secCen.toString();
  parent.appendChild(li);
};

Cronometer.prototype.reset = function() {
  this.nimDec = 0;
  this.minCen = 0;
  this.secDec = 0;
  this.secCen = 0;
  this.paintingNumbers();

  var parent = document.getElementById("splits");
  parent.innerHTML = "";

};
