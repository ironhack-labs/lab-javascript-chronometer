// Constructor
function Chronometer() {
    this.currentTime = 0,
    this.minutes = 0,
    this.seconds = 0,
    this.miliSeconds = 0;

    this.startClick = function() {
            this.interval = setInterval(() => {
            this.currentTime++;
            this.seconds = this.currentTime % 60;
            if(this.currentTime % 60 == 0) {
                this.minutes++;
            };
            milUni.html(this.miliSeconds % 10);
            milDec.html(Math.floor(this.miliSeconds / 10) % 10);
            secUni.html(this.seconds % 10);
            secDec.html(Math.floor(this.seconds / 10) % 10);
            minUni.html(this.minutes % 10);
            minDec.html(Math.floor(this.minutes / 10) % 10);
        }, 1000);
    },

    this.resetClick = () => {        
        this.currentTime = 0;
        this.minutes = 0
        secUni.html(this.currentTime);
        minUni.html(this.minutes);
    }

    this.stopClick = () => {
        clearInterval(this.interval);
    }
}
