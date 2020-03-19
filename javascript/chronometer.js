class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milisecondsInterval = 0;
    this.miliseconds = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => this.currentTime++, 1000);
    this.milisecondsInterval = setInterval(() => this.miliseconds++, 1);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
      //Number.parseFloat(this.currentTime / 60).toFixed(2));
  }

  getSeconds() {
    return Math.floor(this.currentTime - this.getMinutes(this.currentTime) * 60);
  }

  getMiliseconds(){
    return Math.floor(this.miliseconds % 100);
  }

  twoDigitsNumber(num) {
    let decimal = Math.floor(num/10);
    let unit = Math.floor(num % 10);
    let convert = `${decimal}${unit}`;
    return convert;
  }

  stopClick() {
    return clearInterval(this.intervalId), clearInterval(this.milisecondsInterval);
  }

  resetClick() {
    return this.currentTime = 0, this.miliseconds = 0;
  }

  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    let mil = this.twoDigitsNumber(this.getMiliseconds());
    return `${min}:${sec}:${mil}`;
    
    // if (min < 10) {
      //   return `${0}${min}:${0}${sec}`;
      // } else {
      //   return `${min}:${sec}`;
      // }
  }
}
