class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(() =>{
this.currentTime ++;
      if (callback){
        (callback)
      }
    },1000)
  }

  getMinutes() {
  //  return this.currentTime = Math.floor(this.currentTime / 60)
      return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
 // return Math.floor(this.currentTime % 60)
    return this.currentTime % 60
  }
  //  Versión 1
  // computeTwoDigitNumber(value) {
  //   const time = value.toString();
  //   if(time.length < 2){
  //     return "0" + time
  //   }
  //   return time
  //  }
  // versión 2
  // computeTwoDigitNumber(value) {
  //   return value.toString().padStart(2, '0');
  // }
//     forma 3 con un if diferente también
  //  computeTwoDigitNumber(value) {
  //    if(value < 9){
  //                  //---->>  if(value.toString().length < 2){<<-----//
  //     return `0${value}`
  //   } else {
  //     return `${value}`;
  //   }
  // }
  computeTwoDigitNumber(value) {
    return String("00" + value).slice(-2)
  }
//creando un const del value y añadiendo un if,
//podría regresar 00 si no hay nada en el argumento
//pero esto pasa los tests bien 

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
//no me puedo creer que estuve con el espacio por los lados de ":" dandome error tanto rato....
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
