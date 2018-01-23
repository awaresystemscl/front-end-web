'use strict';

/**
 * @ngdoc function
 * @name frontEndApp.controller:MashupsCtrl
 * @description
 * # MashupsCtrl
 * Controller of the frontEndApp
 */
angular.module('frontEndApp')
  .controller('MashupsCtrl', function ($location,$scope, mashup, toastr, navegacion) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var vm = this;
    vm.menuTemplate = {
    	url: 'views/menu.html'
    };
    $scope.misMashups=[]
    $scope.fecha = new Date().toJSON().slice(0,10)
    $scope.inicio = function(){
      mashup.verMisMashups()
      .then(function(respuesta) {
          $scope.misMashups = respuesta.data.mashups ;
          console.log(respuesta);
          // toastr.success('done', 'Correcto');
        }, 
      function() { // optional
            toastr.error('Error faltan datos', 'Error');
            // $location.path('/');
        });
    };

    $scope.detalle = function(mashupId){
      console.log(mashupId)
      navegacion.setMashupId(mashupId);
      $location.path('/componentes');
    }

    $scope.existenDatos = function(){
      var validacion =false
      if($scope.misMashups.length > 0){
        validacion = true
      }
      return validacion
    }


  });
