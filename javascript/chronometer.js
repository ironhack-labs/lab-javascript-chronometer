class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null

  }
  start(callback) {
    this.intervalId = setInterval(() => {
      if (callback) {//Hago un condicional 
        callback()//llamo a la funcion
      }
      this.currentTime++//sumo 1 seg 

    }, 1000)

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)//con math.floor me reduce la operacion a un solo numero
  }

  getSeconds() {
    return this.currentTime % 60//los minutos que van corriendo le hago % para que me de el restante
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, '0')//paso el value toString que me pasa una cadena y padStart 2 y 0 que me devuelve dos digitos
  }

  stop() {
   //return setInterval(this.intervalId)
    return clearInterval(this.intervalId )
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    
    var second=computeTwoDigitNumber(value = getSeconds()) 
    var minutes=computeTwoDigitNumber(value = getMinutes())//30
 
    var result=`${minutes}: ${second}`
   
    return result
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
