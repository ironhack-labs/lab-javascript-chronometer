class Chronometer {
  constructor(intervalId) {
    this.minute=0;
    this.currentTime = 0;
    this.intervalId;
    this.seconds =0;

  }
  startClick() {

    this.intervalId = setInterval(() => {

      this.currentTime += 1;
      
      this.getMinutes();
    }, 1000);

  }
  getMinutes() {

    this.minute = Math.floor(this.currentTime / 60);
    return this.minute;

  }
  getSeconds() {

    this.seconds = this.currentTime - this.minute * 60;
    if(this.seconds == 60 ){

      this.seconds=0;
    }
    return this.seconds;

  }
   
   twoDigitsNumber(num) {

    let time = "";

    if(num >= 10){
    time += num;
    }else {
     time += `0${num}`;
    }
    return time;
   }



  stopClick() {
    
 clearInterval(this.intervalId);

  }
  resetClick() {

    this.currentTime =0;
  }



}