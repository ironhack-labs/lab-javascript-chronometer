var chronometer = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    divHours: document.getElementById("hours").innerHTML,
    divMinutes: document.getElementById("minutes").innerHTML,
    divSeconds: document.getElementById("seconds").innerHTML,
    //algo esta mal en la declaracion
    start: function(){

        this.seconds++;
        this.divHours = this.hours.toString();
        this.divMinutes = this.minutes.toString();
        this.divSeconds = this.seconds.toString();

        document.getElementById("hours").innerHTML = divHours;
        document.getElementById("minutes").innerHTML = divMinutes;
        document.getElementById("seconds").innerHTML = divSeconds;

        if(this.seconds == 60){
            this.seconds = 0;
            this.minutes++;
        }
        else if(minutes == 60 && seconds == 60){
            this.hours++;
            this.seconds = 0;
            this.minutes = 0;
        }
        
    },
     //aqui pa parar el intervalo.
    reference: {},

    stop: function(){
        clearInterval(chronometer.reference);
        this.divHours.innerHTML = this.hours.toString();
        this.divMinutes.innerHTML = this.minutes.toString();
        this.divSeconds.innerHTML = this.seconds.toString();
    },

    whereYouWant: function(){

        var inputHours = document.createElement("input");
        var inputMinutes = document.createElement("input");
        var inputSeconds = document.createElement("input");
        
        
        document.body.appendChild(inputHours);
        document.body.appendChild(inputMinutes);
        document.body.appendChild(inputSeconds);
        
        this.inputHours.onChange = function(){this.divHours = this.inputHours.value;};
        this.inputMinutes.onChange = function(){this.divMinutes = this.inputMinutes.value;};
        this.inputSeconds.onChange = function(){this.divSeconds = this.inputSeconds.value;};
    },
    startC: function(){
        chronometer.reference = setInterval(chronometer.start(), 1000);
    }

}

