class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId
    this.savedTime = []
  }
   startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime ++
      printTime()
    },1000)
  }
  getMinutes() {
     return Math.floor(this.currentTime/60)
  }
  getSeconds() {
      return Math.floor(this.currentTime%60)
  }
  twoDigitsNumber(time) {
    //  const twoDigit = ''
    //  if(time < 10) {
    //   twoDigit = `0${time}`
    //  } else {
    //   twoDigit = `${time}`
    //  }
    //  return twoDigit
     return (time < 10 ? `0${time}` : `${time}`)
  }
   stopClick() {
    clearInterval(this.intervalId)
   }

   resetClick() {
     this.currentTime = 0
     this.savedTime = []
     printTime()
     while(document.querySelector('li')){
       document.querySelector('#splits').removeChild(document.querySelector('li'))
     }
}


  splitClick() {
    this.savedTime.push(this.currentTime)
    const li = document.createElement('li')
    document.querySelector('#splits').appendChild(li)
    const min = this.twoDigitsNumber(this.getMinutes())
    const seg = this.twoDigitsNumber(this.getSeconds())
    li.innerHTML = `${min}:${seg}`
  }
}