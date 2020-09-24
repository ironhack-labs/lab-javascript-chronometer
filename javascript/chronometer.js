class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(printTime) {
    setInterval(() =>{
        this.currentTime++
        printTime(this.currentTime)
      },1000)
  }
  getMinutes() {
    let mins = Math.floor(this.currentTime / 60);
    return mins
  }

  getSeconds() {
    let secs = (this.currentTime%60)
    return secs
  }
  twoDigitsNumber(number) {
   if (number<10 ){
    return String('0'+number)
   }else{
     return String(number)
   }
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds()
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`
  }
}
