
class Chronometer {
  constructor() {
    this.currentTime = 0; // seconds
    this.intervalId = 0; // referencia del intervalo
  }

  startClick(callback) {
    // cada segundo actualizamos el tiempo del cronometro
    this.intervalId = setInterval(() => {
      this.currentTime += 1
    },1000)
  }
  getMinutes() {
    // convertimos el tiempo total en minutos exactos
    return parseInt(this.currentTime / 60)
  }
  getSeconds() {
    // el resultado es la resta del tiempo total menos los minutos del cronometro. para poder hacer la resta, primero convertimos los minutos en segundos
    return this.currentTime - (this.getMinutes() * 60)
  }
  twoDigitsNumber(number) {
    //convertimos el numero en un string y le decimos que si solo tiene 1 digito coloque "0" delante y sino que devuelva el string.
    const string = number.toString()
    if(string.length === 1) {
      return `0${string}`
    }
    return string
  }
  stopClick() {
    //paramos el intervalo con la referencia almacenada en el intervalId
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    const minutes = this.getMinutes()
    const minTwoDigits = this.twoDigitsNumber(minutes)
    const seconds = this.getSeconds()
    const secTwoDigits = this.twoDigitsNumber(seconds)
    return `${minTwoDigits}:${secTwoDigits}`
  }
}
