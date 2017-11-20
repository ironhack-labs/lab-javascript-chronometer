function Chronometer(leftBtnId, rightBtnId, secCenId, secDecId, minCenId, minDecId, milCenId, milDecId) {
  this.leftBtn = document.getElementById(leftBtnId);
  this.rightBtn = document.getElementById(rightBtnId);
  this.secCen = document.getElementById(secCenId);
  this.secDec = document.getElementById(secDecId);
  this.minCen = document.getElementById(minCenId);
  this.minDec = document.getElementById(minDecId);
  this.milCen = document.getElementById(milCenId);
  this.milDec = document.getElementById(milDecId);
}
var addTimeIntoTheList = function(secCen, secDec, minCen, minDec, milCen, milDec) {
  olTag = document.getElementById('olTimeList');
  liTag = document.createElement('li');
  liTag.setAttribute('class', 'li-time-list');
  text = document.createTextNode(minDec + minCen + ':' + secDec + secCen + ':' + milDec + milCen + "\"");
  liTag.appendChild(text);
  olTag.appendChild(liTag);
};
var eliminateTimeList = function() {
  this.secCen.innerHTML = "0";
  this.secDec.innerHTML = "0";
  this.minCen.innerHTML = "0";
  this.minDec.innerHTML = "0";
  this.milCen.innerHTML = "0";
  this.milDec.innerHTML = "0";
  document.getElementById('olTimeList').innerHTML = 'Split';
};
var doDisplayStarts = function(secCen, secDec, minCen, minDec, milCen, milDec) {
  milCen += 1;
  idIntervalDisplay = setInterval(function() {
    if (milCen === 10) {
      milCen = 0;
      milDec += 1;
      if (milDec === 10) {
        milDec = 0;
        secCen += 1;
        if (secCen === 10) {
          secCen = 0;
          secDec += 1;
          if (secDec === 6) {
            secDec = 0;
            minCen += 1;
            if (minCen === 10) {
              minCen = 0;
              minDec += 1;
            }
          }
        }
      }
    }
    this.secCen.innerHTML = secCen;
    this.secDec.innerHTML = secDec;
    this.minCen.innerHTML = minCen;
    this.minDec.innerHTML = minDec;
    this.milCen.innerHTML = milCen;
    this.milDec.innerHTML = milDec;
    milCen++;
  }, 10);
};

Chronometer.prototype.startClick = function() {
  if (this.leftBtn.innerHTML === "START") {
    this.leftBtn.innerHTML = "STOP";
    this.leftBtn.setAttribute('class', 'btn stop');
    this.rightBtn.setAttribute('class', 'btn split');
    this.rightBtn.innerHTML = 'SPLIT';
    doDisplayStarts(parseInt(this.secCen.innerHTML), parseInt(this.secDec.innerHTML), parseInt(this.minCen.innerHTML), parseInt(this.minDec.innerHTML), parseInt(this.milCen.innerHTML), parseInt(this.milDec.innerHTML));
  } else if (this.rightBtn.innerHTML === "SPLIT") {
    addTimeIntoTheList(this.secCen.innerHTML, this.secDec.innerHTML, this.minCen.innerHTML, this.minDec.innerHTML, this.milCen.innerHTML, this.milDec.innerHTML);
  }
  return "startClick";
};
Chronometer.prototype.stopClick = function() {
  if (this.leftBtn.innerHTML === "STOP") {
    clearInterval(idIntervalDisplay);
    this.leftBtn.setAttribute('class', 'btn start');
    this.leftBtn.innerHTML = 'START';
    this.rightBtn.setAttribute('class', 'btn reset');
    this.rightBtn.innerHTML = 'RESET';
  } else if (this.rightBtn.innerHTML === 'RESET') {
      eliminateTimeList();
  }
  return "stopClick";
};
