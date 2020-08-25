class Chronometer {

  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0

  }


  startClick(callback) {
     // ... your code goes here
    this.intervalId = setInterval(() => this.currentTime +=1 , 1000)
  
  }


  getMinutes() {
    // ... your code goes here
    if (this.currentTime < 60){
      return 0
    }
    else{
      return (parseInt(this.currentTime / 60))
    }
  }
  getSeconds() {
    // ... your code goes here
      return (this.currentTime - this.getMinutes() * 60)

  }
  twoDigitsNumber(digit) {
    // ... your code goes here
      const number = JSON.stringify(digit);

    if(number.length === 1){

      return 0 + number

    }else {

      return number
    }

  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0
  }
  splitClick() {
    // ... your code goes here
  const minutes = this.twoDigitsNumber(this.getMinutes()) + ':' + this.twoDigitsNumber(this.getSeconds())

  return minutes

  }
}
