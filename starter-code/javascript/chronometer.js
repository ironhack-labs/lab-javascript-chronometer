class Chronometer {
  constructor() {
    this.currentTime = 0
    // this.currentTimeM = 0
    // this.increment = this.increment.bind(this);
  }

  // increment(){
  //   this.currentTime++
  // }
  startClick() {
    // this.intervalId = setInterval(this.increment, 1000)
    
    this.intervalId = setInterval(()=>{
      this.currentTime++
    },1000)
    

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    let seconds = this.currentTime - (this.getMinutes() * 60)
    return seconds
  }
  twoDigitsNumber(number) {
    if(number < 10){
      return '0' + number.toString()
    } else {return number.toString()}
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    let splitS = this.twoDigitsNumber(this.getSeconds())
    let splitM = this.twoDigitsNumber(this.getMinutes())
    return splitM + ":" + splitS


  }
}