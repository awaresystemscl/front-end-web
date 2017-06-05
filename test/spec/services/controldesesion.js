'use strict';

describe('Service: controlDeSesion', function () {

  // load the service's module
  beforeEach(module('frontEndApp'));

  // instantiate service
  var controlDeSesion;
  beforeEach(inject(function (_controlDeSesion_) {
    controlDeSesion = _controlDeSesion_;
  }));

  it('should do something', function () {
    expect(!!controlDeSesion).toBe(true);
  });

});
