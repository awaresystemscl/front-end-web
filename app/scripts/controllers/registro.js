'use strict';

/**
 * @ngdoc function
 * @name frontEndApp.controller:RegistroCtrl
 * @description
 * # RegistroCtrl
 * Controller of the frontEndApp
 */
angular.module('frontEndApp')
  .controller('RegistroCtrl', function ($scope, registro, toastr,  $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.usuario = {}
    $scope.usuario.password = ""
    $scope.usuario.passwordConfirm = ""

    $scope.cargar = function(){
      /*Preloader*/
      $('body').removeClass('loaded');
      setTimeout(function() {
        $('body').addClass('loaded');      
      }, 500);

      $('.show-search').click(function() {
        $('.search-out').fadeToggle( "50", "linear" );
      });

      // Check first if any of the task is checked
      $('#task-card input:checkbox').each(function() {
        checkbox_check(this);
      });

      // Task check box
      $('#task-card input:checkbox').change(function() {
        checkbox_check(this);
      });

      // Check Uncheck function
      function checkbox_check(el){
        if (!$(el).is(':checked')) {
              $(el).next().css('text-decoration', 'none'); // or addClass            
            } else {
              $(el).next().css('text-decoration', 'line-through'); //or addClass
            }    
          };

    };

    $scope.activar = function(){
      if($scope.usuario.password == ""){
        return ''
      }
      else if($scope.usuario.password == $scope.usuario.passwordConfirm){
        return 'valid'
      }
      else{
        return 'invalid'
      }
    }

    $scope.registrarCuenta = function(){
      if($scope.usuario.password == $scope.usuario.passwordConfirm){
        registro.registrarCuenta($scope.usuario)
        .then(function(respuesta) {
            console.log(respuesta);
            toastr.success('Cuenta registrada Correctamente', 'Correcto');
            $location.path('/');
          }, 
        function(respuesta) { // optional
              toastr.error(respuesta.data.error, 'Error');
          });
        console.log($scope.mashup);
      }
      else{
        toastr.warning('Password incorrecta', 'Error');
      }
    }


  });
