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
    'toastr',
    'googlechart',
    'plotly'
  ])
  .config(function ($routeProvider,$locationProvider,$authProvider) {
    $authProvider.loginUrl = 'https://awaresystems.cl/api/autenticacion';
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
      .when('/registro', {
        templateUrl: 'views/registro.html',
        controller: 'RegistroCtrl',
        controllerAs: 'registro'
      })
      .when('/registro', {
        templateUrl: 'views/registro.html',
        controller: 'RegistroCtrl',
        controllerAs: 'registro'
      })
      .when('/bienvenida', {
        templateUrl: 'views/bienvenida.html',
        controller: 'BienvenidaCtrl',
        controllerAs: 'bienvenida'
      })
      .when('/triangulo', {
        templateUrl: 'views/triangulo.html',
        controller: 'TrianguloCtrl',
        controllerAs: 'triangulo'
      })
      .when('/cityaware', {
        templateUrl: 'views/cityaware.html',
        controller: 'CityawareCtrl',
        controllerAs: 'cityaware'
      })
      .when('/mashups', {
        templateUrl: 'views/mashups.html',
        controller: 'MashupsCtrl',
        controllerAs: 'mashups'
      })
      .when('/omponentes', {
        templateUrl: 'views/omponentes.html',
        controller: 'OmponentesCtrl',
        controllerAs: 'omponentes'
      })
      .when('/componentes', {
        templateUrl: 'views/componentes.html',
        controller: 'ComponentesCtrl',
        controllerAs: 'componentes'
      })
      .when('/graficoComponente', {
        templateUrl: 'views/graficocomponente.html',
        controller: 'GraficocomponenteCtrl',
        controllerAs: 'graficoComponente'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  })
.run(function($rootScope, $location, autenticacion, toastr,$timeout){
    var rutasPrivadas = 
      [
        '/listaMashup',
        '/main',
        '/about',
        '/menu',
        '/triangulo',
        '/bienvenida',
        '/cityaware',
        '/mashups',
        '/componentes',
        '/componentes',
        '/graficoComponente',
      ];
    $rootScope.$on('$routeChangeStart', function(){
      if(($.inArray($location.path(), rutasPrivadas) !== -1) && !autenticacion.isLoggedIn()){
        toastr.error('Debes iniciar sesion', 'Login');
        $location.path('/'); 
      }
      $timeout(function() { 
          if(($.inArray($location.path(), rutasPrivadas) !== -1) && !autenticacion.isLoggedIn()){
            toastr.error('Debes iniciar sesion', 'Login');
            $location.path('/');
          }
        }, 1000);  
    });
  });
//lineas 9