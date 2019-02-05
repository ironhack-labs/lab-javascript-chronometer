// Constructor
function Chronometer() {
    this.currentTime = 0,
    this.minutes = 0,
    this.seconds = 0,
    this.miliSeconds = 0;
    // Function, declaring what will happen when Start button will be clicked
    this.startClick = function() {
            this.miliSec();
            this.interval = setInterval(() => {
            this.currentTime++;
            this.seconds = this.currentTime % 60;
            if(this.currentTime % 60 == 0) {
                this.minutes++;
            };
            secUni.html(this.seconds % 10);
            secDec.html(Math.floor(this.seconds / 10) % 10);
            minUni.html(this.minutes % 10);
            minDec.html(Math.floor(this.minutes / 10) % 10);
            if(this.minutes == 60) {
                this.resetClick();
            }
        }, 1000);
    },
    
    // Milisecond function
    this.miliSec = function() {
        setInterval(() => {
            this.miliSeconds++;
            milUni.html(this.miliSeconds % 10);
            milDec.html(Math.floor(this.miliSeconds / 10) % 10);
        }, 10);
    },
    // Function, declaring what will happen when Reset button will be clicked
    this.resetClick = () => {        
        this.currentTime = 0;
        this.minutes = 0
        secUni.html(this.currentTime);
        minUni.html(this.minutes);
    }
    // Function, declaring what will happen when Stop button will be clicked
    this.stopClick = () => {
        clearInterval(this.interval);
    }
}