function Chronometer() {
  this.currentTime = 0;
  this.intervalId = "";
  this.minutes = 0;
  this.seconds = 0;
  this.miliseconds = 0;
}

Chronometer.prototype.startClick = function () {
  
  this.intervalId = setInterval((function(){
    this.currentTime++;
    this.setTime();
    printTime();

  }).bind(this), 1000);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  var stringValue = value.toString();
  
  return (stringValue.length === 1) ? "0" + stringValue : stringValue;
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());

  this.minutes = minutes;
  this.seconds = seconds;
};

Chronometer.prototype.setMilliseconds = function () {
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.minutes = 0;
  this.seconds = 0;
  this.currentTime = 0;
};

Chronometer.prototype.splitClick = function () {
  var ol = document.getElementById("splits");
  var li = document.createElement("li");  
  li.appendChild(document.createTextNode(`${minDec.textContent}${minUni.textContent}:${secDec.textContent}${secUni.textContent}`));
  ol.appendChild(li);
};
