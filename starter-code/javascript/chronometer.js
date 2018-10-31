class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    var _chronometer = this;
    this.intervalId = setInterval(
      function() {
        _chronometer.currentTime += 1;
        this.setTime();
      }.bind(this),
      1000
    );
  }

  setMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  setSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(value) {
    var aString = value.toString();
    if (aString.length === 1) {
      return "0" + aString;
    } else {
      return aString;
    }
  }

  setTime() {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());

    return (minutes+":"+seconds)
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {}

  splitClick() {}
}
