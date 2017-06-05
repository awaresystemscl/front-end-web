'use strict';

/**
 * @ngdoc service
 * @name frontEndApp.mashup
 * @description
 * # mashup
 * Service in the frontEndApp.
 */
angular.module('frontEndApp')
  .service('mashup', function (conexionBackEnd,toastr, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var urlBackEnd = conexionBackEnd.urlBackEnd();
    return{
      verApi: function(test){
        return $http({
            method: 'GET',
            url: urlBackEnd+'/api',
            params: test
            });
      },
      ingresarMashup: function(mashup){
        return $http({
            method: 'POST',
            url: urlBackEnd+'/mashup',
            data: mashup
            });
      }
  	};
  });
//lineas 12