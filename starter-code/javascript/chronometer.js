class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = "";
    this.currentTimeMil = 0;
    this.intervalIdMil = "";
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000);
    this.intervalIdMil = setInterval(() => {
      this.currentTimeMil++
    }, 10);
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }
  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }
  getMilSeconds(){
    if (this.currentTimeMil < 100){
      return this.currentTimeMil;
    } else if (this.currentTimeMil >= 100){
      let milSeconds = this.currentTimeMil % 100;
      return milSeconds;
    }    
  }
  twoDigitsNumber(value) {
      if (value < 10){
        let twoDigits = "0" + value;
        return twoDigits.toString();
      }
      else {
      return value.toString()
      }
    }     
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalIdMil);
  }
  resetClick() {
    this.currentTime = 0;
    this.currentTimeMil = 0;
  }
  splitClick() {
    let timeMinutes=  chronometer.twoDigitsNumber(chronometer.getMinutes());
    let timeSeconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
    let timeMilSeconds = chronometer.twoDigitsNumber(chronometer.getMilSeconds());
    return `${timeMinutes}:${timeSeconds}:${timeMilSeconds}`
  }
}