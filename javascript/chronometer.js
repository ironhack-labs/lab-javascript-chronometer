

class Chronometer {
  constructor() {
    this.currentTime = 0; // miliseconds
    this.intervalId = 0; // referencia del intervalo
  }
// 1501 => 2 min, 30 seg, 1ms
  startClick(callback) {
    // empieza el cronometro
    // cada segundo actualizamos el tiempo del cronometro
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      callback()
      // console.log(this.splitClick())
    }, 10)
  }

  getMinutes() {
    // convertimos el tiempo total en minutos exactos
    return parseInt(this.currentTime / 100 / 60)
  }

  getSeconds() {
    // el resultado es la resta del tiempo total menos los minutos del cronometro. para poder hacer la resta, primero convertimos los minutos en segundos
    const minSec = this.getMinutes() * 60
    return parseInt(this.currentTime / 100 - minSec)
  }

  getMiliseconds() {
    const minMs = this.getMinutes() * 60 * 100
    const secMs = this.getSeconds() * 100
    return parseInt(this.currentTime - minMs - secMs)
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
    this.intervalId = 0;
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    const minutes = this.getMinutes()
    const minTwoDigits = this.twoDigitsNumber(minutes)
    const seconds = this.getSeconds()
    const secTwoDigits = this.twoDigitsNumber(seconds)
    const msSeconds = this.getMiliseconds()
    const msTwoDigits = this.twoDigitsNumber(msSeconds)
    return `${minTwoDigits}:${secTwoDigits}:${msTwoDigits}`
  }
}
