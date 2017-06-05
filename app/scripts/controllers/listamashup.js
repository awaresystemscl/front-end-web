'use strict';

/**
 * @ngdoc function
 * @name frontEndApp.controller:ListamashupCtrl
 * @description
 * # ListamashupCtrl
 * Controller of the frontEndApp
 */
angular.module('frontEndApp')
  .controller('ListamashupCtrl', function ($scope,  $timeout, firebase) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var vm = this;
    vm.menuTemplate = {
    	url: 'views/menu.html'
    };

    $scope.data = [];
    $scope.mashup = {};

	$scope.recuperar = function(){
		firebase.database().ref().child('datamashup').on("child_added", function(data){
			$scope.$apply(function(){
				$scope.data.push(data.val().mashup);
				$(document).ready(function(){
	                	$('.modal').modal();
		            });
			});
				// $timeout(function() {
					// $(document).ready(function(){
	    //             	$('.modal').modal();
		   //          });
				// }, 50);
		});		
	}

	$scope.contarObjeto = function(objeto){
		return Object.keys(objeto).length;
	}

	$scope.modalEditar = function(apis){
		$scope.mashup = apis
		$('#modalEditar').modal('open');
	}

  });
//lineas 15