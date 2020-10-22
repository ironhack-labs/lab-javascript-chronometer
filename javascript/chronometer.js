class Chronometer {
  constructor() {
    // ... your code goes here

    this.currentTime = 0;
    this.intervalId = 0;
  }
  
  startClick(callback) {
    this.intervalId = setInterval( () => {
      this.currentTime++;
      if (callback) callback();
    }, 1000);
  }

  getMinutes() {
    let currentTimemin = this.currentTime/60;
    return Math.floor(currentTimemin);
  }

  getSeconds() {
    // ... your code goes here
    
      let currentTimesec = this.currentTime%60;
      return Math.floor(currentTimesec);
    
  }
  twoDigitsNumber(currentTime) {
    // ... your code goes here
    if (currentTime < 10)
   { return "0" + currentTime;}
   else {
     return `${currentTime}`;
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
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    return `${min}:${sec}`;
  }
}
