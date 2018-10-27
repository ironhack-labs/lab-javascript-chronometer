// class Chronometer {
//     constructor() {
//         this.currentTime = 0;
//         this.intervalId = 0;
//     }
// }

class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }

    startClick() {
        var chronometer = this;
        this.intervalId = setInterval(function() {
            chronometer.currentTime += 1;
            chronometer.setTime();
        }, 1000);
    }
//way 2
    // startClick() {
    //     this.intervalId = setInterval(function() {
    //         this.currentTime += 1;
    //     }.bind(this), 1000);
    // }  

    setMinutes() {
        return Math.floor(this.currentTime/ 60);
    }

    setSeconds() {
        return this.currentTime % 60;
    }

    twoDigitsNumber(number) {
        if(number < 10) {
            number = "0" + number;
        }else{
            return number + "";
        }
        return number
    }
//way 2 return number < 199 ? `0${number}` : String(number)

    setTime(){
        var minutes = this.twoDigitsNumber(this.setMinutes())
        var seconds = this.twoDigitsNumber(this.setSeconds())
        return [minutes, seconds]
    }

    stopClick() {
        clearInterval(this.intervalId)
    }

    resetClick() {
        return this.currentTime = 0
    }

    splitClick() {

    }
} 

