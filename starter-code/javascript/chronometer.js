// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId
}



Chronometer.prototype.startClick = function () {
  _this = this;
  this.intervalId = setInterval(function () {
    _this.currentTime++;
    _this.setTime();

  }, 1000);

};


Chronometer.prototype.setMinutes = function () {
  var myMinutes = this.currentTime / 60;
  return Math.floor(myMinutes);

};



Chronometer.prototype.setSeconds = function () {
  var mySeconds = this.currentTime % 60;

  return mySeconds;

};

Chronometer.prototype.twoDigitsNumber = function (timeToTwoDigit) {
  var timeToTwoDigitString = timeToTwoDigit.toString();
  if (timeToTwoDigitString.length < 2) {
    timeToTwoDigitString = 0 + timeToTwoDigitString;

  }

  return timeToTwoDigitString;
};

Chronometer.prototype.setTime = function () {

  seconds = this.twoDigitsNumber(this.setSeconds());
  minutes = this.twoDigitsNumber(this.setMinutes());
  // milliSeconds = this.twoDigitsNumber(this.setMilliseconds());
  console.log(minutes, seconds);
  // console.log(minutes, seconds, milliSeconds);
  document.getElementById("minUni").innerHTML = minutes.charAt(1);
  document.getElementById("minDec").innerHTML = minutes.charAt(0);
  document.getElementById("secDec").innerHTML = seconds.charAt(0);
  document.getElementById("secUni").innerHTML = seconds.charAt(1);
  // document.getElementById("milDec").innerHTML = milliSeconds.charAt(0);
  // document.getElementById("milUni").innerHTML = milliSeconds.charAt(1);

};

Chronometer.prototype.setMilliseconds = function () {
  var myMilliseconds = this.currentTime/1000;
  return (myMilliseconds);
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  seconds = this.twoDigitsNumber(this.setSeconds());
  minutes = this.twoDigitsNumber(this.setMinutes());
  document.getElementById("minUni").innerHTML = minutes.charAt(1);
  document.getElementById("minDec").innerHTML = minutes.charAt(0);
  document.getElementById("secDec").innerHTML = seconds.charAt(0);
  document.getElementById("secUni").innerHTML = seconds.charAt(1);

  document.getElementById("splits").innerHTML = "";


};

Chronometer.prototype.splitClick = function () {

  seconds = this.twoDigitsNumber(this.setSeconds());
  minutes = this.twoDigitsNumber(this.setMinutes());

  var liSplitsElement = document.createElement("li"); //create li in orderd list

  document.getElementById("splits").appendChild(liSplitsElement); //add created li element to ordered list with id = "splits"

  var liText = document.createTextNode(`${minutes}:${seconds}`); //create text element. Text content is equal to current time.
  liSplitsElement.appendChild(liText); //add text to li element





};