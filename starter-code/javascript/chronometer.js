class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    
  }
  

  startClick() {
    this.intervalId = setInterval(() => {
        this.currentTime++;
      
  }, 1000)

  
}

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;

  }

  getSeconds() {
    let seconds = this.currentTime  - this.getMinutes(this.currentTime) * 60;
    return seconds;
  }

  twoDigitsNumber(number) {
    if(number < 10){
      let string = '0' + number.toString()
        return string;
      }
      else {
        return number.toString()
      }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    return this.currentTime;
  }
}

