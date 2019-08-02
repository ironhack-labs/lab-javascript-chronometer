class Chronometer {
  constructor(show) {
    this.currentTime = 0;
    this.intervalId = null;
    this.showTime = show
  }
  
  startClick() {
    this.intervalId = setInterval(()=>{
      //debugger;
      this.currentTime++
      this.showTime(...this.setTime())
    },1000);
  }
  
  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }
  
  getSeconds() {
    const seconds = this.currentTime - this.getMinutes() * 60;
    return seconds;
  }
  
  twoDigitsNumber(aNum) {
    const twoDigits = aNum.toString().length > 1 ? aNum : "0"+aNum;
    return twoDigits;
  }

  setTime() {
    const minutes = this.twoDigitsNumber(this.getMinutes());
    const seconds = this.twoDigitsNumber(this.getSeconds());
    return [minutes,seconds];
  }

  stopClick() {
    clearInterval(this.intervalId);
  }
  
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}


