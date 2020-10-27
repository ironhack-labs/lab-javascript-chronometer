describe("Chronometer", () => {
  let chronometer;

  beforeEach(() => {
    chronometer = new Chronometer();
  });

  describe("should be a class", () => {
    it("should create the chronometer object", () => {
      expect(typeof Chronometer).toBe("function");
    });
    it("should not receive any arguments", () => {
      expect(Chronometer.length).toEqual(0);
    });

    it("should have a `currentTime` property and its value should be set to 0 at the beginning", () => {
      expect(chronometer.currentTime).toBeDefined();
      expect(chronometer.currentTime).toEqual(0);
    });

    it("should have a `intervalId` property and its value should be set to 0 at the beginning", () => {
      expect(chronometer.intervalId).toBeDefined();
      expect(chronometer.intervalId).toEqual(0);
    });
  });

  describe("startClick method", () => {
    beforeEach(() => {
      jasmine.clock().install();
      chronometer.startClick();
    });

    afterEach(() => {
      jasmine.clock().uninstall();
    });

    it("should be declared", () => {
      expect(typeof chronometer.startClick).toEqual("function");
    });

    it("should increment by 1 the currentTime property on every 1 second interval", () => {
      jasmine.clock().tick(1000);
      expect(chronometer.currentTime).toEqual(1);
    });

    it("after 3 seconds, currentTime should be 3", () => {
      jasmine.clock().tick(3000);
      expect(chronometer.currentTime).toEqual(3);
    });
  });

  describe("getMinutes method", () => {
    it("should be declared", () => {
      expect(typeof chronometer.getMinutes).toEqual("function");
    });

    it("should return a number", () => {
      chronometer.currentTime = 65;
      expect(typeof chronometer.getMinutes()).toEqual("number");
    });

    it("should return a number without decimals", () => {
      chronometer.currentTime = 65;
      expect(chronometer.getMinutes() % 1).toEqual(0);
    });

    it("should return the currentTime in minutes", () => {
      chronometer.currentTime = 65;

      expect(chronometer.getMinutes()).toEqual(1);
    });

    it("should return 0 when the currentTime counting haven't started", () => {
      chronometer.currentTime = 0;

      expect(chronometer.getMinutes()).toEqual(0);
    });

    it("should return the currentTime in minutes even for laaaarge numbers", () => {
      chronometer.currentTime = 50210;

      expect(chronometer.getMinutes()).toEqual(836);
    });
  });

  describe("getSeconds method", () => {
    it("should be declared", () => {
      expect(typeof chronometer.getSeconds).toEqual("function");
    });

    it("should return a number", () => {
      chronometer.currentTime = 3;
      expect(typeof chronometer.getSeconds(0)).toEqual("number");
    });

    it("should return 0 when the currentTime counting haven't started", () => {
      chronometer.currentTime = 0;
      expect(chronometer.getSeconds()).toEqual(0);
    });

    it("should return the seconds of the currentTime", () => {
      chronometer.currentTime = 15;

      expect(chronometer.getSeconds()).toEqual(15);
    });

    it("should return the seconds portion of the currentTime that remains after removing the minutes", () => {
      chronometer.currentTime = 115;

      expect(chronometer.getSeconds()).toEqual(55);
    });
  });

  describe("twoDigitsNumber method", () => {
    it("should be declared", () => {
      expect(typeof chronometer.twoDigitsNumber).toEqual("function");
    });

    it("should return a string", () => {
      expect(typeof chronometer.twoDigitsNumber(7)).toEqual("string");
    });

    it("should always return a string of length 2", () => {
      expect(chronometer.twoDigitsNumber(7).length).toEqual(2);
    });

    it("should return '00' when the value is 0", () => {
      expect(chronometer.twoDigitsNumber(0)).toEqual("00");
    });

    it("should return '15' when the value is 15", () => {
      expect(chronometer.twoDigitsNumber(15)).toEqual("15");
    });

    it("Should return '03' when the value is 3", function () {
      expect(chronometer.twoDigitsNumber(3)).toEqual("03");
    });
  });

  describe("stopClick method", () => {
    it("should be declared", () => {
      expect(typeof chronometer.stopClick).toEqual("function");
    });

    it("should clear the intervalId", () => {
      spyOn(window, "clearInterval");
      chronometer.stopClick();

      expect(clearInterval).toHaveBeenCalled();
    });
  });

  describe("resetClick method", () => {
    it("should be declared", () => {
      expect(typeof chronometer.resetClick).toEqual("function");
    });

    it("should reset the currentTime property", () => {
      chronometer.currentTime = 5;
      chronometer.resetClick();

      expect(chronometer.currentTime).toEqual(0);
    });
  });

  describe("splitClick method", () => {
    it("should be declared", () => {
      expect(typeof chronometer.splitClick).toEqual("function");
    });

    it("should return valid format with minutes and seconds", () => {
      let min = chronometer.getMinutes();
      let sec = chronometer.getSeconds();

      if (min < 10 && sec < 10) {
        expect(chronometer.splitClick()).toEqual(`${0}${min}:${0}${sec}`);
      } else if (min < 10 && sec > 10) {
        expect(chronometer.splitClick()).toEqual(`0${min}:${sec}`);
      } else if (min > 10 && sec < 10) {
        expect(chronometer.splitClick()).toEqual(`${min}:0${sec}`);
      } else {
        expect(chronometer.splitClick()).toEqual(`${min}:${sec}`);
      }
    });
  });

  // comment the previous test and uncomment the following when working on the bonus iteration
  // describe('splitClick method', () => {
  //   it('should be declared', () => {
  //     expect(typeof chronometer.splitClick).toEqual('function');
  //   });

  //   it('should return valid format with minutes, seconds and milliseconds', () => {
  //     let min = chronometer.getMinutes();
  //     let sec = chronometer.getSeconds();
  //     let milli = chronometer.getMilliseconds();
  //     if (min < 10) {
  //       expect(chronometer.splitClick()).toEqual(`${0}${min}:${0}${sec}:${0}${milli}`);
  //     } else {
  //       expect(chronometer.splitClick()).toEqual(`${min}:${sec}:${milli}`);
  //     }
  //   });
  // });
});
