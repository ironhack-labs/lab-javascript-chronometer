class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      printTime();
    },1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60);
    return seconds;
  }

  getMilliSeconds() {
        
  }

  twoDigitsNumber(num) {
    if(num < 10){
      return `0${num}`;
    } else {
      return num.toString();
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    secUni.innerHTML = this.currentTime = 0;
    secDec.innerHTML = this.currentTime = 0;
    minUni.innerHTML = this.currentTime = 0;
    minDec.innerHTML = this.currentTime = 0;
  }
  
  splitClick() {

  }
}
