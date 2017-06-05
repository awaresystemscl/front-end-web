'use strict';

/**
 * @ngdoc service
 * @name frontEndApp.autenticacion
 * @description
 * # autenticacion
 * Service in the frontEndApp.
 */
angular.module('frontEndApp')
  .service('autenticacion', function ($auth, controlDeSesion, toastr, $location) {
  	
  	var cacheDeSesion = function(datos){
		controlDeSesion.set('userIsLogin', true);
		controlDeSesion.set('tipo', datos.tipo);
		controlDeSesion.set('nombre', datos.nombre);
	};

	var eliminarCacheDeSesion = function(){
		controlDeSesion.unset('userIsLogin');
		controlDeSesion.unset('tipo');
		controlDeSesion.unset('nombre');
		controlDeSesion.unset('email');
	}


    var login = function(loginForm){
    	$auth.login(loginForm).then(
    		function (response){
    			//console.log(response.data);
    			if(response.data.error){
    				toastr.error('Datos Incorrectos', 'Error');
    			}else{
    				cacheDeSesion(response.data);
					$location.path('/main');
					toastr.success('Sesion iniciada con exito', 'Mensaje');
    			}
    			
    		},
    		function(error){
    			//unCacheSession();
    			toastr.error(error.data.error, 'Error');
    		}
    	);
    };

    return{
    	loginApi: function(loginForm){
    		login(loginForm);
    	},
    	isLoggedIn: function(){
				return controlDeSesion.get('userIsLogin') != null;
			},
			logout: function(){
				$auth.logout();
				eliminarCacheDeSesion();
				toastr.success('Sesion cerrada con exito', 'Mensaje');
				$location.path('/');
			},
			logoutForzado: function(){
				$auth.logout();
				eliminarCacheDeSesion();
				toastr.warning('Session Caducada', 'Mensaje');
				$location.path('/');
			}
    }
  });
//lineas 52