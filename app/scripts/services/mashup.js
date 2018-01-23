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
            url: '/api',
            params: test
            });
      },
      ingresarMashup: function(mashup){
        return $http({
            method: 'POST',
            url: urlBackEnd+'/mashup',
            data: mashup
            });
      },
      verMisMashups: function(){
        return $http({
            method: 'GET',
            // url: urlBackEnd+'/mismashups',
            url: urlBackEnd+'/misMashups',
            });
      },
      verMisComponentes: function(mashup_id){
        return $http({
            method: 'POST',
            // url: urlBackEnd+'/mismashups',
            url: urlBackEnd+'/misComponentes',
            data: mashup_id
            });
      },
      verRestriccionesDeComponente: function(componente_id){
        return $http({
            method: 'POST',
            url: urlBackEnd+'/verRestriccionesDeComponente',
            data: {componente_id:componente_id}
            });
      }
  	};
  });
//lineas 12