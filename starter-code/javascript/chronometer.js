class Chronometer {
  constructor() {
    this.currentTime = 0, 
    this.intervalId
  }
  startClick() {
    console.log(`start click inicializado`)
    const interval = ()=>{
      this.currentTime ++
      printTime()
    }
    this.intervalId = setInterval(interval, 1000)  
  }
  getMinutes() {
    return parseInt(this.currentTime / 60)
  }
  getSeconds() {
    return this.currentTime % 60 
  }
  twoDigitsNumber(time) {
    if(time < 10){
      return `0${time}`
    }else{
      return `${time}`
    }
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime =0
    min.innerText = '00'
    sec.innerText = '00'
  }
  // splitClick() {}
}
