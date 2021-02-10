class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    const intervalId = setInterval(() => {
      this.currentTime ++;
    },1000);
    this.intervalId = intervalId;
   }
  
  getMinutes() {
     let minutes = this.currentTime / 60; 
     return Math.floor(minutes);
  }

  getSeconds() {
    let seconds = this.currentTime % 60 ;
    return seconds;
  }
  twoDigitsNumber(num) {
    if (num < 10) {
      return `0${num.toString()}`;
    } else {
      return num.toString();
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime =0;
  }
  splitClick() {
  
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  }
}