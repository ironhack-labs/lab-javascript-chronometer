class Chronometer {
  constructor() {
    this._interval=1000;
    this._intervalId=null;
    this._ontick=null; // no ticker yet registered
    this.startTime=null; // when the chronometer started
  }
  
  // getTime() returns the time in millsecond precision (when running), 0 otherwie
  getTime() { return(this.startTime?(new Date()).getTime()-this.startTime:0); }
  
  // currentTime returns the time in seconds (when running), zero otherwise
  get currentTime(){return(this.startTime?Math.floor(this.getTime())/1000:0);}

  get interval(){return this._interval;}
  set interval(value){this._interval=Math.max(1,value);}

  // for registering the ticker
  get ontick(){return this._ontick;}
  set ontick(_ontick){
    this._ontick=_ontick;
    console.log(this._ontick?"On tick handler set!":"On tick handler removed!");
  }
  tick(){
    //////console.log("Chronometer: ",this);
    // this.currentTime+=1000;
    if(this._ontick!=null)this._ontick(this);
    else console.log("No ontick callback!"); // passing the chronometer as well
  }

  // isRunning() will tell us when the chronometer is running
  isRunning(){return(this._intervalId!=null);}
  syncStartTime(){
    // NOTE not nulling this.startTime if stopped, i.e. stopping is treated as pausing!!!
    if(this._intervalId!=null){
      // NOTE only when we do not have a start date do we create a new start date
      if(this.startTime==null){
        this.startTime=new Date().getTime();
        /////console.log("New start time: "+this.startTime+".");
      }
    }
    // replacing: this.startTime=(this.intervalId!=null?new Date().getTime():null);
    if(this.startTime!=null)console.log("Start time: "+this.startTime+".");
    /////else console.log("No start time!");
  }

  get intervalId(){return this._intervalId;}
  set intervalId(_intervalId){
    this._intervalId=_intervalId;
    this.syncStartTime();
  }
  
  getMinutes() {return Math.floor(this.currentTime/60);}
  getSeconds() {return Math.floor(this.currentTime%60);}
  getMilliseconds() { return Math.floor(this.getTime()%1000);}

  twoDigitsNumber(value) {return String(value).padStart(2,'0');}
  threeDigitsNumber(value) {return String(value).padStart(3,'0');}

  startClick() {
    if(this.isRunning())return;
    // get an interval id if we haven't got one yet
    this.intervalId=setInterval(this.tick.bind(this),this._interval); // NOTE took a long time to find out how to do `this`
  }
  stopClick() {
    if(!this.isRunning())return;
    clearTimeout(this._intervalId);
    this.intervalId=null;
    // do NOT force a tick until resetClick() is called!!!
  }
  resetClick() {
    this.stopClick(); // will null this.startTime()
    this.startTime=null; // this will force the time to zero!!!!
    this.tick(); // force an update of the current time (in seconds) showing
  }
  splitClick() {
    var ms=this.getMilliseconds();
    var seconds=this.currentTime;
    return this.twoDigitsNumber(Math.floor(seconds/60))+":"+this.twoDigitsNumber(Math.floor(seconds%60))+"."+this.threeDigitsNumber(ms%1000);
  }
}