class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(() => {
      //let currentTime = this.currentTime;
      this.currentTime+=1
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    return Math.floor(this.currentTime%60);
  }
  twoDigitsNumber() {
    if(this.currentTime<10){
      return '0' + this.currentTime;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
      let min = this.getMinutes()
      let sec = this.getSeconds()

      if(min<10 || sec<10){
        return `${0}${min}:${0}${sec}`;
      } else {
        return `${min}:${sec}`;
      }
  }

}
