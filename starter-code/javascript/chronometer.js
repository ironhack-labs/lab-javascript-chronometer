
class Chronometer {
    constructor() {
        this.currentTime = '0';
        this.intervalId = "";
        this.seconds = '0';
        this.minutes = '0';
        this.status = "STOP";
        this.splitTime = 0;
        this.milliSeconds = 0;
    }
    startClick(){
        this.startMilliSeconds()
        this.status = "START";
        btnLeft.innerHTML = "STOP";
        btnRight.innerHTML = "SPLIT";
        this.setHTML();
        this.currentTime ++;
        this.intervalRef = setInterval(()=>{
            this.setSeconds();
            this.currentTime !==0 && this.currentTime % 60 === 0 ? this.minutes++ : "";
            this.setHTML(); 
            this.currentTime ++;           
        }, 1000)
    }
    startMilliSeconds(){
        this.milliIntervalRef = setInterval(()=>{
        this.milliSeconds ++;   
        this.setMilliSeconds();
        },10)    
    }
    stopClick(){
        this.status = "STOP";
        btnRight.innerHTML = "RESET"
        btnLeft.innerHTML = "START";
        clearInterval(this.intervalRef);
        clearInterval(this.milliIntervalRef);
    }
    resetClick(){
        this.currentTime = '0';
        this.milliSeconds = '0';
        this.setMilliSeconds();
        this.setSeconds();
        this.setMinutes();
        this.setHTML();
    }
    setHTML(){
        secUni.innerHTML = this.seconds % 10;
        secDec.innerHTML = Math.floor(this.seconds / 10) % 10;
        minUni.innerHTML = this.minutes % 10; 
        minDec.innerHTML = Math.floor(this.minutes / 10) % 10;
    }
    setMilliSeconds(){
        milUni.innerHTML = this.milliSeconds % 10;
        milDec.innerHTML = Math.floor(this.milliSeconds / 10) % 10;
    } 
    setSeconds(){
        this.seconds = this.currentTime % 60;
    }
    setMinutes() {
        this.minutes = this.currentTime !==0 && this.currentTime % 60 === 0 ? this.minutes++ : "";
    }
    printSplit(){
        this.splitTime = `${this.minutes > 9 ? this.minutes : '0' + this.minutes }:${this.seconds > 9 ? this.seconds : '0' + this.seconds}`
        splits.innerHTML += `<li>${this.splitTime}</li>`      
    }
}


