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
      if (callback) {
      callback();
      }
    }, 10)
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor((this.currentTime / 100) / 60);
  }


  getSeconds() {
    // ... your code goes here
    return Math.floor((this.currentTime / 100) % 60);
    
  }

  getMiliSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 100);
    
  }

  twoDigitsNumber(num) {
    // ... your code goes here
    
    let n = num.toString();

    if (n.length % 2 !== 0) {
      return '0' + n;
    }
    else {
      return n;
    }
  }

  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
    
  }

  splitClick() {
    // ... your code goes here
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    let miliSec = this.twoDigitsNumber(this.getMiliSeconds());

    return `${min}:${sec}:${miliSec}`;

  }

}
