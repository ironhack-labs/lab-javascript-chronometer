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
            this.currentMinDec = 0;
            this.currentMinUn = 0;
            this.currentSecDec = 0;
            this.currentSecUn = 0;
            this.id = setInterval(this.secondsUnits,1000);
        };
    
        this.stopClick = function(){
    
            clearInterval(this.id);
            this.leftBut.innerHTML = "START";
            this.leftBut.setAttribute('class','btn start');
            this.rightBut.innerHTML = "RESET";
            this.rightBut.setAttribute('class','btn reset');
        };
    
    }   
    
        Chronometer.prototype.secondsCen = function(){
    
            if(this.currentSecDec<5){
                ++this.currentSecDec;
                this.secDec.innerHTML = this.currentSecDec;
            }
            else{
                this.currentSecDec = 0;
                this.secDec.innerHTML = this.currentSecDec;
                this.minUnits;
            }
        };
    
        Chronometer.prototype.minUnits = function(){
    
            if(this.currentMinUn<9){
                ++this.currentMinUn;
                this.minCen.innerHTML = this.currentMinUn;
            }
            else{
                this.currentMinUn = 0;
                this.minCen.innerHTML = this.currentMinUn;
                ++this.currentMinDec;
                this.minDec.innerHTML = this.currentMinDec;
            }
        };
    
        Chronometer.prototype.secondsUnits = function(){
                if(this.currentSecUn<9){
                    ++this.currentSecUn;
                    this.secCen.innerHTML = this.currentSecUn;
                }
                else{
                    this.currentSecUn=0;
                    this.secCen.innerHTML = this.currentSecUn;
                    this.secondsCen;
                }
        };
    
      