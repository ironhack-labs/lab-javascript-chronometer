class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    // ... your code goes here
    this.setClock = setInterval(() => {
      this.currentTime++;
      callback();
      return true;
    }, 20);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 6000);
    }

  getSeconds() {
    // ... your code goes here
    return Math.floor((this.currentTime / 100) %60);
    }

  /*getMilliseconds() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      return Math.floor(this.currentTime % 100);
    }
  }
*/
  
  twoDigitsNumber(number){
    // ... your code goes here
    if (number >= 0) {
      if (number.toString().length === 1) {
        return "0" + number;
      } else {
        return number.toString();
      }
    }
  }

  stopClick() {
    // ... your code goes here
    clearInterval(this.setClock);
    this.intervalId = 0;
  }

  resetClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
    this.currentTime = 0;
  }

  splitClick(minutes, seconds) {
    // ... your code goes here
    minutes = this.twoDigitsNumber(minutes);
    seconds = this.twoDigitsNumber(seconds);
     return `${minutes}:${seconds}`;
  }
}