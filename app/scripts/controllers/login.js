'use strict';

/**
 * @ngdoc function
 * @name frontEndApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the frontEndApp
 */
angular.module('frontEndApp')
  .controller('LoginCtrl', function ($scope, $location, $window , autenticacion, toastr) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // var forceSSL = function () {
    //     if ($location.protocol() !== 'https') {
    //         $window.location.href = $location.absUrl().replace('http', 'https');
    //     }
    // };
    // forceSSL();

    $scope.iniciarSesion = function (){
      //console.log(vm.loginForm);
      autenticacion.loginApi($scope.usuario);
      // toastr.success('Hello world!', 'Toastr fun!');

    }

    $(document).ready(function() {
      Materialize.updateTextFields();
    });


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

    };;
  });
//lineas 15