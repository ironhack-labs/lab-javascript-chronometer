class Chronometer {
  constructor() {

    this.currentTime=0
    this.intervalId

  }
  startClick() {
    
    this.intervalId=setInterval(() => {
      this.currentTime++
      
      
    }, 1000);
    
  }
  getMinutes() {
    this.mins=Math.floor(this.currentTime/60)
    // console.log(this.currentTime)
    return this.mins
  }
  getSeconds() {
    this.secs = this.currentTime % 60
// console.log(this.currentTime)
    return this.secs
  }
  twoDigitsNumber(a) {
    let b
    if(a<=9)
      b="0"+a
    else
      b=""+a
    
    return b
  }
  stopClick() {

    clearInterval(this.intervalId)
    
  }
  resetClick() {
    this.currentTime=0
  }
  splitClick() {}
}
