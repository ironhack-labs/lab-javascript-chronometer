class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId;
  }
  startClick = () => {
   this.intervalId = setInterval(() => {
      this.currentTime ++
    }, 1000)
  }

  getMinutes = () => {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds = () => {
    return this.currentTime % 60
  }

  twoDigitsNumber = (number) => {
    let str = number.toString()
    let str2 = '0'

    if (str.length >= 2) {
      return str
    } else {
      return str2.concat(str)
    }
  }

  stopClick = () => {
    clearInterval(this.intervalId);
  }

  resetClick = () => {
    this.currentTime = 0
  }






  // getSeconds() {}
  // twoDigitsNumber() {}
  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
}

// function Chronometer(){
//   this.currentTime = 0
//   this.intervalId = 0
//   this.startClick = function(){
//     this.currentTime +=1
//   }
//   this.getMinutes = function() {
//     this.currentTime = 0.0
//     return  this.currentTime

//   }
// }

// setInterval(startClick function(){
//   this.currentTime +=1
// }, 1000);



const si = console.log('ja')