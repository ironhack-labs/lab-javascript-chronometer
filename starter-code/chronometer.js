function Chronometer() {
    this.currentMinDec = 0;
    this.currentMinUn = 0;
    this.currentSecDec = 0;
    this.currentSecUn = 0;
    this.leftBut = document.getElementById("btnLeft");
    this.rightBut = document.getElementById("btnRight");
    this.minCen = document.getElementById("minCen");
    this.minDec = document.getElementById("minDec");
    this.secCen = document.getElementById("secCen");
    this.secDec = document.getElementById("secDec");  
    
    this.startClick = function(){
        this.leftBut.innerHTML = "STOP";
        this.leftBut.setAttribute('class','btn stop');
        this.rightBut.innerHTML = "SPLIT";
        this.rightBut.setAttribute('class','btn split');
        setInterval(this.secondsUnits,1000);
    };
    this.stopClick = function(){
        this.currentMinDec = 0;
        this.currentMinUn = 0;
        this.currentSecDec = 0;
        this.currentSecUn = 0;
        this.leftBut.innerHTML = "START";
        this.leftBut.setAttribute('class','btn start');
        this.rightBut.innerHTML = "RESET";
        this.rightBut.setAttribute('class','btn reset');
    };

    this.secondsUnits = function(){
        if(this.currentSecUn<9){
            ++this.currentSecUn;
            this.secCen.innerHTML = this.currentSecUn;
        }
        else{
            this.currentSecUn=0;
            this.secondsDecs;
        }
    }

    this.secondsDecs = function(){
        if(this.currentSecDec<6){
            ++this.currentSecUn;
            this.secDec.innerHTML = this.currentSecDec;
        }
        else{
            this.currentSecUn = 0;
            this.minUnits;
        }
    }

    this.minUnits = function(){
        if(this.currentMinUn<9){
            ++this.currentMinUn;
            this.minCen.innerHTML = this.currentMinUn;
        }
        else{
            this.currentMinUn = 0;
            ++this.currentMinDec;
            this.minDec.innerHTML = this.currentMinDec;
        }
    }

}







