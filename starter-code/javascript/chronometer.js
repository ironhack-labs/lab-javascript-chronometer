class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentMins = 0;
    this.currentSecs = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => { 
      this.currentTime++;
      this.setTime();
      console.log(this.currentTime, this.currentSecs, this.currentMins);
    }, 1000);
  };

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
    this.setTime();
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

  
// Testing

myChrono = new Chronometer();
myChrono.startClick();

// myChrono.stopClick()
// myChrono.resetClick()
