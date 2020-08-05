class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
    }, 1000);
  }

  getMinutes() {
    let valueInMinutes = Math.floor(this.currentTime / 60);
    return valueInMinutes;
  }

  getSeconds() {
    let valueInSeconds = this.currentTime % 60;
    return valueInSeconds;
  }
  twoDigitsNumber(value) {
    let newValue = `${value}`;
    if (newValue.length < 2) {
      newValue = '0' + newValue;
    }
    return newValue;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let num1 = this.getMinutes();
    let num2 = this.getSeconds();

    if(num1 < 10) {
      num1 = `0${num1}`;
    } else {
      num1 = `${num1}`
    }

    if (num2 < 10) {
      num2 = `0${num2}`;
    } else {
      num2 = `${num2}`;
    }
  return num1 + ":" + num2;
  }
}
