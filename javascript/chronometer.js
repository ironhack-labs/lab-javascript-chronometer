class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  //TODO if statement iteration 1
  start(callback) {
      this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
  return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
  return Math.floor(this.currentTime % 60);
  }


  computeTwoDigitNumber(value) {
    let newArr = [];
    const stringValue = value.toString();
    if (stringValue.length === 1 || 0) {
      newArr.push('0', stringValue);
      const result = newArr.join('');
      return result;
    } else {
      return value.toString();
    }
  }

  //   computeTwoDigitNumber(value) {
  //   let newArr = [];
  //   const stringValue = value.toString();
  //   if (stringValue.length === 1) {
  //     newArr.push('0', stringValue);
  //     const result = newArr.join('');
  //     return result;
  //   } else if ( stringValue.length === 0) {
  //     newArr.push('0', '0', stringValue);
  //     const result = newArr.join('');
  //     return result;
  //   } else {
  //     return value.toString();
  //   }
  // }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let newArr = []
    newArr.push(this.getMinutes(), this.getSeconds())
    const result = newArr.join(':');
    return this.computeTwoDigitNumber(result);
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
