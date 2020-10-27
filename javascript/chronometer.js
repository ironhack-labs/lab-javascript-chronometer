class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    const intervalId = setInterval(() => {
      this.currentTime += 1
    },1000)
  }
  getMinutes() {
    
    let minutes =  0
    if (this.currentTime == 0) {
      return 0
    } else {
      let minStarted = this.currentTime / 60
      return parseInt( minStarted)
    }
    
  }
  getSeconds() {
    if (this.currentTime == 0) {
      return 0
    } else {
      let secondStarted = this.currentTime % 60
      return parseInt(secondStarted)
     }
  }
  twoDigitsNumber(time) {
    // let min = 4
    // let seg = min - Math.floor(min)
    // min = min - seg
    let strinRes = ("0" + time).slice(-2)
    return strinRes
  

  }

  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  
  }
  splitClick() {
   
    let minutos = this.getMinutes()
    let segundos = this.getSeconds()
    let stringnuevo = this.twoDigitsNumber(minutos) + ":" + this.twoDigitsNumber(segundos)

    return stringnuevo

  }
}





// if (this.currentTime < 60) {
    //   return "00:" + this.currentTime
    // } 



    //  let min = 4
    // let seg = min - Math.floor(min)
    // min = min - seg
    // let strinRes = ("0" + min).slice(-2) + seg.toString().substring(1);
    // return strinRes