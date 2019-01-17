// Constructor
 class Chronometer{
    constructor(){
    this.currentTime = 0;
    this.intervalId = 0;
}

startClick() {
    var that = this;
    that.intervalId = setInterval(function(){
      that.currentTime++;
      that.setTime();

  },1000);
};


setMinutes() {
    var min = 0;
    min = Math.floor(this.currentTime / 60); 
    return min;
};



setSeconds() {
    return this.currentTime % 60;
};


setMinutes () {
    var min = 0;
    min = Math.floor(this.currentTime / 60);
    return min;
};

twoDigitsNumber(num) {
    if(num<10){
        return '0' + num;
    }
    return num.toString();
  
};

setTime() {
    var sec = this.twoDigitsNumber(this.setSeconds())
    var min = this.twoDigitsNumber(this.setMinutes())
    return [sec, min];
};

// setMilliseconds () {

// };

stopClick() {
    clearInterval(this.intervalId);
  
};

resetClick () {
    this.currentTime = 0;

};
}

// var c = new Chronometer();
// // c.startClick();
// c.setMinutes();
// // console.log(this.currentTime++)
