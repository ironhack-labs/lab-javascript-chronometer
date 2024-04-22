class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    const currentTime =() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }

    this.intervalId = setInterval(currentTime, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    // 7 -> 07
    // "7" -> "07" ----> "0" + "7"
    let valueString = value.toString();
    if (valueString.length < 2) {
      return '0' + valueString;
    } else {
      return valueString;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;

    let elementsReset = document.getElementsByClassName('number');

    for (let element of elementsReset) {
      element.innerHTML = '00:00:00';
    }
  }

  split() {
    let formattedMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let formattedSeconds = this.computeTwoDigitNumber(this.getSeconds());

    // let altFormattedTime = formattedMinutes + ":" + formattedSeconds;
    let formattedTime = `${formattedMinutes}:${formattedSeconds}`;

    return formattedTime;
  }
}
//split();

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
