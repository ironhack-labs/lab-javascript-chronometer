class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    // add one to current time property every second
    // assign the return to our objects intervalId
    // clear the interval later clearInterval(this.intervalId)
    // fat arrow does not have it's own this to give // in the function it gets the window assigned to it
    this.intervalId = setInterval(() => (this.currentTime += 1), 1000);
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    const seconds = this.currentTime - this.getMinutes(this.currentTime) * 60;
    return seconds;
  }

  twoDigitsNumber(number) {
    let stringNumber = String(number);
    if (stringNumber.length == 1) {
      return `0${stringNumber}`;
    } else {
      return stringNumber;
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}

// function Chronometer() {
//   this.currentTime = d
// }
