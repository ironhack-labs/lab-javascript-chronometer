class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
    this.currentTimeMil = 0
    this.intervalIdMil = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      return this.currentTime++
    },1000)
    this.intervalIdMil = setInterval(() => {
      return this.currentTimeMil++
    },10)

    
  }
  getMinutes() {
    if(this.currentTime === 0){
      return 0
    }else {
      return Math.floor(this.currentTime/60)
    }
  }
  getSeconds() {
    if(this.currentTime > 59){
      const min = this.getMinutes()
      const sec = this.currentTime - 60*min
      return sec
      }
      return this.currentTime
  }
  getMilliseconds() {
    if(this.currentTimeMil > 99){
      this.currentTimeMil = 0
      this.currentTimeMil++
    }
      return this.currentTimeMil
  }
  twoDigitsNumber(_num) {
    const num = _num.toString()
    if(num.length < 2){
        return '0'+ num
    }else if(num === '0'){
      return '00'
    }
    return num
  }
  stopClick() {
    clearInterval(this.startClick())
    return this.intervalId = 0
    
  }
  resetClick() {
    return this.currentTime = 0
  }
  splitClick() {
    const num = this.twoDigitsNumber(this.getMinutes())
    const sec = this.twoDigitsNumber(this.getSeconds())
    const mil = this.twoDigitsNumber(this.getMilliseconds())
    if(!num || !sec || !mil){
      return '00:00:00'
    }
    return num+':'+sec+':'+mil.slice(0,2)
  }
}
