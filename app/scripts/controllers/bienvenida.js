'use strict';

/**
 * @ngdoc function
 * @name frontEndApp.controller:BienvenidaCtrl
 * @description
 * # BienvenidaCtrl
 * Controller of the frontEndApp
 */
angular.module('frontEndApp')
  .controller('BienvenidaCtrl', function ($scope, controlDeSesion) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vm = this;
    vm.menuTemplate = {
    	url: 'views/menu.html'
    };

      $(document).ready(function(){
        $('.collapsible').collapsible();
      });

    $scope.ayer = new Date(Date.now() - 864e5)
    $scope.ayer = $scope.ayer.toJSON().slice(0,10)
    $scope.fecha = new Date(Date.now())
    $scope.fecha.setHours($scope.fecha.getHours() - 3)
    $scope.fecha = $scope.fecha.toJSON().slice(11,16)
    $scope.diaServidor = new Date(Date.now())
    $scope.diaServidor.setHours($scope.diaServidor.getHours() - 3)
    $scope.diaServidor = $scope.diaServidor.toJSON().slice(0,10)
    $scope.hoy = new Date(Date.now())
    $scope.hoy.setHours($scope.hoy.getHours() - 3)
    $scope.hoy = $scope.hoy.toJSON().slice(0,10)
    $scope.umbral = 90
    $scope.cambioUmbral = ""

    $scope.usuario = function(){
      return controlDeSesion.get('tipo')
    }

    $scope.cambiarUmbral = function(){
      
    }

  });
