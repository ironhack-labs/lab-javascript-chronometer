function Chronometer() {
  this.current = 1;
  this.intervalId = 0;
}


var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById('minDec');
var minCen = document.getElementById('minCen');
var secDec = document.getElementById('secDec');
var secCen = document.getElementById('secCen');
var milDec = document.getElementById('milDec');
var milCen = document.getElementById('milCen');
var splitList = document.getElementById('splitList');

Chronometer.prototype.startClick = function(){
    btnLeft.className = 'btn stop';
    btnLeft.innerHTML = 'STOP';
    btnRight.className = 'btn split';
    btnRight.innerHTML = 'SPLIT';
    var that = this;
    var i = this.current;
    this.intervalId = setInterval(function() {
      milCen.innerHTML = i % 10;
      milDec.innerHTML = Math.floor((i % 100)/10);
      secCen.innerHTML = Math.floor((i/100)%10);
      secDec.innerHTML = Math.floor(((i/100) % 60) / 10);
      minCen.innerHTML = Math.floor((i/100) / 60) % 10;
      minDec.innerHTML = Math.floor(Math.floor((i/100) / 60) / 10) % 10;
      i++;
      that.current = i;
    },10);
};

Chronometer.prototype.stopClick = function () {
    btnLeft.className = 'btn start';
    btnLeft.innerHTML = 'START';
    btnRight.className = 'btn reset';
    btnRight.innerHTML = 'RESET';
    clearInterval(this.intervalId);
};

Chronometer.prototype.splitClick = function () {
    var text = document.createTextNode(this.GetSplitTime());
    var element = document.createElement('li');
    element.className = 'split-time';
    element.appendChild(text);
    splitList.appendChild(element);
};

Chronometer.prototype.resetClick = function () {
    secCen.innerHTML = 0;
    secDec.innerHTML = 0;
    minCen.innerHTML = 0;
    minDec.innerHTML = 0;
    milDec.innerHTML = 0;
    milCen.innerHTML = 0;
    this.current = 1;
    var splitItems = document.getElementsByClassName('split-time');
    var splitListLength = splitItems.length;
    for (var i = splitListLength - 1; i >= 0; i--) {
      splitList.removeChild(splitItems[i]);
    }

};

Chronometer.prototype.GetSplitTime = function () {
  var time = '';
  time += Math.floor(Math.floor((this.current/100) / 60) / 10) % 10;
  time += Math.floor((this.current/100) / 60) % 10;
  time += ':';
  time += Math.floor(((this.current/100) % 60) / 10);
  time +=  Math.floor((this.current/100) % 10);
  time += ':';
  time += Math.floor((this.current % 100)/10);
  time += this.current % 10;
  return time;
};
