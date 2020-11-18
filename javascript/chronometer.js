class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    // ... your code goes here
  }
  startClick(callback) {
    this.intervalId= setInterval(() => {
  console.log('interval is set to 1 sec')
  this.currentTime++
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime - Math.floor(this.currentTime / 60)*60;
  }
  twoDigitsNumber() {
    if(this.getMinutes() === 0) {
      return `00`
    }
    else if (this.getMinutes() < 10) {
      return `0` + `${this.getMinutes()}` 
    }
    else { return `${this.getMinutes()}`}
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
   return this.currentTime =0;
  }
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();

    if (min < 10 && sec < 10) {
      return (`${0}${min}:${0}${sec}`);
    } else if (min < 10 && sec > 10) {
      return (`0${min}:${sec}`);
    } else if (min > 10 && sec < 10) {
      return (`${min}:0${sec}`);
    } else {
      return (`${min}:${sec}`);
    }
}}
