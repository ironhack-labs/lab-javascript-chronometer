class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      //console.log(this.currentTime)
      if (callback) {
        callback();
      }
    }, 1000);
  }
  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime/60);

    if (this.currentTime >= 60) {
      return minutes
    } else {
      return 0;
    }
  }
  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60;
      return seconds 
  }

  twoDigitsNumber(number) {
    // ... your code goes here
    if (number === 0) {
      return "00";
      } else if (number < 10) {
      return "0" + number.toString();
      } else {
        return number.toString();
      }
  }
  
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
    }
  
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}
