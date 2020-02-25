class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }


startClick() {
  this.intervalId = setInterval(()=> {this.currentTime++},1000);
}
getMinutes() {
  return Math.floor(this.currentTime/60)
}

getSeconds() {
  return (this.currentTime%60)
}

twoDigitsNumber(input) {
let output = ("0" + input).slice(-2);
return output
}

stopClick() {clearInterval(this.intervalId)}

resetClick() {this.currentTime = 0}

splitClick() {}
}