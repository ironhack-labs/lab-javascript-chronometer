function Chronometer() {

  let fixThis = this; 
  //at this point of the function: "this" refers to the object Chronometer

  this.currentTime = 0;
  this.minutes = 0;
  this.seconds = 0;
  this.milliseconds = 0;
  this.millisecondsToDisplay = 0;
  this.intervalId;
  this.timeFormat;

  // startClick function: keeps track of the time by updating currentTime
  this.startClick = function(){
    this.intervalId = setInterval(function(){
      //we use "fixThis" because using "this" here would refer to the scope of setInterval which is window
      fixThis.currentTime+=10; 
      fixThis.timeFormat = fixThis.setTime(fixThis.setMinutes(),fixThis.setSeconds(), fixThis.setMilliseconds());
      printTime(fixThis.timeFormat);
      return fixThis.timeFormat;
    },10)
  };

  // setTime function: converts parameters into an array ([minutes, seconds, milliseconds])
  this.setTime = function(minutes,seconds,milliseconds) {
    let time = [];
    let minutesString = this.twoDigitsNumber(minutes);
    let secondsString = this.twoDigitsNumber(seconds);
    let millisecondsString = this.twoDigitsNumber(milliseconds);
    time.push(minutesString, secondsString, millisecondsString);
    return time;
  };

  // twoDigitsNumber function: converts a number into a string with the right format ("00")
  this.twoDigitsNumber = function (number) {
    if (number >= 0 && number <= 9) {
      let firstDigit = "0";
      number = firstDigit + number.toString();
    } else {
      number = number.toString();
    }
    return number;
  };

  // setMinutes function: converts currentTime into minutes
  this.setMinutes = function(){
    if (this.currentTime % 60000 === 0) {
      this.minutes++;
    }
    return this.minutes;
  };

  // setSeconds function: converts currentTime into seconds
  this.setSeconds = function(){
    if (this.currentTime % 60000 === 0) {
      this.seconds = 0;
    } else if (this.currentTime % 1000 === 0) {
      this.seconds++;
    }
    return this.seconds;
  };

  // setMilliseconds function: converts currentTime into milliseconds
  this.setMilliseconds = function(){
    if (this.currentTime % 1000 === 0) {
      this.milliseconds = 0;
    } else {
      this.milliseconds+=10;
    }

    // from milliseconds to millisecondsToDisplay: 115 milliseconds => 12 to display
    this.millisecondsToDisplay = Math.floor(this.milliseconds/10);
    return this.millisecondsToDisplay;
  };

  // stopClick function: stops the setInterval function
  this.stopClick = function() {
    clearInterval(this.intervalId);
  };

  // resetClick function: resets the setInterval function (= the intervalId stays the same)
  this.resetClick = function(){
    this.currentTime = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.milliseconds = 0;
    this.millisecondsToDisplay = 0;
    printTime(["00","00", "00"]);
  };
}