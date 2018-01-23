'use strict';

/**
 * @ngdoc service
 * @name frontEndApp.registro
 * @description
 * # registro
 * Service in the frontEndApp.
 */
angular.module('frontEndApp')
  .service('registro', function (conexionBackEnd,toastr, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
     var urlBackEnd = conexionBackEnd.urlBackEnd();
     return{
      registrarCuenta: function(usuario){
        return $http({
            method: 'POST',
            url: urlBackEnd+'/registrar',
            params: usuario
            });
      }
  	};
  });
