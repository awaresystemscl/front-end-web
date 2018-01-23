'use strict';

describe('Controller: CityawareCtrl', function () {

  // load the controller's module
  beforeEach(module('frontEndApp'));

  var CityawareCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CityawareCtrl = $controller('CityawareCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CityawareCtrl.awesomeThings.length).toBe(3);
  });
});
