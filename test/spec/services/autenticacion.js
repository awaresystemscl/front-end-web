'use strict';

describe('Service: autenticacion', function () {

  // load the service's module
  beforeEach(module('frontEndApp'));

  // instantiate service
  var autenticacion;
  beforeEach(inject(function (_autenticacion_) {
    autenticacion = _autenticacion_;
  }));

  it('should do something', function () {
    expect(!!autenticacion).toBe(true);
  });

});
