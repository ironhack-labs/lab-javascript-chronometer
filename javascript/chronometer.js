class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.running = false;
  }
  startClick(callback) {
    this.running = true;
    this.intervalId = setInterval(() => {
      this.currentTime++;
      callback();
    }
    , 1000 ); 
  }
  getMinutes() {

    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  
  twoDigitsNumber(value) {
    return String(value).padStart(2, '0');
  }
  stopClick() {
    clearInterval(this.intervalId);
    this.running = false;
  }
  resetClick() {
    this.currentTime = 0;
    document.getElementById('minDec').innerText = "0"
    document.getElementById('minUni').innerText = "0"
    document.getElementById('secDec').innerText = "0"
    document.getElementById('secUni').innerText = "0"
    document.getElementById('milDec').innerText = "0"
    document.getElementById('milUni').innerText = "0"
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}
