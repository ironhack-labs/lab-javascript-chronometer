class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentTimeMil = 0;
    this.intervalMil = 0;
  }
  startClick() {
    this.intervalId  = setInterval(()=>this.currentTime ++, 1000);
    this.intervalMil = setInterval(()=>this.currentTimeMil ++, 1)
  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    let minutes = Math.floor(this.currentTime/60)*60
    return this.currentTime - minutes
  }

  getMilliseconds(){
    return this.currentTimeMil.toString().slice(-2)
  }

  twoDigitsNumber(num) {
    return num.toString().length === 2 ? num.toString() : '0' + num.toString()
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalMil);
  }
  resetClick() {
    this.currentTime = 0;
    this.currentTimeMil = 0;
  }
  splitClick() {
    let min = this.twoDigitsNumber(chronometer.getMinutes());
    let sec = this.twoDigitsNumber(chronometer.getSeconds());
    let mil = this.getMilliseconds();
    return `${min}:${sec}:${mil}`
  }
}
