class Chronometer {
  
  //constructor 
  constructor() {
    this.currentTime = 1;
  }

  // methods


  startClick() {

    this.intervalId = setInterval(() => 
    
    {
      this.currentTime += 1;
    }
    
    ,1000)


  }

  
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    if (this.currentTime == 0) return 0;
    let s = this.currentTime % 60;
    return s

  }
  twoDigitsNumber(num) {

    num = "" + num;
    if (num.length == 1){
      num = "0" + num;
    }
    return num[num.length-2]+num[num.length-1]
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {

    clearInterval(this.currentTime)

  }
  // splitClick() {}
}