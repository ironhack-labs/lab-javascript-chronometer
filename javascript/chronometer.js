class Chronometer {
  constructor(){
    this.currentTime =0;
    this.intervalId =0;
  }

  // startClick = function(){
  //   this.intervalId = setInterval(()=>{
  //     this.currentTime++; 
  //   },1000);
  // }

  startClick = function(){
    this.intervalId = setInterval(()=>{
      this.currentTime += 10;
    },10);
  }

  getMinutes = function(){
      debugger
      return Math.floor((this.currentTime/60000));
  }
  get currentTime(){
    
  }
  getSeconds = function(){
    debugger
    return (this.currentTime % 60000)/1000;
  }

  getMilliSeconds = function(){
    return this.currentTime * 1000000;
  }

  twoDigitsNumber = function(aNumber){
    return aNumber<=9 ? '0'+ aNumber.toString() : aNumber.toString();
  }

  stopClick = function(){
    clearInterval(this.intervalId);
  }

  resetClick = function(){
    this.currentTime = 0;
  }
  splitClick = function() {
    let mins = this.twoDigitsNumber(this.getMinutes());
    let secs = this.twoDigitsNumber(this.getSeconds());
    let miliSecs = this.twoDigitsNumber(this.getMilliSeconds());
    return `${mins}:${secs}:${miliSecs}`;
  }

}

var chronometerObj = new Chronometer();
