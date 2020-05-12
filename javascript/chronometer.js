class Chronometer {
  constructor() {
    // ... your code goes here
     

  }
    currentTime = 0; 
    intervalId = 0;

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++;
    }, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
    
  }
  getSeconds() {
    return this.currentTime % 60;
    
  }
  twoDigitsNumber(time) {
    return String(time).padStart(2, 0)
  }
  stopClick() {
     clearInterval();  
    }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick(num1, num2) {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}
