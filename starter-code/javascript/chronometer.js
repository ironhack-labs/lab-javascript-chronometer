class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
    this.milliseconds = 0
    this.millisecondInterval = 0
  }

startClick() {
  this.intervalId = setInterval(()=> {this.currentTime++},1000)
  this.millisecondInterval = setInterval(()=> {this.milliseconds++},1);
}


getMinutes() {
  return Math.floor(this.currentTime/60)
}

getSeconds() {
  return (this.currentTime%60)
}

getMilliseconds() {
  return (this.milliseconds%100)
}


twoDigitsNumber(input) {
let output = ("0" + input).slice(-2);
return output
}

stopClick() {clearInterval(this.intervalId); 
  clearInterval(this.millisecondInterval)}

resetClick() {this.currentTime = 0;
              this.milliseconds = 0}

splitClick() {}
}


var chronometer = new Chronometer()
chronometer.startClick()