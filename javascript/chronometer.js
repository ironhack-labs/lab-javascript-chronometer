class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    
    // ... your code goes here
  }
  startClick(callback) {
    setInterval(() => {
      this.currentTime += 1;

    }, 1000);
    // ... your code goes here
  }
  
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  
    // ... your code goes here
  }
  getSeconds() {
    return this.currentTime % 60;
    // ... your code goes here
  }
  twoDigitsNumber() {
    if(this.currentTime.length === 1){
      return `0${this.currentTime.toString()}`;
    }else {
      return this.currentTime.toString();
    }
    // ... your code goes here
  }
  stopClick() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }
  resetClick() {
    this.currentTime = 0;
    // ... your code goes here
  }
  splitClick() {
    let minutes = getMinutes();
    let seconds = getSeconds();
    return `${minutes}:${seconds}`;
    // ... your code goes here
  }
}
