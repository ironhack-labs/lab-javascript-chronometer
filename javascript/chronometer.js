



class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    let total = 1;
    let intervalId = setInterval(() => {
      console.log(total);
      this.currentTime += 1;
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  
  getSeconds() {
    return (this.currentTime%60);
  }
  
  twoDigitsNumber() {
      String(this.currentTime) {
      if (this.currentTime.length === 1)
        currentTime = '0' + currentTime
      return currentTime
    }
  }
  
  stopClick() {
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
