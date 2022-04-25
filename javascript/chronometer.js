class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (callback) {
        return callback;
      }
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;

    // let singleNumber = '';
    // let cero = '0';
    // let compound = '';

    // if (minutes < 10) {
    //   singleNumber = value.toString().slice(0);
    //   compound = cero + singleNumber;
    // } 

    // else if (value >= 10 && value < 60) {

    //   compound = value.toString();
    // }

    // return compound;



  }

  getSeconds() {
    let seconds = 0;
    if (this.currentTime === 0) {
      seconds = 0;
    } else if (this.currentTime >= 60) {
      seconds = this.currentTime % 60;
    } else {
      seconds = this.currentTime;
    }
    return seconds;
  }

  computeTwoDigitNumber(value) {
    let singleNumber = '';
    let cero = '0';
    let compound = '';

    if (value < 10) {
      singleNumber = value.toString().slice(0);
      compound = cero + singleNumber;
    } 

    else if (value >= 10 && value < 60) {

      compound = value.toString();
    }

    return compound; // texto
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {

let ss = this.computeTwoDigitNumber(this.getSeconds());//texto
let mm =  this.getMinutes();
let singleNumber = '';
let cero = '0';
let compound = '';

if (mm< 10) {
  singleNumber = mm.toString().slice(0);
  compound = cero + singleNumber;
} 

else if (mm>= 10 && mm < 60) {

  compound = mm.toString();
}

return `${compound}:${ss}`
  }
}







// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
