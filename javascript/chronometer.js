let currentTime = 0;
let currentMinute = 0;
let twoDigitsMinutes;
let twoDigitsSeconds;

class Chronometer {
  constructor(){
    this.currentTime = 0;
    this.intervalId = 0;
 }

  startClick() {    
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      console.log(this.currentTime);
    }, 1000);
  }
  getMinutes() {
        const minutes = Math.floor(this.currentTime/60);
      return minutes;
  }
  getSeconds() {
    let seconds;
    if (this.currentTime < 60) {
       seconds = this.currentTime;
      } else {
        seconds = (this.currentTime - (this.getMinutes()*60));
      }
      return seconds
  }
  twoDigitsNumber(time) {
    let stringTime = time.toString();
    if ( stringTime.length < 2) {
      stringTime = "0" + stringTime;
    }
    return stringTime;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();
      return this.twoDigitsNumber(minutes) + `:` + this.twoDigitsNumber(seconds);
  }
}


//TEST
// const chrono = new Chronometer()
// console.log(chrono.startClick())
// console.log(chrono.getMinutes())
// console.log(chrono.getSeconds())
// console.log(chrono.twoDigitsNumber(8))
// console.log(chrono.splitClick())

