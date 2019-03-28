//implémetation de la class Chronometer
class Chronometer{
    constructor(){
        this.currentTime = 0; 
        this.intervalId = null; 
    };

//La valeur d'une propriété peut être une fonction, auquel cas la propriété peut être appelée « méthode »
    startClick(){
        var identifier = set interval (function(){
            this.currentTime++;
        }, 1000);
        this.intervalId = identifier; 
    }

    getMinutes(){
        if(this.currentTime === 0){
            return 0;
        } else {
            let minutes = Math.trunc(this.currentTime / 60)
            return minutes;
        }
    }

    getSeconds() {
        if (this.currentTime === 0) {
          return 0;
        } else {
          let seconds = this.currentTime % 60;
          return seconds;
        }
    
    }

    twoDigitsNumber(time){
        if (time === 0){
            return '00';
        } else if (time < 0){
            return '0' + time; 
        }
    }

    stopClick(){
        clearInterval(this.intervalID);
    }

    resetClick(){
        this.currentTime = 0;
    }

    splitClick(){
        var sliplC = 0;
        return this.getMinutes() + ":" + this.getSeconds();
    }
}

const c = new Chronometer();
c.startClick();
