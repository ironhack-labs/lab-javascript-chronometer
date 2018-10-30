var divHours = document.getElementById("hours");
var divMinutes = document.getElementById("minutes");
var divSeconds = document.getElementById("seconds");
var chronometer = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    start: function(){ //remember the scope of "this"

        chronometer.seconds += 1;

        divHours.innerHTML = chronometer.hours;
        divMinutes.innerHTML = chronometer.minutes;
        divSeconds.innerHTML = chronometer.seconds;
        
       if(chronometer.seconds == 60){
            chronometer.seconds = 0;
            chronometer.minutes++;
        }
       if(chronometer.minutes == 60 && chronometer.seconds == 60){
            chronometer.hours++;
            chronometer.seconds = 0;
            chronometer.minutes = 0;
        }  
    },
     //aqui pa parar el intervalo.
    reference: {},

    restart: function(){ //it doesnt execute the function startC again
        clearInterval(chronometer.reference);
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0; 
        document.getElementById("hours").innerHTML = this.hours.toString();
        document.getElementById("minutes").innerHTML = this.minutes.toString();
        document.getElementById("seconds").innerHTML = this.seconds.toString(); //reference error but executes until here alright
        chronometer.startC();
    },
    stop: function(){ //this function works
        clearInterval(chronometer.reference);   
        document.getElementById("hours").innerHTML = this.hours.toString();
        document.getElementById("minutes").innerHTML = this.minutes.toString();
        document.getElementById("seconds").innerHTML = this.seconds.toString();

    },
    whereYouWant: function(){ //this function works

        var inputHours = document.createElement("input");
        var inputMinutes = document.createElement("input");
        var inputSeconds = document.createElement("input");
        var accept = document.createElement("button");
        var acceptText = document.createTextNode("Start");
        var secondsInput = [];
        var acceptValue;

        accept.appendChild(acceptText);
        accept.id = "Hello";

        document.body.appendChild(inputHours);
        document.body.appendChild(inputMinutes);
        document.body.appendChild(inputSeconds);
        document.body.appendChild(accept);

        secondsInput = document.getElementsByTagName("input");
        acceptValue = document.getElementById("Hello");

        acceptValue.onclick = function(){
            divHours.innerHTML = secondsInput[0].value;
            divMinutes.innerHTML = secondsInput[1].value;
            divSeconds.innerHTML = secondsInput[2].value;

            chronometer.hours = parseInt(secondsInput[0].value);
            chronometer.minutes = parseInt(secondsInput[1].value);
            chronometer.seconds = parseInt(secondsInput[2].value);
        }

    },
    startC: function(){ //this works
        chronometer.reference = setInterval(chronometer.start, 1000);
    }

}

