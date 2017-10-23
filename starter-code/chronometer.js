function Chronometer() {

};

Chronometer.prototype.changeLeftButton = function () {
    var left = document.getElementById("btnLeft").classList;
    var leftButton = document.getElementById("btnLeft")

    if (left.contains("start")) {
        left.remove("start");
        leftButton.innerHTML = "STOP";
        
    } else {
        left.add("start");
    }
    if (left.contains("stop")) {
        left.remove("stop");
        leftButton.innerHTML = "START"
    } else {
        left.add("stop");
    }



}

Chronometer.prototype.changeRightButton = function () {
    var right = document.getElementById("btnRight").classList;
    var rightButton = document.getElementById("btnRight")

    if (right.contains("reset")) {
        right.remove("reset");
        rightButton.innerHTML = "SPLIT"
    } else {
        right.add("reset");
    }
    if (right.contains("split")) {
        right.remove("split");
        rightButton.innerHTML = "RESET";
        
    } else {
        right.add("split");
    }


    
    
}

Chronometer.prototype.startClick = function () {
    console.log("entro a Start click")
    this.changeLeftButton();
    this.changeRightButton();
    this.startChronometer();


}


Chronometer.prototype.startChronometer = function () {
    var time = document.getElementById("secCen");
   var number = time.innerHTML;
   number++;
   time.innerHTML = number;
}

