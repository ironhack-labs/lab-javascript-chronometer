class Chronometer {
  constructor() {
  
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick(callback) {
    this.intervalId = setInterval(()=>{
    this.currentTime ++;
    if (callback){
      callback()
    }
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60); 
  }
  
  getSeconds() {
    let min = this.getMinutes() * 60;
    return this.currentTime - min 
        
  }
  twoDigitsNumber(numTwoDig) {
    let numString = numTwoDig.toString();  
    if (numTwoDig >= 10 ) return numString;
    let soma = "0" + numString
    return soma
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    let numero1 = this.getMinutes()
    let numero2 = this.getSeconds()
    let numMinutos = this.twoDigitsNumber(numero1)
    let numSegundos = this.twoDigitsNumber(numero2)
    return `${numMinutos}:${numSegundos}`
  }
}
