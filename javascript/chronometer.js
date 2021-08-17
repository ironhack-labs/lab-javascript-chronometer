class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(() => {
			if (callback) {
				callback();
			}
			this.currentTime++;
		}, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return Math.floor(this.currentTime%60)
  }

  computeTwoDigitNumber(value) {
    //if ternario
    return value < 10 ? `0${value}` : `${value}`;

    // if(value < 10){
    //   return `0${value}`;
    // }else{
    //   return `${value}`
    // }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
  
    // let random = this.computeTwoDigitNumber(this.getMinutes()); 
    
    // let random2 = this.computeTwoDigitNumber(this.getSeconds());

    // return random +':'+ random2;

    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
