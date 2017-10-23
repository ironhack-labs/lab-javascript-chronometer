function Chronometer () {
    var intervalId;
    
    this.started = false;
    this.seconds = 0;

    this.start = function () {
        this.started = true;
    };
    this.pause = function () {
        this.started = false;
    };

    this.stop = function(){
        clearTimeout(intervalId);
    };

    this.startCronometer = function() {   

        var innerScope = this;

        intervalId = setInterval (function() {
            innerScope.seconds++;

            document.getElementById("btnRight").setAttribute('class', 'btn split');
            
            var secondsDec = parseInt((innerScope.seconds % 60)/10);
            var secondsCen = parseInt(innerScope.seconds % 60);
            
           
            
            
            
            //document.getElementById("minDec").innerHTML = 
            //document.getElementById("minCen").innerHTML =
            document.getElementById("secDec").innerHTML = secondsDec;
            document.getElementById("secCen").innerHTML = secondsCen;
        }, 1000);
                        
    }
}

