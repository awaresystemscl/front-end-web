'use strict';

describe('Service: conexionBackEnd', function () {

  // load the service's module
  beforeEach(module('frontEndApp'));

  // instantiate service
  var conexionBackEnd;
  beforeEach(inject(function (_conexionBackEnd_) {
    conexionBackEnd = _conexionBackEnd_;
  }));

  it('should do something', function () {
    expect(!!conexionBackEnd).toBe(true);
  });

});
