'use strict';

/**
 * @ngdoc service
 * @name frontEndApp.navegacion
 * @description
 * # navegacion
 * Factory in the frontEndApp.
 */
angular.module('frontEndApp')
  .factory('navegacion', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;
    var mashupId = 0;
    var componenteId = 0;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      getMashupId: function(){
        return mashupId;
      },
      setMashupId: function(id){
        mashupId = id;
      },
      getComponenteId: function(){
        return componenteId;
      },
      setComponenteId: function(id){
        componenteId = id;
      }
    };
  });
