class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = ""
  }
  startClick() {
    this.intervalId =  setInterval (()=> {
       this.currentTime += 1
    },1000) 
  } 
  getMinutes() {
  if(this.currentTime === 0){
    return 0
  }
    else if(this.currentTime > 60){
    return parseInt(this.currentTime / 60) //serán minutos sin decimal
  }
  }
  getSeconds() {
    if(this.currentTime % 60 == 0){ //los números son múltiplos
      return 0
    }
    else{
      return this.currentTime % 60 
    }
  }
  twoDigitsNumber(num1) {
    if(num1 <= 9){
    let a = '0' + num1.toString()
      return a
    }
    return num1.toString()
  }
  stopClick() {
    clearInterval (this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
 } 

//   // splitClick() {}