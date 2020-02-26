class Chronometer {
  constructor() {
    this.currentTime =0
    this.intervalId =""
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 10);

  }
  getMinutes() {
    let minutos =Math.floor(this.currentTime/100/60)
    return minutos/1000

  }
  getSeconds() {
    let segundos = Math.floor(this.currentTime/100)-Math.floor(this.currentTime/100/60)*60
    return segundos
  }
  getMiliseconds(){
    return Math.floor(this.currentTime)-this.getSeconds()*100
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

