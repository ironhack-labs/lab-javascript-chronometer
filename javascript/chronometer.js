class Chronometer {
  constructor() {

  this.currentTime = 0
  this.intervalId = 0
  
  }

  startClick(callback) {

   this.intervalId = 
   setInterval(() => {
   
    this.currentTime ++;
    callback();
   }, 1000);

  }
  getMinutes() {
    const minutes = this.currentTime / 60
    return Math.floor(minutes)
  }

  getSeconds() {
    const seconds = this.currentTime % 60
    return Math.floor(seconds)
  }

  twoDigitsNumber(number) {

if (number.toString().length === 1) {return `0${number}`}
else {return number.toString();}
  //  let min = this.getMinutes(this.currentTime).toString(2)
  //  let sec = this.getSeconds(this.currentTime).toString(2)

  //  return min + sec
  }

  stopClick() {
   
  clearInterval(this.intervalId)
  }

  resetClick() {
  this.currentTime = 0;
  
  }

  splitClick() {
    return `${this.twoDigitsNumber(this.min)}:${this.twoDigitsNumber(this.sec)}`
  }
}
