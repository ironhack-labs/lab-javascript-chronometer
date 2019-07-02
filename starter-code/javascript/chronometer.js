class Chronometer {

  constructor(chronometerDisplayObj) {
    this.currentTimeSecs = 0;
    this.currentTimeMilliSecs = 0;
    this.intervalId = 0;

    this.currentMins = 0;
    this.currentSecs = 0;
    this.currentMilliSecs = 0;
    this.chronometerDisplay = chronometerDisplayObj;
  }

  startClick() {
    this.intervalId = setInterval(() => { 
      this.currentTimeSecs += 0.16 ;     // Speed up by 16x for debugging (should be 0.01)
      this.currentTimeMilliSecs += 160 ;    // Speed up by 16x for debugging (should be 10)
      this.setTime();
      this.chronometerDisplay.printTime(this.currentMins, this.currentSecs, this.currentMilliSecs);
    }, 10);  // Count every 10ms
  };

  stopClick() {
    clearInterval(this.intervalId);
  };

  resetClick() {
    this.currentTimeSecs = 0;
    this.currentTimeMilliSecs = 0;
    this.setTime();
    this.chronometerDisplay.printTime(this.currentMins, this.currentSecs, this.currentMilliSecs);
    this.chronometerDisplay.clearSplits();
  };

  splitClick() {
    this.chronometerDisplay.printSplit(this.currentMins, this.currentSecs, this.currentMilliSecs);
  };

  getCurrentTimeMins() {
    return Math.floor(this.currentTimeSecs / 60);
  };

  getCurrentTimeSecs() {
    return Math.floor(this.currentTimeSecs) % 60;
  };

  getCurrentTimeMilliSecs() {
    return Math.floor(this.currentTimeMilliSecs / 10);  // Display shows just first 2 digits of the 3 digit number
  };

  twoDigitsNumber(number) {
    if(number.toString().length === 1) {
      return "0" + number.toString();
    } else if (number.toString().length > 2) {
      return number.toString().slice(-2);
    } else {
      return number.toString();
    }
    };

  setTime() {
    this.currentMins = this.twoDigitsNumber(this.getCurrentTimeMins());
    this.currentSecs = this.twoDigitsNumber(this.getCurrentTimeSecs());
    this.currentMilliSecs = this.twoDigitsNumber(this.getCurrentTimeMilliSecs());  // Need to fix this
  };


};