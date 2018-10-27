//Constructor
class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;

    }

    startClick() {
        this.intervalId = setInterval(function () {
            this.currentTime += 1;
            this.setTime()
            console.log(this.currentTime)
        }.bind(this), 1000);

    }

    setMinutes() {
        return Math.floor(this.currentTime / 60);
    }

    setSeconds() {
        return this.currentTime % 60;
    }

    twoDigitsNumber(number) {
        if (number < 10) {
            number = "0" + number;   
        }else{
            return number + "";
        }
        return number
    }

    setTime(){
     var minutes = this.twoDigitsNumber(this.setMinutes())
     var seconds = this.twoDigitsNumber(this.setSeconds())
     return [minutes, seconds] 
    }
    stopClick(){
        clearInterval(this.intervalId)
    }
    resetClick(){
        this.currentTime = 0;
    }
}



//document.getElementById("sphere").innetText = "60" there I get the element