'use strict';

/**
 * @ngdoc overview
 * @name frontEndApp
 * @description
 * # frontEndApp
 *
 * Main module of the application.
 */
angular
  .module('frontEndApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'satellizer',
    'toastr'
  ])
  .config(function ($routeProvider,$locationProvider,$authProvider) {
    $authProvider.loginUrl = 'http://awaresystems.cl/api/autenticacion';
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl',
        controllerAs: 'menu'
      })
      .when('/listaMashup', {
        templateUrl: 'views/listamashup.html',
        controller: 'ListamashupCtrl',
        controllerAs: 'listaMashup'
      })
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  })
.run(function($rootScope, $location, autenticacion, toastr){
    var rutasPrivadas = 
      [
        '/listaMashup',
        '/main',
        '/about',
        '/menu'
      ];
    $rootScope.$on('$routeChangeStart', function(){
      if(($.inArray($location.path(), rutasPrivadas) !== -1) && !autenticacion.isLoggedIn()){
        toastr.error('Debes iniciar sesion', 'Mensaje de Error');
        $location.path('/');
      }

    });
  });
//lineas 9