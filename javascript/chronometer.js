class Chronometer {

  constructor() {
    this.currentTime = 0
    this.intervalId = 0

  };

  startClick(callback) {
    console.log("startClick")
    this.intervalId = setInterval(() => { // arrow function is the callback
      this.currentTime++;
      if (callback) callback();
    }, 1000);

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60); //61 seconds, 122 seconds

  }
  getSeconds() {
    return (this.currentTime % 60);

  }
  twoDigitsNumber(num) {
    return num.toString().padStart(2, '0');
    // return this.currentTime.toString().padStart(2, '0');
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    console.log("min and sec " + min + sec);
    return `${min}:${sec}`;
    //    return `${this.twoDigitsNumber(this.getMinutes)}\:${this.twoDigitsNumber(this.getSeconds)}`;
  }
}