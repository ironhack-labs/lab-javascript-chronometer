// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId;  // we will use it to stop chronometer. 
}



Chronometer.prototype.startClick = function () {
  _this = this;
  this.intervalId = setInterval(function () {  // set interval will add 1 to currentTime every 10 ms. After 100 times of setInterval execution we will have 
    //current time equal to 100 = 1s; 
    _this.currentTime++;
    _this.setTime();
  }, 10);
};

//how we count minutes. We divide current time with 100 to get seconds and then with 60 to get minutes. we need to round the result. 
Chronometer.prototype.setMinutes = function () {
  var myMinutes = (this.currentTime / 100) / 60;
  return Math.floor(myMinutes);
};


// currentTime/100 = number of seconds = > numberOfSeconds/60 => number of minutes => rest after division with 60 are seconds.
Chronometer.prototype.setSeconds = function () {
  var mySeconds = (this.currentTime / 100) % 60;
  return Math.floor(mySeconds);
};


// currentTime/100 is equal to seconds. Rest after division with 100 is = to milliseconds.
Chronometer.prototype.setMilliseconds = function () {
  return ((this.currentTime) % 100);
};

//this returns two digit representation of minutes and seconds.
Chronometer.prototype.twoDigitsNumber = function (timeToTwoDigit) {
  var timeToTwoDigitString = timeToTwoDigit.toString();
  if (timeToTwoDigitString.length < 2) {
    timeToTwoDigitString = 0 + timeToTwoDigitString;
  }
  return timeToTwoDigitString;
};


//it will check time after every 10 ms and print it.
Chronometer.prototype.setTime = function () {
  seconds = this.twoDigitsNumber(this.setSeconds());
  minutes = this.twoDigitsNumber(this.setMinutes());
  milliSeconds = this.setMilliseconds();
  console.log(minutes, seconds, milliSeconds); //this line is for my checkup.

  // change HTML on proper place with proper value. minutes and seconds are strings, because of that I use charAt function.
  document.getElementById("minUni").innerHTML = minutes.charAt(1); 
  document.getElementById("minDec").innerHTML = minutes.charAt(0);
  document.getElementById("secDec").innerHTML = seconds.charAt(0);
  document.getElementById("secUni").innerHTML = seconds.charAt(1);
  document.getElementById("milDec").innerHTML = milliSeconds; //milliSeconds are number.

};

//----------------------
// it will stop current setInterval iteration. We use clearInterval function which uses setInterval Id as parameter. setInterval function returns its Id.
//because f that we used intervalId property in constructor.

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};


// it will set current time on 0 and print 00:00:00 on screen;
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


//this function just prints current time on left side screen and doesn't stop time flow.

Chronometer.prototype.splitClick = function () {
  seconds = this.twoDigitsNumber(this.setSeconds());
  minutes = this.twoDigitsNumber(this.setMinutes());
  milliSeconds = this.setMilliseconds();
  var liSplitsElement = document.createElement("li"); //create li in orderd list
  document.getElementById("splits").appendChild(liSplitsElement); //add created li element to ordered list with id = "splits"
  var liText = document.createTextNode(`${minutes}:${seconds}:${milliSeconds}`); //create text element. Text content is equal to current time.
  liSplitsElement.appendChild(liText); //add text to li element

};