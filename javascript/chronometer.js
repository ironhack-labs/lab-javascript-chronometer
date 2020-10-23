class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(){
    this.intervalId= setInterval(() => { 
      this.currentTime ++;
    },1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  // twoDigitsNumber() {
  //   return this.currentTime.toString().padStart(2, '0');
  // }

  twoDigitsNumber(value) {
    if (value < 10) return `0${value}`;
    return `${value}`;
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime=0
  }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds());
    //other method
    //return `${this.twoDigitsNumber(this.getMinutes())} :${this.twoDigitsNumber(this.getSeconds())}`;
  }
}



 