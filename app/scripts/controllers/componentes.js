'use strict';

/**
 * @ngdoc function
 * @name frontEndApp.controller:ComponentesCtrl
 * @description
 * # ComponentesCtrl
 * Controller of the frontEndApp
 */
angular.module('frontEndApp')
  .controller('ComponentesCtrl', function ($scope, mashup, toastr, navegacion, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var vm = this;
    vm.menuTemplate = {
    	url: 'views/menu.html'
    };
    $scope.mashup = {}

    $scope.inicio = function(){
      $(document).ready(function(){
        $('.modal').modal();
      });
    	$scope.mashup.id = navegacion.getMashupId()
    	console.log($scope.mashup);
		mashup.verMisComponentes($scope.mashup)
		.then(function(respuesta) {
		  $scope.misComponentes = respuesta.data.componentes ;
		  // toastr.success('done', 'Correcto');
		  console.log($scope.misMashups)
		}, 
		function() { // optional
		    toastr.error('Error faltan datos', 'Error');
		    // $location.path('/');
		});
    };

    $scope.graficos = function(componenteId){
      navegacion.setComponenteId(componenteId);
      console.log(navegacion.getComponenteId())
      $location.path('/graficoComponente');
    }

    $scope.detalles = function(componenteId){
      mashup.verRestriccionesDeComponente(componenteId)
          .then(function(respuesta) {
            $scope.restricciones = respuesta.data.restricciones;
            $(document).ready(function() {
                $('select').material_select();
            });
            $(document).ready(function() {
                Materialize.updateTextFields();
            });
          
            $('#modal1').modal('open');
          }, 
          function() { // optional
              toastr.error('Error faltan datos', 'Error');
              // $location.path('/');
          });
    }

    $scope.cerrarModal = function(){
      $('#modal1').modal('close');
    }
  });
