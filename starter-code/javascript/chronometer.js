class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.minute = 0;
  }
  startClick() {
    this.intervalId = window.setInterval(() => {
      //console.log(this.currentTime);
      this.currentTime += 1;
      printMinutes();
      printSeconds();
      printMilliseconds();
      return this.currentTime;
    }, 10);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }
  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60;
  }
  getMiliSeconds() {
    return Math.floor(this.currentTime / 1000);
  }
  getMiliSeconds() {
    return this.currentTime % 100;
  }
  twoDigitsNumber(digist) {
    if (digist < 10) return "0" + digist;
    else return digist.toString();
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    return (this.currentTime = 0);
  }
  splitClick() {
    return `${minDec.innerText}${minUni.innerText}mn ${secDec.innerText}${
      secUni.innerText
    }s ${milDec.innerText}${milUni.innerText}ms`;
  }
}
