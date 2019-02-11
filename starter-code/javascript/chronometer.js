    class Chronometer {
        constructor(){
            this.currentTime=0;
            this.intervalId=0;
        }
        startClick() {

            this.intervalId=setInterval(()=>{ 
                console.log(this);
                this.currentTime+=1;   
                this.setTime();         
            }, 1000);

        };
        setMinutes(){
            return (Math.floor(this.currentTime/60));
        }
        setSeconds(){
            return(this.currentTime%60);
        }
        twoDigitsNumber(valor){
            if(valor < 10){
                return '0'+valor;
            }
                return valor.toString();
        }
        setTime(){
            var minutes=this.twoDigitsNumber(this.setMinutes());
            var seconds=this.twoDigitsNumber(this.setSeconds());

        }
        stopClick(){
            clearInterval(this.intervalId);
        }
        resetClick(){
            this.currentTime=0;
        }
    };
    