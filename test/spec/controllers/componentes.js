'use strict';

describe('Controller: ComponentesCtrl', function () {

  // load the controller's module
  beforeEach(module('frontEndApp'));

  var ComponentesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComponentesCtrl = $controller('ComponentesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ComponentesCtrl.awesomeThings.length).toBe(3);
  });
});
