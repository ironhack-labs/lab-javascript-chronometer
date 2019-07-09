class Chronometer {

  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
 
  startClick(){
    const increase = () => {
    this.currentTime++
    printTime()
      }
    this.intervalId= setInterval(increase, 1000)
 
  }
 
  getMinutes() {
    let minutes = parseInt(this.currentTime/60)
    return minutes
  }
  getSeconds() {
    let seconds = (this.currentTime%60)
 
    return seconds
  }
 
  twoDigitsNumber(number) {
 
    if(number < 10) {return '0' + number.toString()}
    else { return number.toString()}
  }
 
  stopClick() {
 
          clearInterval(this.intervalId)
 
  }
 
  resetClick() {
    this.currentTime = 0
  }
  // splitClick() {}
 }