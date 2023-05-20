class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {   //un intervalo
      if (callback) {                       // Si hay un callback
        callback()                          //ejecuta callback
      }  
      this.currentTime++                    // suma 1 a currentTime
    }, 1000);                               // cada 1 segundo         
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);//dividimos currentTime entre 60 para saber los minutos y redondeamos para número redondo
  }

  getSeconds() {
    return this.currentTime % 60; //hacemos resto para saber los segundo que nos "sobran"
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {             //si valor es menor de 10
      return `0${value}`;           // devuelve un string con un 0 delante del valor
    }

    return value.toString();      // si no devuelve el valor en formato string
  }

  stop() {
    clearInterval(this.intervalId); //para el intervalo
  }

  reset() {
    this.currentTime = 0;           //vuleve a poner el currentTime a 0
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());  //uso la funcion para conseguir minutos
    const seconds = this.computeTwoDigitNumber(this.getSeconds());  //uso la funcion para conseguir segundos
    return `${minutes}:${seconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
