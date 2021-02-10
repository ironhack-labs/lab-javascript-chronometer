class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId  = 0;
  } 
   
  startClick(callback) {
    const intervalId = setInterval (() => {
      this.currentTime++;
    }, 1000);
  } 
  
  getMinutes() {
      return Math.trunc(this.currentTime / 60);
  }
  
  getSeconds() {
      return this.currentTime % 60
  }

  twoDigitsNumber(num) {
      if (this.currentTime > 9) {
      return num;
    } else {
      return "0" + num;
    }
  }

  stopClick() {
    let this.currentTime = 0;
    const intervalId = setInterval(() => {
      
    }
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}

