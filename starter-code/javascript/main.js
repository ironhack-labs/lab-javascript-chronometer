let chronometer = new Chronometer();
let btnLeft  = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let minDec  = document.getElementById('minDec');
let minUni  = document.getElementById('minUni');
let secDec  = document.getElementById('secDec');
let secUni  = document.getElementById('secUni');
let milDec  = document.getElementById('milDec');
let milUni  = document.getElementById('milUni');


chronometer.intervalId=0;



// Start/Stop Button
btnLeft.addEventListener('click', function () {
    switch (this.classList[1]) {
        case "start":
            this.innerHTML = "STOP";
            this.classList.remove("start");
            this.classList.add("stop");
            btnRight.innerHTML = "SPLIT";
            btnRight.classList.remove("reset");
            btnRight.classList.add("split");
            //chronometer.intervalID = 
            printTime();
            break;

        case "stop":
            this.innerHTML = "START";
            this.classList.remove("stop");
            this.classList.add("start");
            btnRight.innerHTML = "RESET";
            btnRight.classList.remove("split");
            btnRight.classList.add("reset");
            chronometer.stopClick();
            break;
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    switch (this.classList[1]) {
        case "reset":
            if(btnLeft.classList[1]==="start"){
            this.innerHTML = "SPLIT";
            this.classList.remove("reset");
            this.classList.add("split");
            btnLeft.innerHTML = "START";
            btnLeft.classList.remove("stop");
            btnLeft.classList.add("start");
            chronometer.currentTime = 0;
            clearSplits();
            printSeconds();
            printMinutes();
            }
            break;
        case "split":
            if(btnLeft.classList[1]==="start"){
                this.innerHTML = "RESET";
                this.classList.remove("split");
                this.classList.add("reset");
            }else{
                printSplit();
            }
            break;
    }

});

     function printTime() {
        chronometer.intervalId = setInterval(() => {
            chronometer.currentTime++;
            //chronometer.setTime();
            printSeconds();
            printMinutes();
        }, 1000);
        
     }

     function printMinutes() {
        minUni.innerHTML=(chronometer.twoDigitsNumber(chronometer.getMinutes()))[1];
        minDec.innerHTML=(chronometer.twoDigitsNumber(chronometer.getMinutes()))[0];
     }

     function printSeconds() {
        secUni.innerHTML=(chronometer.twoDigitsNumber(chronometer.getSeconds()))[1];
        secDec.innerHTML=(chronometer.twoDigitsNumber(chronometer.getSeconds()))[0];
        
     }

    

     function printSplit() {
       
        let list = document.createElement('li');
        let ol = document.getElementById('splits');
        list.setAttribute('id', 'li-splits');
        list.innerHTML = chronometer.twoDigitsNumber(chronometer.setMinutes())+':'+chronometer.twoDigitsNumber(chronometer.setSeconds());
        ol.appendChild(list);
     }

     function clearSplits() {
        let ol = document.getElementById('splits');
        while (ol.firstChild) {
            ol.removeChild(ol.firstChild);
        }
     }

      
    
    
    function setStopBtn() {
        
       
    }

    function setSplitBtn() {

    }

    function setStartBtn() {

     }

    function setResetBtn() {

    }