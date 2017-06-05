'use strict';

describe('Controller: ListamashupCtrl', function () {

  // load the controller's module
  beforeEach(module('frontEndApp'));

  var ListamashupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListamashupCtrl = $controller('ListamashupCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListamashupCtrl.awesomeThings.length).toBe(3);
  });
});
