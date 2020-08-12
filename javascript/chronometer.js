class Chronometer {
  
  currentTime = 0
  intervalId = 0
  
  constructor() {
    
  }
  startClick(callback) {
    setInterval(()=>{this.currentTime ++},1000)
  }

  getMinutes() {
    
    let valor = this.currentTime / 60
    let resultado = Math.trunc(valor)
    return resultado
  }

  getSeconds() {
   
    return Math.round(this.currentTime % 60)
  }

  twoDigitsNumber(valorRecibido) {
    
    let num = valorRecibido.toString()
    let cero = "0"
    let resultado = ""

    if(num.length < 2) {
      resultado = cero.concat(num)
    }else {
      resultado = num
    }

    return resultado

  }

  stopClick() {
    
    clearInterval(this.intervalId)
  }

  resetClick() {
    
    this.currentTime = 0
  }

  splitClick() {
    
    let mint = this.getMinutes()
    let secs = this.getSeconds()
    let mint2 = this.twoDigitsNumber(mint)
    let secs2 = this.twoDigitsNumber(secs)

    let resultado = mint2.concat(":").concat(secs2)

    return resultado
  }

}
