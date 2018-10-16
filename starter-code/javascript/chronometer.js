// Constructor
  class Chronometer {
    constructor() {
      this.currentTime = 0;
      this.intervalId = 0;
      
    }

    startClick() {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        this.setTime();
      }, 1000);
    }

    setMinutes() {
      return Math.floor(this.currentTime/60);
    }

    setSeconds() {
      return this.currentTime%60;
    }

    twoDigitsNumber(num) {
      var numString = num.toString();
      if (numString.length == 1) return ("0" + numString);
      else return numString;
    }

    setTime() {
      this.minutes = this.twoDigitsNumber(this.setMinutes(this.currentTime));
      this.seconds = this.twoDigitsNumber(this.setSeconds(this.currentTime));
    }

    stopClick() {
      clearInterval(this.intervalId);
    }

    resetClick() {
      this.currentTime = 0;
    }


  }



