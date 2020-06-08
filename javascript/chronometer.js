class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
    this.createInterval
  }
///////////////////////////////////////////////////
  startClick(callback) {
    this.createInterval = setInterval(() => {
      this.currentTime++;
    }, 1000)
  }
///////////////////////////////////////////////////
  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }
///////////////////////////////////////////////////
  getSeconds() {
    return this.currentTime % 60;
  }
///////////////////////////////////////////////////
  twoDigitsNumber(value) {
    return value > 9 ? "" + value : "0" + value ;
  }
///////////////////////////////////////////////////
  stopClick() {
    clearInterval(this.createInterval)
  }
  ///////////////////////////////////////////////////
  resetClick() {
    this.currentTime = 0;
  }
///////////////////////////////////////////////////
  splitClick() {
    const min = this.getMinutes();
    const sec = this.getSeconds();
      if (min < 10 && sec < 10){
        return `0${min}:0${sec}`;
      } else if (min < 10){  
        return `0${min}:${sec}`;
      } else if (sec < 10){  
        return `${min}:0${sec}`;
      } else {
        return `${min}:${sec}`;
      }
  }
}