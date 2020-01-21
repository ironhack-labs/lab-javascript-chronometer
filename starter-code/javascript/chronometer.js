class Chronometer {
  constructor() {

    this.currentTime = 0;
    this.intervalId = setInterval(this.startClick, 1000);
  }
     startClick() {

     setInterval(() => {

       this.currentTime++;

      },1000);

     }
  getMinutes() {

    

    return  Math.floor(this.currentTime/60);


  }
  getSeconds() {

    return Math.floor(this.currentTime % 60);

  }

  
  twoDigitsNumber(value) {

    let size = value;
    // let size = "0" + value;

    if(size < 10){

     return  "0" + size;

    }

    return value.toString();
  }

  // }


  stopClick() {


    clearInterval(this.intervalId);



  }
  resetClick() {

    clearInterval(this.intervalId);
  }

  
  // splitClick() {}
} 
  