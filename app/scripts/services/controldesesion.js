'use strict';

/**
 * @ngdoc service
 * @name frontEndApp.controlDeSesion
 * @description
 * # controlDeSesion
 * Service in the frontEndApp.
 */
angular.module('frontEndApp')
  .factory('controlDeSesion', function () {
    return {
		get: function (key){
			return sessionStorage.getItem(key);
		},
		set: function(key, val){
			return sessionStorage.setItem(key, val);
		},
		unset: function(key){
			return sessionStorage.removeItem(key);
		}
	};
  });
//lineas 8