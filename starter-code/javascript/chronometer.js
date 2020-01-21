class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
    this.status = "Stopped"
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++
      printTime()
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
    printTime()
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  splitClick() {
    const li = document.createElement("li")
    li.innerText = `${minDec.innerText}${minUni.innerText} : ${secDec.innerText}${secUni.innerText}`
    console.log(li)
    parent.appendChild(li)

  }
}

// //-------- Comenzamos MAnipulacion del DOM --------

// let btnLeft = document.getElementById('btnLeft')
// let btnRigth = document.getElementById('btnRigth')

// btnLeft