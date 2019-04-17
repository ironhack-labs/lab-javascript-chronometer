function Chronometer() {
  this.decimalSecs = 0;
  this.decimals = 0;
  this.countSec = 0;
  this.seconds = 0;
  this.countMin = 0;
  this.minutes = 0;
  this.currentTime = 0;

  this.startClick = () => {
      this.interval = setInterval(() => {
          this.decimalSecs++;
          
          if(this.decimalSecs % 10 === 0) {
              this.countSec++;
              this.setSeconds();
              this.decimalSecs = 0;
          } else if (this.countSec % 60 === 0 && this.countSec != 0   ) {
              this.minutes++;
              this.setMinutes();
          } else {
              this.setDecimals();
          }
      }, 100);
  }
  
  this.setMinutes = () => {
      this.decimalSecs = 0;
      this.setDecimals();
      this.countSec = 0;
      this.seconds = '00';
      this.setSeconds();
      this.minutes = this.twoDigitsNumber(this.minutes);
      let minDec =  document.getElementById('minDec');
      minDec.innerHTML = this.minutes[0];
      let minUnit = document.getElementById('minUni');
      minUnit.innerHTML = this.minutes[1];
  }

  this.setTime = () => {
      // let minutes = this.twoDigitsNumber(this.minutes).split("");
      
      // let seconds = this.twoDigitsNumber(this.seconds).split("");
      

      // return [minutes, seconds]
  }

  this.setSeconds = () => {
      this.seconds = this.twoDigitsNumber(this.countSec);
      let secUni = document.getElementById('secUni');
      secUni.innerHTML = this.seconds[1];
      let secDec = document.getElementById('secDec');
      secDec.innerHTML = this.seconds[0];
  }

  this.setDecimals = () => {
      this.decimals = this.twoDigitsNumber(this.decimalSecs);
      let milUni = document.getElementById('milUni');
      milUni.innerHTML = this.decimals[1];
      let milDec = document.getElementById('milDec');
      milDec.innerHTML = this.decimals[0];
  }

  this.twoDigitsNumber = (num) => {
    return (num < 10 ? '0' : '') + num; // '01' || 10 11 12 
  }
  
  this.stopClick = () => {
      clearInterval(this.interval);
  }
  
  this.resetClick = () => {
      this.decimalSecs = 0;
      this.countSec = 0;
      this.seconds = '00';
      this.setSeconds();
      this.minutes = '00';
      this.setMinutes();
      let itemList = document.getElementById('splits');
      let items = itemList.getElementsByTagName('li');
      
      for(let i = items.length - 1; i >= 0; i--) {
          itemList.removeChild(items[i]);
      }
  }

  this.splitClick = () => {
      
      split = `${this.minutes}:${this.seconds}:${this.decimals}`;
      let splitList = document.getElementById('splits');
      let item = document.createElement('li');
      item.innerText = split;
      splitList.appendChild(item);

  }

  this.changeButtonClass = (caseBtn) => {
      
  
      switch(caseBtn) {
          
          case 'START':
              btnLeft.classList.toggle('stop');
              btnLeft.innerHTML = 'STOP';
              btnRight.classList.toggle('split');
              btnRight.innerHTML = 'SPLIT';
              // btnRight.toggleAttribute('disabled');
              this.startClick();
          break;
  
          case 'STOP':
              btnLeft.classList.toggle('stop');
              btnLeft.innerHTML = 'START';
              btnRight.classList.toggle('split');
              btnRight.innerHTML = 'RESET';
              this.stopClick();
          break;

          case 'RESET':
              this.resetClick();
          break;

          case 'SPLIT':
              this.splitClick();
          break;
  
      }
  }

}