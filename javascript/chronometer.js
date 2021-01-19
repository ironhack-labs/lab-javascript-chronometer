class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId= setInterval(() => {
      this.currentTime ++
    },1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    const minutes = this.getMinutes()
    const seconds = this.currentTime - minutes * 60;
    return seconds
  }
  twoDigitsNumber(number) {
    const newTime = number.toString().padStart(2, "0");
    return newTime
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
    this.intervalId = 0
  }
  splitClick() {
    
    let min = this.getMinutes();
    let sec = this.getSeconds();

    if (min < 10 && sec < 10) {
      return (`${0}${min}:${0}${sec}`);
    } else if (min < 10 && sec > 10) {
      return (`0${min}:${sec}`);
    } else if (min > 10 && sec < 10) {
      return (`${min}:0${sec}`);
    } else {
      return (`${min}:${sec}`);
    }
  }
   
  
}
