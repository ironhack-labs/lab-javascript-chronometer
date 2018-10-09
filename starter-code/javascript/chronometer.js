// Constructor

function Chronometer() {
    this.currentTime =0;
    this.intervalId=0;
}

Chronometer.prototype.timerHandler = function () {
    this.currentTime += 1;  // pour lancer le chronomètre
    console.log("Incrementing currentTime... new val: "
     + this.currentTime);
}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(this.timerHandler.bind(this),1000); //pour prendre compte de l'intervalle
    // this.intervalId = setInterval(GlobalTimerHandler,1000,this);

};

/*
Les étapes des étapes précédentes:
1/ call setInterval()
2/ 1 sec goes by
3/ callback function is called
4/ this goes to >> Mychro parameter
5/ run the function Globaltimer
6/ mychro.currentTime +=1
7/ Go back to step 2 
*/

//Ma version qui buggue
/* function GlobalTimeHandler (mychro){
    mychro.currentTime += 1;
}

//Chronometer.prototype.startClick = function () {
//   this.intervalId = setInterval (GlobalTimeHandler,1000,this);
};
*/



Chronometer.prototype.setMinutes = function () {
    return parseInt(this.currentTime/60); 
};

Chronometer.prototype.setSeconds = function () {
    return this.currentTime %60;
  
};

Chronometer.prototype.twoDigitsNumber = function () {
  
};

Chronometer.prototype.setTime = function () {

};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
    if (-1 != this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = -1;
    }
};

Chronometer.prototype.resetClick = function () {

};

Chronometer.prototype.splitClick = function () {

};
