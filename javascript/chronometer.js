class Chronometer {
  constructor() {
    this.currentTime = 605899
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(()=>{
      if (this.currentTime < 605999) {
        this.currentTime++
        printTime()
      } else {
        this.stopClick()
        document.getElementById('sphere').style.backgroundColor = 'orange'
      }
    }, 10)
  }
  getMinutes() {
    if (this.currentTime === 0){
      return 0
    } else {
      return Math.floor(this.currentTime/6000)
    }
  }
  getSeconds() {
    if (this.currentTime === 0){
      return 0
    } else {
      return (Math.floor(this.currentTime/100)%60)
    }
  }
  getCentiseconds() {
    if (this.currentTime === 0){
      return 0
    } else {
      return this.currentTime%100
    }
  }
  twoDigitsNumber(num) {
    if (String(num).length === 1){
      return '0'+String(num)
    } else if (String(num).length === 2){
      return String(num)
    } else {
      return '99'
    }
  }
  stopClick() {
    clearInterval(this.intervalId)
    setStartBtn()
    setResetBtn()
  }
  resetClick() {
    this.currentTime = 0
    document.getElementById('sphere').style.backgroundColor = ''
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:
    ${this.twoDigitsNumber(this.getSeconds())}:
    ${this.twoDigitsNumber(this.getCentiseconds())}`
  }
}