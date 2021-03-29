class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    const intervalId = setInterval(()=>{this.currentTime++
    },1000)
  }
  getMinutes() {
    if (this.currentTime!=0){
      return (Math.floor(this.currentTime/60))
    } else {return(0)}
  }
  getSeconds() {
    if (this.currentTime!=0){
      return (this.currentTime%60)
    } else {return(0)}
  }
  twoDigitsNumber(num) {
  if (num.toString().length < 2){
    return (0+num.toString())
  }else {return num.toString()}
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime=0
  }
  splitClick() {
    let min= this.getMinutes()
    let sec= this.getSeconds()

      return (`${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`)



  }
}
