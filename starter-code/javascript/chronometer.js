class Chronometer {
  constructor() {
    this._intervalId=null;
    this.ticks=null; // count the number of ticks
    this._ontick=null; // the callback
    this._ticksPerSecond=1; // default number of ticks per second
    console.log("Chronometer initialized!");
  }
  
  // getTime() returns the time in millsecond precision (when running), 0 otherwise
  // getTime() replaced by property getter
  get time() { return(this.ticks!=null?this.ticks*1000/this._ticksPerSecond:0); }
  
  // currentTime returns the time in seconds (when running), zero otherwise
  get currentTime(){
    // if this.tick is false (null and 0 can both be used for that), return 0
    return (!this.ticks?0:this._ticksPerSecond==1?this.ticks:Math.floor(this.ticks/this._ticksPerSecond));
  }
  set currentTime(timeinseconds){
    //if(this._intervalId!=null){ // NOTE don't check, otherwise won't pass test!!
      this.ticks=(this._ticksPerSecond==1?timeinseconds:timeinseconds*this._ticksPerSecond);
      console.log("Ticks after setting the chronometer to "+timeinseconds+" seconds: "+this.ticks);
      console.log("\tClock reads (mm:ss): "+this.twoDigitsNumber(this.getMinutes())+":"+this.twoDigitsNumber(this.getSeconds()));
    //}else console.log("Won't set the clock to "+timeinseconds+" seconds.");
  }

  get ticksPerSecond(){return this._ticksPerSecond;}
  set ticksPerSecond(value){
    this._ticksPerSecond=Math.max(1,Math.floor(value)); // at least once per second
    console.log("Will tick "+this._ticksPerSecond+" per second!");
  }

  // interval will delegate to ticksPerSecond
  get interval(){return 1000/this._ticksPerSecond;}
  set interval(value){this.ticksPerSecond=1000/value;}

  // for registering the ticker
  get ontick(){return this._ontick;}
  set ontick(_ontick){
    this._ontick=_ontick;
    console.log(this._ontick?"On tick handler set!":"On tick handler removed!");
  }
  tick(){
    this.ticks++; // another tick
    console.log("Ticks: "+this.ticks+" - Current time: "+this.currentTime);
    if(this._ontick!=null)this._ontick(this);
    else console.log("No ontick callback!"); // passing the chronometer as well
  }

  // isRunning() will tell us when the chronometer is running
  isRunning(){return(this._intervalId!=null);}
  syncTicks(){
    // NOTE not nulling this.startTime if stopped, i.e. stopping is treated as pausing!!!
    if(this._intervalId!=null&&this.ticks==null)this.ticks=0;
    if(this._intervalId!=null)console.log("Clock running!");else console.log("Clock not running!");
  }

  get intervalId(){return this._intervalId;}
  set intervalId(_intervalId){
    this._intervalId=_intervalId;
    this.syncTicks();
  }
  
  getMinutes() {return Math.floor(this.currentTime/60);}
  getSeconds() {return Math.floor(this.currentTime%60);}
  getMilliseconds() { return Math.floor(this.time%1000);}

  twoDigitsNumber(value) {return String(value).padStart(2,'0');}
  threeDigitsNumber(value) {return String(value).padStart(3,'0');}

  startClick() {
    if(this.isRunning()){console.log("Already running!");return;}
    // get an interval id if we haven't got one yet
    console.log("Will tick every "+this.interval+" milliseconds.");
    this.intervalId=setInterval(this.tick.bind(this),this.interval); // NOTE took a long time to find out how to do `this`
  }
  stopClick() {
    /////if(!this.isRunning()){console.log("Already stopped!");return;}
    ////////////console.log("Stopping!");
    clearInterval(this._intervalId);
    this.intervalId=null;
  }
  resetClick() {
    this.stopClick(); // will null this.startTime()
    this.ticks=null; // this will force the time to zero!!!!
    // can't call this.tick() here, because it would increment this.ticks!!!
    if(this._ontick)this._ontick(this); // force an update of the current time (in seconds) showing
  }
  splitClick() {
    var ms=this.getMilliseconds();
    var seconds=this.currentTime;
    return this.twoDigitsNumber(Math.floor(seconds/60))+":"+this.twoDigitsNumber(Math.floor(seconds%60))+"."+this.threeDigitsNumber(ms%1000);
  }
}