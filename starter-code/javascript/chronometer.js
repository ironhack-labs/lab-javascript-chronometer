class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    // this.miliSecondsValue = 0;
    // this.secondsValue = 0;
    // this.minutesValue = 0;
  }
  startClick() {
    this.intervalId = setInterval((callback) => {
      this.currentTime++;
      // this.miliSecondsValue = this.calculateTick(this.miliSecondsValue);
      // this.secondsValue = this.calculateTick(this.secondsValue);
      // this.minutesValue = this.calculateTick(this.minutesValue);
      // console.log(this.currentTime, this.miliSecondsValue);
      console.log(this.currentTime);
    }, 1000);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(dig) {
    if(typeof dig !== 'number'){
      return null;
    }
    if(dig < 10){
      return '0' + dig;
    } else {
      return '' + dig;
    }
  }
  stopClick() {
    console.log('Stopping Chronometer');
    clearInterval(this.intervalId);
  }

   resetClick() {
    this.currentTime = 0;
  }

  // splitClick() {}
}