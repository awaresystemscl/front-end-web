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

    var urlBackEnd = 'https://awaresystems.cl/api';

    // Public API here
    return {
      urlBackEnd: function () {
        return urlBackEnd;
      }
    };
  });
//lineas 4