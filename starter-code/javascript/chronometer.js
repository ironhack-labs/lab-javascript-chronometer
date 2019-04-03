class Chronometer {
  constructor() {
    this.currentTime = 0;
  }
   startClick(currentTime, intervalId) {
    this.intervalId = setInterval((currentTime) => {
      this.currentTime++;
    },1000)
   }
   getMinutes(currentTime) {
    this.currentTime = Math.floor(this.currentTime/60);
    return this.currentTime;
   }
  getSeconds() {
    this.currentTime >= 60 ? this.currentTime - 60 : this.currentTime
    return this.currentTime % 60
  }
  twoDigitsNumber(time) {
    return `${time}`.padStart(2 , '0')
  }
   stopClick() {
    clearInterval();
   } 
   resetClick() {
   }
   splitClick() {}
}
