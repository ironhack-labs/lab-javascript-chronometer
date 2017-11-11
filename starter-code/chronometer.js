function Chronometer() {
    this.startClick = function(){
        leftBut = document.getElementById("btnLeft");
        leftBut.innerHTML = "STOP";
        leftBut.setAttribute('class','btn stop');
        rightBut = document.getElementById("btnRight");
        rightBut.innerHTML = "SPLIT";
        rightBut.setAttribute('class','btn split');
    };
    this.stopClick = function(){
        leftBut = document.getElementById("btnLeft");
        leftBut.innerHTML = "START";
        leftBut.setAttribute('class','btn start');
        rightBut = document.getElementById("btnRight");
        rightBut.innerHTML = "RESET";
        rightBut.setAttribute('class','btn reset');
    };

}