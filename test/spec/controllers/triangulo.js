'use strict';

describe('Controller: TrianguloCtrl', function () {

  // load the controller's module
  beforeEach(module('frontEndApp'));

  var TrianguloCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TrianguloCtrl = $controller('TrianguloCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TrianguloCtrl.awesomeThings.length).toBe(3);
  });
});
