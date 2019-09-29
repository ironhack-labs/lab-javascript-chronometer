class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.miliseconds = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime +=1;
      printTime();
    },1000);
  }
  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);
    return minutes; //this.currentTime / 60
  }
  getSeconds() {
    const seconds = this.currentTime - this.getMinutes() * 60;
    return seconds;
  }

  getMiliseconds(){
    return Math.floor((this.currentTime / 60000) * 1000000)
  }

  twoDigitsNumber(numOne) {
    return numOne > 9 ? "" + numOne: "0" + numOne;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return {
      min: this.twoDigitsNumber(this.getMinutes()),
      sec: this.twoDigitsNumber(this.getSeconds()),
      milSec: this.twoDigitsNumber(this.getMiliseconds())
    }
  }
}

