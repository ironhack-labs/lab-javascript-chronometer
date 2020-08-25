class Chronometer {
  constructor() {
    // ... your code goes here

    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    // ... your code goes here

    setInterval(() => {
      this.currentTime++;
    }, 1000) 
    
  }

  getMinutes() {
    // ... your code goes here
    if (this.currentTime > 59) {
      return parseInt(this.currentTime / 60)
    } else {
      return 0
    }
    
  }

  getSeconds() {
    //... your code goes here
    const resto = parseInt(this.currentTime - (this.getMinutes() * 60))
    if (resto < 60 ){
      return resto;
    } 

  }
  twoDigitsNumber() {
    // ... your code goes here

    if (this.getMinutes() < 10) {
      const string = this.getMinutes().toString()
      const stringFinal = string.padStart(2, "0")
      return stringFinal
      
    }

    if (this.getSeconds() < 10) {
      const string2 = this.getSeconds().toString()
      const stringFinal2 = string2.padStart(2, "0")
      return stringFinal2

    }

  }
  stopClick() {
    // ... your code goes here

    clearInterval(this.intervalId )
  }
  resetClick() {
    // ... your code goes here

    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
    let min = this.getMinutes();
    let sec = this.getSeconds();
    if (min < 10) {
      return (`${0}${min}:${0}${sec}`);
    } else {
      return (`${min}:${sec}`);
    }
  }
  
}





