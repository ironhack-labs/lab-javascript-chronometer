class Chronometer {
  constructor() {
  this.currentTime=0;
  this.intervalId=0;
  }
  startClick(callback) {
    this.intervalId = setInterval(callback => {this.currentTime += 1
    console.log(callback);
    },1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    let seconds = this.currentTime - this.getMinutes() * 60
    return seconds
  }
  twoDigitsNumber(num) {
    if(num < 10) return `0${num}`;
    return num;
  }

  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime=0;
  }
  splitClick() {
   let minutes=this.twoDigitsNumber(this.getMinutes())
   let seconds=this.twoDigitsNumber(this.getSeconds())
   return `${minutes}:${seconds}`
  }
}
