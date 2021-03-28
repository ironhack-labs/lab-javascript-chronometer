

class Chronometer {
    constructor() {
      this.currentTime = 0;
      this.intervalId = 0;
    }
    startClick(callback) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        console.log(this.currentTime);
      }, 1000);
      
    }
    getMinutes() {
      return Math.floor(this.currentTime/60)
    }
    getSeconds() {
      return Math.floor(this.currentTime%60)
    }
    twoDigitsNumber(num) {
     if(num <=9){
       return `0${num}`;
     }else{
       return num;
     }
    }
    stopClick() {
      return clearInterval(this.intervalId);
    }
    resetClick() {
      return this.currentTime = 0;
    }
    splitClick() {
      return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
    }
  }
//============
class Chronometer {
    constructor() {
     this.currentTime = 0;
     this.intervalId = 0;
    }
    startClick(callback) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        console.log(this.currentTime)
      }, 1000)
      console.log(this.intervalId)
    }
    getMinutes() {
      return Math.floor(this.currentTime/60)
    }
    getSeconds() {
      return Math.floor(this.currentTime%60)
    }
    twoDigitsNumber(num) {
      if (num === 0) {
        num = `00`
      } else 
      if (num < 10) {
        num = `0${num}`
      } else {
        num = `${num}`
      }
      return num;
    }
    stopClick() {
      return clearInterval(this.intervalId);
    }
    resetClick() {
      this.currentTime = 0;
    }
    splitClick() {
      return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
    }
  }
  // class Chronometer {
  //   constructor() {
  //    this.currentTime = 0;
  //    this.intervalId = 0;
  //   }
  //   startClick(callback) {
  //     this.intervalId = setInterval(() => {
  //       this.currentTime++;
  //       console.log(this.currentTime)
  //     }, 1000)
  //     console.log(this.intervalId)
  //   }
  //   getMinutes() {
  //     return Math.floor(this.currentTime/60)
  //   }
  //   getSeconds() {
  //     return Math.floor(this.currentTime%60)
  //   }
  //   twoDigitsNumber(num) {
  //     this.num = num;
  //     if (num === 0) {
  //       num = `00`
  //     } else if (num < 10) {
  //       num = `0${num}`
  //     } else {
  //       num = `${num}`
  //     }
  //     return num;
  //   }
  //   stopClick() {
  //     return clearInterval(this.intervalId);
  //   }
  //   resetClick() {
  //     this.currentTime = 0;
  //   }
  //   splitClick() {
  //     return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  //   }
  // }
  