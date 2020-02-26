class Chronometer {
  constructor() {
    this.currentTime =0
    this.intervalId =""
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000);

  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    return this.currentTime-Math.floor(this.currentTime/60)*60
  }
  twoDigitsNumber(param) {

    //   let result = "0"+String(param)
    // if(result.length===3){
    //   return String(param)
    // }
    // return result
    return ("0"+param).slice(-2)
  }
   stopClick() {

    clearInterval(this.intervalId)
   }
  resetClick() {
    this.currentTime =0
  }
  // splitClick() {}
}

