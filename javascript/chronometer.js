class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    console.log('startclick')
    this.intervalId = setInterval( () => this.currentTime++, 1000)
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes
  }
  getSeconds() {
    let minutes = Math.floor(this.currentTime / 60);
    let seconds = this.currentTime - minutes * 60;
    return seconds
  }
  twoDigitsNumber() {
  let myNumber = this.currentTime;
  if (myNumber < 10) {
    return `0${myNumber}`;}
    else{
      return `${myNumber}`;}
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0;
    }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes())+ ':'+ this.twoDigitsNumber(this.getSeconds)
  }
}
