'use strict';

/**
 * @ngdoc service
 * @name frontEndApp.componente
 * @description
 * # componente
 * Service in the frontEndApp.
 */
angular.module('frontEndApp')
  .service('componente', function (conexionBackEnd,toastr, $http, navegacion) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var urlBackEnd = conexionBackEnd.urlBackEnd();
    // var componente = {componente_id: navegacion.getComponenteId}
    return{
	    verEstadistica: function(componente_id){
	        return $http({
	            method: 'POST',
	            url: urlBackEnd+'/estadistica',
	            data: componente_id
            });
	      },
      verUltimoApiTest: function(componente_id){
          return $http({
              method: 'POST',
              url: urlBackEnd+'/ultimoApiTest',
              data: componente_id
            });
        },
        apisDataTest: function(){
          return $http({
              method: 'GET',
              url: urlBackEnd+'/apisDataTest'
            });
        },
        categoriaApis: function(){
          var componente = {componente_id: navegacion.getComponenteId()}
          console.log("El id del componente es = ",componente)
          return $http({
              method: 'POST',
              url: urlBackEnd+'/categoriaApis',
              data: componente
            });
        },
    };
  });
