class Chronometer {

  constructor(chronometerDisplayObj) {
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentMins = 0;
    this.currentSecs = 0;
    this.chronometerDisplay = chronometerDisplayObj;
  }

  startClick() {
    this.intervalId = setInterval(() => { 
      this.currentTime++;
      this.setTime();
      this.chronometerDisplay.printTime(this.currentMins, this.currentSecs);
      console.log(this.currentTime, this.currentSecs, this.currentMins);
    }, 100);
  };

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
    this.setTime();
    this.chronometerDisplay.printTime(this.currentMins, this.currentSecs);
  }

  getCurrentTimeSecs() {
    return this.currentTime % 60;
  }

  getCurrentTimeMins() {
    return Math.floor( this.currentTime / 60);
  };

  twoDigitsNumber(number) {
    return ("0" + number.toString()).slice(-2);
  }

  setTime() {
    this.currentMins = this.twoDigitsNumber(this.getCurrentTimeMins());
    this.currentSecs = this.twoDigitsNumber(this.getCurrentTimeSecs());
  }

};

  
// // Testing

// myChrono = new Chronometer();
// myChrono.startClick();

// // myChrono.stopClick()
// // myChrono.resetClick()
