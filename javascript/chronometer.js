class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(function () {
      this.currentTime++;
    }.bind(this), 1)
  }
  
  getMinutes() {
    if (this.currentTime < 60000) return 0;
    console.log(Math.floor(this.currentTime/60000));

    return (Math.floor(this.currentTime/60000));
    
  }
  getSeconds() {
    if (this.currentTime < 1000) return 0;
    console.log(Math.floor(this.currentTime/1000));
    return (Math.floor(this.currentTime/1000));
  }

  getMilliseconds() {
    console.log(this.currentTime % 1000)
    return this.currentTime % 1000;    
  }

  twoDigitsNumber(timeValue) {
    let stringTimeValue = timeValue.toString();
    if (stringTimeValue.length == 2) return stringTimeValue;
    else return ('0' + stringTimeValue);
  }
  threeDigitsNumber(timeValue) {
    let stringTimeValue = timeValue.toString();
    if (stringTimeValue.length == 3) return stringTimeValue;
    else if (stringTimeValue.length === 2) return '00' + stringTimeValue;
    else return '00' + stringTimeValue;
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
    let milliseconds = this.getMilliseconds(currentTime);
    let twoDigitMins = this.twoDigitsNumber(minutes);
    let twoDigitSecs = this.twoDigitsNumber(seconds);
    let threeDigitMillisecs = this.threeDigitsNumber(milliseconds)

    return `${twoDigitMins}:${twoDigitSecs}:${threeDigitMillisecs}`;
  }
}
