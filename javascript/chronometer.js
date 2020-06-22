class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    return Math.floor (this.currentTime / 60);
  }
  
  getSeconds() {
    if (this.currentTime === 0) return 0;
    if (this.getMinutes() > 0) return this.currentTime % 60;
    return this.currentTime;
  }
  twoDigitsNumber(anyNumber) {
    if (anyNumber > 0) {
    if (anyNumber.toString.length == 1) return "0"+anyNumber;
    }else return "00";
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick(num1, num2) {
    num1 = this.twoDigitsNumber(num1);
    num2 = this.twoDigitsNumber(num2);
    return `${num1}:${num2}`;
  }
}
