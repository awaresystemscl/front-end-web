'use strict';

describe('Service: navegacion', function () {

  // load the service's module
  beforeEach(module('frontEndApp'));

  // instantiate service
  var navegacion;
  beforeEach(inject(function (_navegacion_) {
    navegacion = _navegacion_;
  }));

  it('should do something', function () {
    expect(!!navegacion).toBe(true);
  });

});
