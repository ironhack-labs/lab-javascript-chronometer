class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
    this.intervalTwoId;
    this.miliseconds = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      if (this.miliseconds % 100 === 0) this.currentTime++;
      this.miliseconds++;
    }, 1);
    // this.intervalTwoId = setInterval(() => {
    //   this.miliseconds++;
    //   console.log(this.miliseconds);
    // }, 100);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(number) {
    let formatedNumber = number.toString();
    if (formatedNumber.length < 2) {
      return `0${formatedNumber}`;
    }
    return formatedNumber;
  }

  // getMiliseconds() {
  //   let formatedNumber = this.miliseconds;
  //   if (formatedNumber.length < 2) {
  //     return `0${formatedNumber}`;
  //   } else if (formatedNumber.length < 3) {
  //     return `0${formatedNumber}`;
  //   }
  // }
  stopClick() {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}
