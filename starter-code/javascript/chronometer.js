class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      printTime();
    }, 1000);
  }
12
  getMinutes() {
        return parseInt(this.currentTime/60);
        
  }

  getSeconds() {
    // let seconds = 0;
    // if (this.currentTime % 60 == 0) {
    //      seconds = (this.currentTime-= 60);
    //     }
    return this.currentTime % 60;
  }

  twoDigitsNumber(number) {
    if(number<10){
      return `0${number}`;
      } else {
        return `${number}`;
      }

  }
  stopClick() {

    clearInterval(this.intervalId);
  }
  resetClick() {}
  splitClick() {}
}
