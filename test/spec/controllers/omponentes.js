'use strict';

describe('Controller: OmponentesCtrl', function () {

  // load the controller's module
  beforeEach(module('frontEndApp'));

  var OmponentesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OmponentesCtrl = $controller('OmponentesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OmponentesCtrl.awesomeThings.length).toBe(3);
  });
});
