'use strict';

/**
 * @ngdoc function
 * @name frontEndApp.controller:GraficocomponenteCtrl
 * @description
 * # GraficocomponenteCtrl
 * Controller of the frontEndApp
 */
angular.module('frontEndApp')
  .controller('GraficocomponenteCtrl', function ($scope, $http, toastr, componente, navegacion, $timeout, mashup) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var vm = this;
    vm.menuTemplate = {
    	url: 'views/menu.html'
    };

    $scope.mostrar = function(nombre){
        if(nombre == "Disponibilidad" || nombre == "Confiabilidad"){
            return false
        }
        else{
            return true
        }
    }

    $scope.graficos = []
	$scope.data = [];
    $scope.compo = {}

    $scope.nombreFactores = [
        {id:1,nombre:'Tiempo de respuesta'},
        {id:2,nombre:'Disponibilidad'},
        {id:3,nombre:'Rendimiento'},
        {id:4,nombre:'Confiabilidad'},
        {id:5,nombre:'Latencia'}
    ];

    $scope.factores = [
        {factor: 3, tipo_de_medida: "menor"}, //Rendimiento
        {factor: 5, tipo_de_medida: "menor"}, //Latencia
        {factor: 1, tipo_de_medida: "menor"}, //Tiempo de respuesta
        {factor: 2, tipo_de_medida: "mayor"}, //Disponibilidad
        {factor: 4, tipo_de_medida: "mayor"}, //Confiabilidad
    ];

    $scope.inicio = function(){
        $(document).ready(function(){
            $('.modal').modal();
        });
        $scope.compo.componente_id = navegacion.getComponenteId()
        componente.verEstadistica($scope.compo)
        .then(function(response) {
            $scope.estadistica = response.data.estadistica_cuartil
            for (var i = 0; i < $scope.factores.length; i++) {
                $scope.agregar($scope.factores[i].factor,i)
                $scope.ingresarFactor($scope.factores[i].factor,i,$scope.factores[i].tipo_de_medida)
            }
        }, 
        function(response) { // optional
            console.log(response)
        });
        $timeout(function() { 
            componente.verUltimoApiTest($scope.compo)
            .then(function(response) {
                $scope.testActual = response.data.ultimo_test[0]
                // console.log($scope.testActual)
                for (var i = 0; i < 5; i++) {
                    if ( i == 0){
                        $scope.calcularFactor(i, $scope.testActual.rendimiento)
                    }else if( i == 1){
                        $scope.calcularFactor(i, $scope.testActual.latencia)
                    }else if( i == 2){
                        $scope.calcularFactor(i, $scope.testActual.tiempo_de_respuesta)
                    }else if( i == 3){
                        $scope.calcularFactor(i, $scope.testActual.disponibilidad)
                    }else{
                        $scope.calcularFactor(i, $scope.testActual.confiabilidad)
                    }
                }
            }, 
            function(response) { // optional
                // console.log(response)
            });
        }, 400);  
        
    };

    $scope.calcularFactor = function(i, test){
        // console.log("aqui esta",test)
        if(test > 2000 || (test == -1 && i == 0) || (test == -1 && i == 1) || (test == -1 && i == 2) ){test = 2000}
        if( (test == -1 && i == 3) || (test == -1 && i == 4) ){test = 0}
        // console.log(test)
        for (var j = 0; j < 5; j++) {

            if ( $scope.graficos[i].data[j].x[1] <= test && test <= $scope.graficos[i].data[j].x[2] ){

                $scope.graficos[i].data.push({
                    x: [test ],
                    y: [$scope.calcularY($scope.graficos[i].data[j].x[1], $scope.graficos[i].data[j].x[2],parseFloat(test), $scope.graficos[i].data[j].pendiente)],
                    name: 'Mi Componente',
                    mode: 'markers',
                    marker: { size: 15 },
                    type: 'scatter',
                    line: {color: 'blue'}
                });
                break;

            }
        }
    };

    $scope.calcularY = function(medio,max,testComponente, pendiente){
        var y = 0.5
        if(pendiente < 0 || pendiente >1){
            y = 1
        }else{
            if (medio+((max-medio)/2) < testComponente) {
                y = (pendiente*(testComponente - medio))
                console.log("paso en if")
            } else {
                y = 1-(pendiente*(testComponente - medio))
                console.log("paso en else")
            }
        }
        console.log(medio,max,testComponente,pendiente,y)
        return y
    }

    $scope.ingresarFactor = function(nombreFactor,posicion, tipoDeMedida){
        angular.forEach($scope.estadistica,function(value,index){
            
            if(value.factor_id == nombreFactor){
                 if(value.minimo > 2000){
                     value.minimo = 2000
                 }
                 if(value.medio > 2000){
                     value.medio = 2000
                 }
                 if(value.maximo > 2000){
                     value.maximo = 2000
                 }
                //console.log(value)
                if(tipoDeMedida == "mayor"|| tipoDeMedida == "mayor"){

                    if(value.nivel_factor == "Muy Aceptable"){
                        $scope.graficos[posicion].data[0].x = [value.minimo,value.medio,value.maximo]
                        $scope.graficos[posicion].data[0].pendiente = 1/(value.maximo-value.medio)
                    }
                    if(value.nivel_factor == "Aceptable"){
                        $scope.graficos[posicion].data[1].x = [value.minimo,value.medio,value.maximo]
                        $scope.graficos[posicion].data[1].pendiente = 1/(value.maximo-value.medio)
                    }
                    if(value.nivel_factor == "Normal"){
                        $scope.graficos[posicion].data[2].x = [value.minimo,value.medio,value.maximo]
                        $scope.graficos[posicion].data[2].pendiente = 1/(value.maximo-value.medio)
                    }
                    if(value.nivel_factor == "Poco Aceptable"){
                        $scope.graficos[posicion].data[3].x = [value.minimo,value.medio,value.maximo]
                        $scope.graficos[posicion].data[3].pendiente = 1/(value.maximo-value.medio)
                    }
                    if(value.nivel_factor == "Muy poco Aceptable"){
                        $scope.graficos[posicion].data[4].x = [value.minimo,value.medio,value.maximo]
                    }

                }
                else{
                    if(value.nivel_factor == "Muy Aceptable"){
                        $scope.graficos[posicion].data[0].x = [value.minimo,value.medio,value.maximo]
                        $scope.graficos[posicion].data[0].pendiente = 1/(value.maximo-value.medio)
                    }
                    if(value.nivel_factor == "Aceptable"){
                        $scope.graficos[posicion].data[1].x = [value.minimo,value.medio,value.maximo]
                        $scope.graficos[posicion].data[1].pendiente = 1/(value.maximo-value.medio)
                    }
                    if(value.nivel_factor == "Normal"){
                        $scope.graficos[posicion].data[2].x = [value.minimo,value.medio,value.maximo]
                        $scope.graficos[posicion].data[2].pendiente = 1/(value.maximo-value.medio)
                    }
                    if(value.nivel_factor == "Poco Aceptable"){
                        $scope.graficos[posicion].data[3].x = [value.minimo,value.medio,value.maximo]
                        $scope.graficos[posicion].data[3].pendiente = 1/(value.maximo-value.medio)
                    }
                    if(value.nivel_factor == "Muy poco Aceptable"){
                        $scope.graficos[posicion].data[4].x = [value.minimo,value.medio,value.maximo]
                    }
                }
                
            }
        })    
        
    };

    $scope.agregar = function(nombreFactor, lugar){
        
        var nombre = ""
        angular.forEach($scope.nombreFactores,function(element) {
            if(element.id == nombreFactor){
                nombre = element.nombre
            }
        });

        $scope.graficos.push({
            nombre: nombre,
            data: [
                {
                    x: [0, 0, 10],
                    y: [0, 1, 0],
                    name: 'Muy Aceptable',
                    mode: 'lines',
                    type: 'scatter',
                    line: {color: '#52C33D'}
                },
                {
                    x: [0, 10, 30],
                    y: [0, 1, 0],
                    name: 'Aceptable',
                    mode: 'lines',
                    type: 'scatter',
                    line: {color: '#87FA03'}
                },
                {
                    x: [10, 30, 50],
                    y: [0, 1, 0],
                    name: 'Nombre',
                    mode: 'lines',
                    type: 'scatter',
                    line: {color: '#FAF903'}
                },
                {
                    x: [30, 50, 100],
                    y: [0, 1, 0],
                    name: 'Poco Aceptable',
                    mode: 'lines',
                    type: 'scatter',
                    line: {color: '#FA6403'}
                },
                {
                    x: [50, 100, 100],
                    y: [0, 1, 0],
                    name: 'Muy Poco Aceptable',
                    mode: 'lines',
                    type: 'scatter',
                    line: {color: '#FA0303'}
                }
                
            ],
            layout: {
                showlegend: true,
                tittle: nombre,
                legend: {"orientation": "h"},
                yaxis: {
                    showticklabels: false
                },
            }


        });
    };

    $scope.plotlyEvents = function (graph){
      // Create custom events that subscribe to graph
      graph.on('plotly_selected', function(event){

      });
    };

    $scope.abrirDetalles = function(){
        mashup.verRestriccionesDeComponente(navegacion.getComponenteId())
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

  });
