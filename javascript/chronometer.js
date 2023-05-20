class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.milliseconds = 0;
  }

  start(callback) {
    this.intervalId = setInterval(() => {   //un intervalo
      if (callback) {                       // Si hay un callback
        callback()                          //ejecuta callback
      }  
      this.miliseconds++;                   //suma uno a miliseconds
      if (this.miliseconds === 99){         //si miliseconds llega a 99
        this.currentTime++                  //suma 1 a currentTime
        this.milliseconds = 0               //resetea a 0 los milisegundos
      }                                    // suma 1 a currentTime
    }, 10);                               // cada 10 milisecinds         
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
    this.currentTime = 0; 
    this.milliseconds = 0;          //vuleve a poner el currentTime y miliseconds a 0
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());  //uso la funcion para conseguir minutos
    const seconds = this.computeTwoDigitNumber(this.getSeconds());  //uso la funcion para conseguir segundos
    const milisecond = this.computeTwoDigitNumber(this.miliseconds)
    return `${minutes}:${seconds}:${milisecond}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
