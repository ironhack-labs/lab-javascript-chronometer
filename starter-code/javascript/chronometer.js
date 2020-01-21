class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
    this.status = "Stopped"
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)
  }

  getMinutes() {
    return parseInt(this.currentTime / 60)
  }

  getSeconds() {
    return parseInt(this.currentTime % 60)
  }

  twoDigitsNumber(number) {
    return number < 10 ? `0${number.toString()}` : number.toString()
  }

  resetClick() {
    this.currentTime = 0
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  splitClick(){}
}

// //-------- Comenzamos MAnipulacion del DOM --------

// let btnLeft = document.getElementById('btnLeft')
// let btnRigth = document.getElementById('btnRigth')

// btnLeft
