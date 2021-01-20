class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.running = false;
  }
  startClick(callback1, callback2) {
    this.running = true;
    this.intervalId = setInterval(() => {
      this.currentTime++;
      this.getMilliseconds(callback2)
      callback1();
    }
    , 1000 ); 
  }
  getMinutes() {

    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  
  getMilliseconds(callback2) {
    
    let milliseconds = 0;
    let milIntervalId = 0;

    milIntervalId = setInterval(() => {

      
    milliseconds++;
    callback2(milliseconds)
    if (milliseconds >= 99) {
      milliseconds = 0;
      console.log("deu 99")
    }
  
    if (!chronometer.running) {
      clearInterval(milIntervalId);
    }

    }, 1);

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
    let milDec = document.getElementById('milDec').innerText;
    let milUni = document.getElementById('milUni').innerText;
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${milDec}${milUni}`
  }
}
