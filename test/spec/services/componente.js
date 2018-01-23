'use strict';

describe('Service: componente', function () {

  // load the service's module
  beforeEach(module('frontEndApp'));

  // instantiate service
  var componente;
  beforeEach(inject(function (_componente_) {
    componente = _componente_;
  }));

  it('should do something', function () {
    expect(!!componente).toBe(true);
  });

});
