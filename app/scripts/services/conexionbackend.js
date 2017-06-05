'use strict';

/**
 * @ngdoc service
 * @name frontEndApp.conexionBackEnd
 * @description
 * # conexionBackEnd
 * Factory in the frontEndApp.
 */
angular.module('frontEndApp')
  .factory('conexionBackEnd', function () {
    // Service logic
    // ...

    var urlBackEnd = 'http://awaresystems.cl:8750';

    // Public API here
    return {
      urlBackEnd: function () {
        return urlBackEnd;
      }
    };
  });
//lineas 4