function Chronometer() {

  let fixThis = this; 
  //at this point of the function: "this" refers to the object Chronometer

  this.currentTime = 0;
  this.minutes = 0;
  this.seconds = 0;
  this.intervalId;
  this.timeFormat;

  // startClick function: keeps track of the time by updating currentTime
  this.startClick = function(){
    fixThis.intervalId = setInterval(function(){
      fixThis.currentTime++; 
      //we use "fixThis" because using "this" here would refer to the scope of setInterval which is window
      fixThis.timeFormat = fixThis.setTime(fixThis.setMinutes(),fixThis.setSeconds());
      printTime(fixThis.timeFormat);
      return fixThis.timeFormat;
    },1000)
  };

  // setMinutes function: converts currentTime into minutes
  this.setMinutes = function(){
    if (fixThis.currentTime % 60 === 0) {
      this.minutes++
    }
    return this.minutes;
  };

  // setSeconds function: converts currentTime into seconds
  this.setSeconds = function(){
    if (fixThis.currentTime % 60 === 0) {
      this.seconds = 0
    } else {
      this.seconds++
    }
    return this.seconds;
  };


  // twoDigitsNumber function: converts a number into a string with the right format
  this.twoDigitsNumber = function (number) {
    if (number >= 0 && number <= 9) {
      let firstDigit = "0";
      number = firstDigit + number.toString();
    } else {
      number = number.toString();
    }
    return number;
  };

  // setTime function: converts the currentTime into a string with the right format
  this.setTime = function(minutes,seconds) {
    let time = [];
    let minutesString = fixThis.twoDigitsNumber(minutes);
    let secondsString = fixThis.twoDigitsNumber(seconds);
    time.push(minutesString, secondsString);
    return time;
  };

  // stopClick function: stops the setInterval function
  this.stopClick = function() {
    clearInterval(fixThis.intervalId);
  };

  // resetClick function: resets the setInterval function (= the intervalId stays the same)
  this.resetClick = function(){
    fixThis.currentTime = 0;
    fixThis.seconds = 0;
    fixThis.minutes = 0;
    printTime(["00","00"]);

  };
}