class Chronometer {
  constructor() {
     
  }
    currentTime = 0; 
    currentTimeMilli = 0;
    intervalId = 0;
    intervalIdMilli = 0;
    

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++;
      callback()
    }, 1000)
  }

  startClickMilli(callback) {
     this.intervalIdMilli = setInterval(() => {
      this.currentTimeMilli ++;
      callback();
      console.log(this.currentTimeMilli)
    }, 10)
  }
  
  getMinutes() {
    return Math.floor(this.currentTime / 60);
    
  }
  getSeconds() {
    return this.currentTime % 60;
    
  }
  getMilliSeconds() {
    return this.currentTimeMilli;
  }
  twoDigitsNumber(time) {
    return String(time).padStart(2, 0);
  }
  twoDigitMilli(num){
    
    return String(num).slice(-2);
  }

  stopClick() {
     clearInterval(this.intervalId); 
     clearInterval(this.intervalIdMilli);
     
    }
  resetClick() {
    this.currentTime = 0;
    this.currentTimeMilli = 0;
    
  }
  splitClick(num1, num2) {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitMilli(this.getMilliSeconds())}`
  }
}

