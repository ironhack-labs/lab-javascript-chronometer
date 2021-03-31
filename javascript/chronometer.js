class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(function () {
      this.currentTime++;
    }.bind(this), 1000)
  }
  
  getMinutes() {
    if (this.currentTime < 60) return 0;
    return (Math.floor(this.currentTime/60));
  }
  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(timeValue) {
    let stringTimeValue = timeValue.toString();
    if (stringTimeValue.length == 2) return stringTimeValue;
    else return ('0' + stringTimeValue);
  }
  stopClick() {
    clearInterval(this.intervalId);
    this.intervalId = 0;    
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick(currentTime) {
    let minutes = this.getMinutes(currentTime);
    let seconds = this.getSeconds(currentTime);
    let twoDigitMins = this.twoDigitsNumber(minutes);
    let twoDigitSecs = this.twoDigitsNumber(seconds);

    return `${twoDigitMins}:${twoDigitSecs}`;
  }
}
