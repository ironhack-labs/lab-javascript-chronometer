class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
   this.intervalId = setInterval (()=>{
      this.currentTime++
      callback()
    }, 1000)
  }

  getMinutes() {
    Math.floor(this.currentTime/60)
  }

  getSeconds() {
    this.currentTime % 60
  }

  twoDigitsNumber(value) {
    if (value < 10) return `0${value}`;
    return `${value}`;
  
    // const numberString = this.currentTime.toString()
    // if(numberString.length < 2){
    //   return '0' + numberString
    // } else {
    // return numberString
  }
  

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0
  }

  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes())
    let sec = this.twoDigitsNumber(this.getSeconds())
    
    return `${min}:${sec}`
  }
}
