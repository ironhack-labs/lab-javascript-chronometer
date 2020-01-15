class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      printTime();
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime/100/60);
  }
  
  getSeconds() {
    return (Math.floor(this.currentTime/100))%60;
  }

  getMilliSeconds() {
    return this.currentTime%100;
  }

  twoDigitsNumber(value) {
    return value.toString().length===1 ? "0"+ value.toString() : value.toString()
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime=0;
  }


  // splitClick() {}
}