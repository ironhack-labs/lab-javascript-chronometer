'use strict';

function Chronometer() {
  this.started = false;
  this.seconds = 0;
  this.miliSecInterval = null;
}


Chronometer.prototype.start = function() {
  var that = this;
  this.started = true;
  this.miliSecInterval = setInterval(function() {
    var seconds = that.seconds++;
    //first minut digit
    var minutsDigits = seconds / 60;
    var minDec = document.getElementById('minDec');
    var min1 = Math.floor(minutsDigits / 10);
    minDec.innerText = min1;
    //second minut digut
    var minCen = document.getElementById('minCen');
    var min2 = Math.floor(minutsDigits % 10);
    minCen.innerText = min2;
    //first second digit
    var secondsDigits = seconds % 60;
    var secDec = document.getElementById('secDec');
    var sec1 = Math.floor(secondsDigits / 10);
    secDec.innerText = sec1;
    //second second digit
    var secCen = document.getElementById('secCen');
    var sec2 = Math.floor(secondsDigits % 10);
    secCen.innerText = sec2;



    console.log(seconds);
  }, 1000);
  //
  var ul = document.createElement('ul');
  var h4 = document.getElementById('h4');
  h4.appendChild(ul);
  ul.setAttribute('id', 'list');
};


Chronometer.prototype.stop = function() {

  this.started = false;
  clearInterval(this.miliSecInterval);
};

Chronometer.prototype.split = function() {
  var li = document.createElement('li');
  var list = document.getElementById('list');
  var numbers = document.getElementById('numbers').innerText;
  li.innerText = numbers;
  list.appendChild(li);
};

Chronometer.prototype.reset = function() {

  this.started = false;
  this.seconds = 0;
  this.miliSecInterval = null;

  this.resetDisplay();
  this.resetSplit();
};

Chronometer.prototype.resetDisplay = function() {
  var minDec = document.getElementById('minDec');
  var minCen = document.getElementById('minCen');
  var secDec = document.getElementById('secDec');
  var secCen = document.getElementById('secCen');

  minDec.innerText = 0;
  minCen.innerText = 0;
  secDec.innerText = 0;
  secCen.innerText = 0;
};

Chronometer.prototype.resetSplit = function() {
  var list = document.getElementById('list');
  var li = document.getElementsByTagName('li');
  list.parentNode.removeChild(list);
};
