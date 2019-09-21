class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
    }, 10);
  }
  getMinutes() {
      const minutes = Number(Math.floor(this.currentTime / 6000).toFixed(0))
      return minutes
  }
  getSeconds() {
      return Number(Math.floor(this.currentTime / 100).toFixed(0))
  }

  // al incluir milisegundos deja de funcionar todo Jasmine en verde antes, contando en segundos ha funcionad con todos a verde
  getMiliseconds(){
      return this.currentTime % 100
  }

  twoDigitsNumber(item) {
    let result = ''
    if (item <10) {
      result = '0' + item
    }else{
      result = item.toString(10)
    }

    return result
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  // splitClick() {}
}