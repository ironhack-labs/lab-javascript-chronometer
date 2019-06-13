class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.milliseconds = 0;
  }
/*   startClick() {
    console.log('started!' + this.currentTime);
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      printMilliseconds();

      if (this.currentTime % 100 === 0) printTime();
    }, 10);
  } */

  startClick() {
    this.milliId = setInterval(() => {
      this.milliseconds += 1;
      printMilliseconds();
    }, 10);

    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      printTime();
    }, 1000);
  }

  getMinutes() {
    //return Math.floor(this.currentTime/6000);
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    //return Math.floor(this.currentTime/100);
    return this.currentTime % 60;
  }
  getMilliseconds() {
    //return this.currentTime % 100;
    return this.milliseconds % 100;
  }

  twoDigitsNumber(val) {
    return val > 9 ? val.toString() : '0' + val; 
  }
  stopClick() {
    console.log('stopped!' + this.currentTime);
    clearInterval(this.intervalId);
    clearInterval(this.milliId);
  }
  resetClick() {
    this.currentTime = 0;
    this.milliseconds = 0;
  }
  splitClick() {
    printSplit();
  }
}