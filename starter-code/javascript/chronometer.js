class Chronometer {
  // Constructor
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  // Prototype
  startClick() {
    return this.intervalId = setInterval(() => {
      this.currentTime++
      printTime()
    }, 10)
  }

  getMinutes() {
    //   console.log(this.currentTime)
    //   console.log(this.currentTime / 60)
    //   console.log(parseInt(this.currentTime / 60))
    return parseInt(this.currentTime / 6000)
  }

  getSeconds() {
    // console.log(this.currentTime % 60 + "resto")
    // console.log(parseInt(this.currentTime % 60) + "resto parseInt")
    return parseInt((this.currentTime / 100) % 60)
  }
  getMiliseconds() {
    return parseInt(this.currentTime)
  }

  twoDigitsNumber(number) {
    // Pasamos el numero a string
    number += ''
    // Lo pasamos a array para operarlo
    let numberArr = number.split('')

    // Comprobamos si es de un digito y si es asi le metemos un 0
    if (numberArr.length == 1) {
      numberArr.unshift('0')
    }

    // Unimos el array en un string y lo retornamos
    let result = numberArr.join('')
    return result
  }

  stopClick() {
    return clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0
  }

  // splitClick() {}
}