class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick(callback) {
    setInterval(() =>{
      this.currentTime +=1;
      console.log(this.currentTime)
    },1000)
  }

  getMinutes() {
    let minutes = this.currentTime/60
    return Math.floor(minutes)
  }

  getSeconds() {
    let seconds = this.currentTime%60
    console.log(seconds)
    return Math.floor(seconds)
  }

  twoDigitsNumber(time) {
    let twoDigits=Math.floor(time/60);
    let stringTwoDigits= twoDigits.toString();
      if (stringTwoDigits.length<2){
      return( "0"+stringTwoDigits)
      }
      else {return stringTwoDigits
  }}

  stopClick() {
    return clearInterval(this.currentTime) }

  resetClick() {
    this.currentTime = 0
  }

  
  splitClick()
  
  {
      let min = Math.floor(this.currentTime/60);
      let sec = Math.floor(this.currentTime%60);
    
        if (min<10 && sec<10) {
          return (`${0}${min}:${0}${sec}`)
        }  if (min<10 && sec>10) {
         return (`${0}${min}:${sec}`)
        }  if (min>10 && sec<10) {
          return (`${min}:${0}${sec}`)
        } if (min>10 && sec>10){
          return (`${min}:${sec}`)
        }
        }
      }
