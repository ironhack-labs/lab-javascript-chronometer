class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)
   
    
  }
  
    
  getMinutes() {
    let currTimeMinutes = Math.floor(this.currentTime /60)
    return currTimeMinutes
  }
  getSeconds() {
      let currTimeSeconds = Math.floor(this.currentTime %60)
      return currTimeSeconds
  }
  twoDigitsNumber(num) {
    let getTens = Math.floor(num /10)
    let getUnits = Math.floor(num %10)
    let finalNum = `${getTens}${getUnits}`
    return finalNum
  }
  stopClick() {
    clearInterval(this.intervalId)
    
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    // let $li = document.createElement('li')
    // let $ol = document.getElementById('splits')
    // $li.innerHTML = 'hi'
    // $ol.appendChild($li)
  }
  
}


