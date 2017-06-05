'use strict';

/**
 * @ngdoc function
 * @name frontEndApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the frontEndApp
 */
angular.module('frontEndApp')
  .controller('MenuCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

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

  

    $( document ).ready(function(){
        $('.button-collapse').sideNav();
        $('.button-collapse').sideNav('hide');
    });


     $('.dropdown-button').dropdown({ hover: true, constrainWidth: false, belowOrigin: true, alignment: 'left' });
     $('.dropdown-button2').dropdown({ hover: true, constrainWidth: true, belowOrigin: true, alignment: 'right' });
    
  });
//lineas 16