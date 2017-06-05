'use strict';

describe('Service: mashup', function () {

  // load the service's module
  beforeEach(module('frontEndApp'));

  // instantiate service
  var mashup;
  beforeEach(inject(function (_mashup_) {
    mashup = _mashup_;
  }));

  it('should do something', function () {
    expect(!!mashup).toBe(true);
  });

});
