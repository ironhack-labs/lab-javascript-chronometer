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
        
    
    }   

        Chronometer.prototype.startClick = function(){
        
                var that = this;
                this.leftBut.innerHTML = "STOP";
                this.leftBut.setAttribute('class','btn stop');
                this.rightBut.innerHTML = "SPLIT";
                this.rightBut.setAttribute('class','btn split');
                this.currentMinDec = 0;
                this.currentMinUn = 0;
                this.currentSecDec = 0;
                this.currentSecUn = 0;
                this.id = setInterval( function() {
                    that.secondsUnits();
                },1000);
            };
        
        Chronometer.prototype.stopClick = function(){
        
                clearInterval(this.id);
                this.leftBut.innerHTML = "START";
                this.leftBut.setAttribute('class','btn start');
                this.rightBut.innerHTML = "RESET";
                this.rightBut.setAttribute('class','btn reset');
            };
    
        Chronometer.prototype.secondsCen = function(){
    
            if(this.currentSecDec<5){
                ++this.currentSecDec;
                this.secDec.innerHTML = this.currentSecDec;
            }
            else{
                this.currentSecDec = 0;
                this.secDec.innerHTML = this.currentSecDec;
                this.minUnits();
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
                    this.secondsCen();
                }


        };

        Chronometer.prototype.resetClick = function(){

            this.secCen.innerHTML = 0;
            this.minCen.innerHTML = 0;
            this.secDec.innerHTML = 0;
            this.minDec.innerHTML = 0;
            clearInterval(this.id);
        };

        Chronometer.prototype.splitClick = function(){
            var that = this;
            var list = document.getElementById('split-list');
            var node = document.createElement("li");  
            var value = this.currentMinDec+""+this.currentMinUn+":"+this.currentSecDec+""+this.currentSecUn;               // Create a <li> node
            var textnode = document.createTextNode(value);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            list.appendChild(node);
                 // Append <li> to <ul> with id="myList"
        };
    
      