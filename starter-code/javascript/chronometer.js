class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=0;
    this.updateUI =0
  }

  startClick= () =>{
    const add1Second = ()=> { this.currentTime +=1;  }
    const updateSecUI = () => {
    updateSecondUni.textContent=this.twoDigitsNumber(this.getSeconds()).charAt(1);
    updateSecondDec.textContent=this.twoDigitsNumber(this.getSeconds()).charAt(0);
    updateMinuteUni.textContent=this.twoDigitsNumber(this.getMinutes()).charAt(1);
    updateMinuteDec.textContent=this.twoDigitsNumber(this.getMinutes()).charAt(0);
    updateMilUni.textContent = this.twoDigitsNumber(this.getMil()).charAt(1);
    updateMilDec.textContent = this.twoDigitsNumber(this.getMil()).charAt(0);
    }
    this.intervalId= setInterval (add1Second, 10);
    this.updateUI =setInterval(updateSecUI,10);
    //Button Start Clicked
    buttonStart.textContent="STOP";
    buttonStart.className="btn stop";
    buttonReset.textContent="SPLIT";
    buttonReset.className="btn split";
    buttonStop = document.querySelector('.btn.stop');
    buttonSplit = document.querySelector('.btn.split');
    buttonStop.onclick = this.stopClick;
    buttonSplit.onclick = this.splitClick;
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);}

  getSeconds() {
    return Math.floor(this.currentTime % 6000 /100);}

  getMil() {
    return this.currentTime%100 ;}
  
  twoDigitsNumber(number) {
    const newString = number.toString();
    return newString.length == 1 ? `0${newString}`: newString
  }
  stopClick=()=> {
    
    clearInterval(this.intervalId);
    buttonSplit.textContent="RESET";
    buttonSplit.className="btn reset";
    buttonReset.onclick = this.resetClick;

  }
  resetClick=()=> {
    this.currentTime =0;
    clearInterval(this.updateUI)
    updateSecondUni.textContent="0";
    updateSecondDec.textContent="0";
    updateMinuteUni.textContent="0";
    updateMinuteDec.textContent="0";
    updateMilUni.textContent = "0";
    updateMilDec.textContent = "0";
    olContainer.innerHTML='';
    buttonStop.textContent="START";
    buttonStop.className="btn start";
    buttonStart.onclick = this.startClick;
  }

  splitClick= () => {
      const element = `<li>${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMil())}`;
      olContainer.insertAdjacentHTML('beforeend',element)
  }
}