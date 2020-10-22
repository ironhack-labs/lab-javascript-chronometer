class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentMil = 0;
    this.intervalMilId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval( () => {
      this.currentTime++;
      if (callback) callback();
   }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes; 
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60);
    return seconds;
  }

  getMiliSeconds(){
    if (this.currentMil === 100) {
      this.currentMil = 0;
    }
    return this.currentMil;
  }
  
  twoDigitsNumber() {
   return number < 10 ? '0' + number : number;
  }

  // twoDigitsNumber(value) {
//if (value < 10) return `0${value}`;
//return `${value}`;
// OR return ("0" + value).slice(-2);
  //}

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  }
}
//let minutes = this.twoDigitsNumber(this.getMinutes());
//let seconds = this.twoDigitsNumber(this.getSeconds());
//return `${minutes}:${seconds}`;


