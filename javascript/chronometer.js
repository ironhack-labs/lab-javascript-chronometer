class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(function () {
      this.currentTime++;
    }.bind(this), 10);
  }
  
  getMinutes() {
    if (this.currentTime < 6000) return 0;
    console.log(Math.floor(this.currentTime/6000));

    return (Math.floor(this.currentTime/6000));
    
  }
  getSeconds() {
    if (this.currentTime < 100) return 0;
    console.log(Math.floor(this.currentTime/100));

    return (Math.floor(this.currentTime/100));
  }

  getMilliseconds() {
    console.log(this.currentTime % 100)
    return this.currentTime % 100;    
  }

  twoDigitsNumber(timeValue) {
    let stringTimeValue = timeValue.toString();
    if (stringTimeValue.length == 2) return stringTimeValue;
    else return ('0' + stringTimeValue);
  }
  // threeDigitsNumber(timeValue) {
  //   let stringTimeValue = timeValue.toString();
  //   if (stringTimeValue.length == 3) return stringTimeValue;
  //   else if (stringTimeValue.length === 2) return '00' + stringTimeValue;
  //   else return '00' + stringTimeValue;
  // }
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
    let twoDigitMillisecs = this.twoDigitsNumber(milliseconds);

    return `${twoDigitMins}:${twoDigitSecs}:${twoDigitMillisecs}`;
  }
}
