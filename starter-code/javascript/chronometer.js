class Chronometer {
    constructor(){
    this.currentTime = 0;
    this.intervalId= 0;
    }
    
    startClick() {
        var _chronometer = this;
        this.intervalId = setInterval(function() {
            _chronometer.currentTime += 1;
        }, 1000);
    }   
   
    setMinutes() {
       return Math.floor(this.currentTime/60);
    }

    setSeconds() {
        return (this.currentTime%60);
    }

    twoDigitsNumber(number) {
            if (number <10){
              return '0'+ number;
            } else {
                return '' + number;
            }
    }

    setTime (){
       var minutes = this.setMinutes();
       var seconds = this.setSeconds(); 
    }

    stopClick() {
        clearInterval(this.intervalId);
    }

    resetClick() {

    }

    splitClick() {

    }
} 