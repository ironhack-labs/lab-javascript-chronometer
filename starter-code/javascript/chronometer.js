class Chronometer {
  constructor() {
    this.currentTime = 0;
  }

  startClick(intervalId) {
    this.intervalId = setInterval( () => {
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    let currentTimeInMinutes = this.currentTime/60
    let currentTimeInMinutesRounded = Math.floor(currentTimeInMinutes)
    return currentTimeInMinutesRounded;
  
  }
  getSeconds() {
    if (this.currentTime > 0) {
      let currentTimeRemaining = (this.currentTimeInMinutes - this.currentTimeInMinutesRounded);
      let currentTimeRemainingInSeconds = currentTimeRemaining * 60;
      return currentTimeRemainingInSeconds;
    } else {
      return 0;
    }
    
  }

  twoDigitsNumber(number) {
    if (this.currentTimeInMinutesRounded.length === 1 || this.currentTimeRemainingInSeconds.length === 1) {

    }
    if (typeof this.currentTimeInMinutesRounded === 'number' || typeof this.currentTimeRemainingInSeconds === 'number') {
      let currentTimeInMinutesRoundedString = currentTimeInMinutesRounded.toString();
      let currentTimeRemainingInSecondsString = currentTimeRemainingInSeconds.toString();

      return currentTimeInMinutesRoundedString, currentTimeRemainingInSecondsString;

    } else {
      return 0;
    }
  }



  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
}


