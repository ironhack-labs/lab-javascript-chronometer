class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentMin = 0;
    this.currentSec = 0;
    this.twoDigits = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.time = "";
    this.setMinutes = this.setMinutes.bind(this);
    this.setSeconds = this.setSeconds.bind(this);
    this.twoDigitsNumber = this.twoDigitsNumber.bind(this);
    this.setTime = this.setTime.bind(this);
  }
  startClick() {
    this.intervalId = setInterval(function() { 
      this.currentTime++;
      this.setMinutes();
      this.setSeconds();
      this.setTime();
      isRunning = true;
      // debugger;
    }.bind(this), 1000);
  }
  setMinutes(){
      if(this.currentTime % 60 ==0){
        this.currentMin = this.currentTime / 60;
       // this.currentMin++;
      }
     // console.log("currentMin",this.currentMin);
  }
  setSeconds(){
      if (this.currentTime % 60 == 0 || this.currentTime % 60 >=1 ){
        this.currentSec = this.currentTime % 60
      }else if (this.currentTime < 1){
        this.currentSec = this.currentTime
      }
  }
  twoDigitsNumber(value){
      if (value < 10){
        this.twoDigits = "0"+value;
      }else{
        this.twoDigits = value;
      }
  }
  setTime(){
    this.twoDigitsNumber(this.currentMin);
    this.minutes = this.twoDigits 
    this.twoDigitsNumber(this.currentSec);
    this.seconds = this.twoDigits;
    this.time = this.minutes+":"+this.seconds;
    console.log(this.minutes+":"+this.seconds);
  }

  stopClick(){
    clearInterval(this.intervalId);
  }

  resetClick(){
    this.currentTime = 0;
  }

  // setTime(){
  //   this.intervalId = setInterval(function(){ 
  //     this.currentTime++; 
  //     if (this.currentTime % 10 ==0){
  //       this.currentTime = 0;
  //       this.currentMin++;
  //     }
  //     if (this.currentTime < 10){
  //       this.twoDigitsSec = "0"+this.currentTime;
  //     }else{
  //       this.twoDigitsSec = this.currentTime;
  //     }
  //     if(this.currentMin < 10){
  //       this.twoDigitsMin = "0"+this.currentMin;
  //     }else{
  //       this.twoDigitsMin = this.currentMin;
  //     }
  //     console.log(this.twoDigitsMin+":"+this.twoDigitsSec);
  //   }.bind(this), 1000);
  // }
  // getMinutes() {}
  // getSeconds() {}
  // twoDigitsNumber() {}
  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
}

const timer = new Chronometer();


