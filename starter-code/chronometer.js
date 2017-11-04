/*that will contain our Chronometer object with the following methods:

startClick, that will be triggered when the left button is clicked while the
 chronometer is stopped. 




stopClick, that will be triggered when the left button is clicked while the 
chronometer is running. In this iteration, this method has to:
Set the btnLeft button with the text START, and the class btn start.
Set the btnRight button with the text RESET, and the class btn reset.
In the main.js file, create a new instance of the Chronometer object.
Create the necessary code in the main.js to call the Chronometer startClick 
method if the button has the start class, or the stopClick method if the button has 
the stop class applied.
*/

function Chronometer(){
    this.btnStart = "start";
    this.btnReset = 'reset';

    $('#btnLeft').click(this.startClick)   
    $('#btnRight').click(this.resetClick)         
};

Chronometer.prototype.startClick = function(){
   if (this.btnStart == 'start') {
        $("#btnLeft").text("Stop")
        this.btnStart = 'Stop'
        var temp =0;
            setInterval(function() {
                for (i=0,i<=60,i++) {
                $('').text(i)
                }
    },1000);
                
                
                if (temp<=60){
                temp +=1;
                console.log(temp);}    
                else {temp = 0
                temp +=1}

       
   }
   else {
        this.btnStart = 'start';
        $("#btnLeft").text("Start");
   }
  
   $("#btnLeft").toggleClass('start');
   $("#btnLeft").toggleClass('stop');
   
}

Chronometer.prototype.resetClick = function(){
    if (this.btnReset == 'reset') {
        $("#btnRight").text("Split")
        this.btnReset = 'split'
   }
   else {
        this.btnReset = 'reset';
        $("#btnRight").text('reset');
   }
  
 
   $("#btnRight").toggleClass('split');
   $("#btnRight").toggleClass('reset');
    
}


