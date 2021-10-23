class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => { this.currentTime++
      if (callback) callback()
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }
  
  computeTwoDigitNumber(answer) {
    const newAnswer = [];
  let stringAnswer = answer.toString();
    
    if (stringAnswer.length === 1 || 0) {
      newAnswer.push('0', stringAnswer);
      const result = newAnswer.join('');
      return result;
    } 
    else {
      return answer.toString();
  }}

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let currentTime = `${minutes}:${seconds}`;
    return currentTime;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
