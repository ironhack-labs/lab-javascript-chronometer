describe('', () => {
  beforeEach(() => {
    chronometer = new Chronometer();
  });

  describe('constructor function', () => {
    it('should not receive any parameter', () => {
      expect(Chronometer.length).toEqual(0);
    });

    it('should declare a `currentTime` property', () => {
      expect(chronometer.currentTime).toBeDefined();
    });

    it('`currentTime` should be equal to 0 at the beginning', () => {
      expect(chronometer.currentTime).toEqual(0);
    });
  });

  describe('startClick function', () => {
    beforeEach(() => {
      jasmine.clock().install();
      chronometer.startClick();
    });

    afterEach(() => {
      jasmine.clock().uninstall();
    });

    it('should declare a startClick method', () => {
      expect(typeof chronometer.startClick).toEqual('function');
    });

    it('should declare an intervalId property as part of Chronometer', () => {
      expect(chronometer.intervalId).toBeDefined();
    });

    it('Set to intervalId a new setInterval', () => {
      expect(typeof chronometer.intervalId).toEqual('number');
    });

    it('should increment 1 to currentTime property on every 1 second interval', () => {
      jasmine.clock().tick(1000);
      expect(chronometer.currentTime).toEqual(1);
    });

    it('after 3 seconds, currentTime should be 3', () => {
      jasmine.clock().tick(3000);
      expect(chronometer.currentTime).toEqual(3);
    });
  });

  describe('getMinutes function', () => {
    it('should be declared', () => {
      expect(typeof chronometer.getMinutes).toEqual('function');
    });

    it('should return a number', () => {
      chronometer.currentTime = 65;
      expect(typeof chronometer.getMinutes()).toEqual('number');
    });

    it('should return a number without decimals', () => {
      chronometer.currentTime = 65;
      expect(chronometer.getMinutes() % 1).toEqual(0);
    });

    it('should return the currentTime in minutes', () => {
      chronometer.currentTime = 65;
      expect(chronometer.getMinutes()).toEqual(1);
    });

    it("Should return 0 when the currentTime haven't start", () => {
      chronometer.currentTime = 0;
      expect(chronometer.getMinutes()).toEqual(0);
    });

    it('should return the currentTime in minutes even for laaaarge numbers', () => {
      chronometer.currentTime = 50210;
      expect(chronometer.getMinutes()).toEqual(836);
    });
  });

  describe('getSeconds function', () => {
    it('should be declare', () => {
      expect(typeof chronometer.getSeconds).toEqual('function');
    });

    it('should return a number', () => {
      chronometer.currentTime = 3;
      expect(typeof chronometer.getSeconds(0)).toEqual('number');
    });

    it("should return 0 when the currentTime haven't start", () => {
      chronometer.currentTime = 0;
      expect(chronometer.getSeconds(0)).toEqual(0);
    });

    it('should return the seconds of the currentTime', () => {
      chronometer.currentTime = 15;
      expect(chronometer.getSeconds(0)).toEqual(15);
    });

    it('should return the seconds that remain after removing the minutes to the currentTime', () => {
      chronometer.currentTime = 115;
      expect(chronometer.getSeconds(1)).toEqual(55);
    });
  });

  describe('twoDigitsNumber function', () => {
    it('should be declare', () => {
      expect(typeof chronometer.twoDigitsNumber).toEqual('function');
    });

    it('should return a string', () => {
      expect(typeof chronometer.twoDigitsNumber(7)).toEqual('string');
    });

    it("Should return '00' when the value is 0", () => {
      expect(chronometer.twoDigitsNumber(0)).toEqual('00');
    });

    it("Should return '15' when the value is 15", () => {
      expect(chronometer.twoDigitsNumber(15)).toEqual('15');
    });

    it('should return a string of length 2', () => {
      expect(chronometer.twoDigitsNumber(7).length).toEqual(2);
    });

    it("Should return '03' when the value is 3", () => {
      expect(chronometer.twoDigitsNumber(3)).toEqual('03');
    });
  });

  describe('stopClick function', () => {
    it('should be declare', () => {
      expect(typeof chronometer.stopClick).toEqual('function');
    });

    it('should clear the intervalId', () => {
      spyOn(window, 'clearInterval');
      chronometer.stopClick();
      expect(clearInterval).toHaveBeenCalled();
    });
  });

  describe('resetClick function', () => {
    it('should be declare', () => {
      expect(typeof chronometer.resetClick).toEqual('function');
    });

    it('should clear the currentTime property', () => {
      chronometer.resetClick();
      expect(chronometer.currentTime).toEqual(0);
    });
  });
});
