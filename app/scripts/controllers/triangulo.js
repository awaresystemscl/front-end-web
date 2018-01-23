'use strict';

/**
 * @ngdoc function
 * @name frontEndApp.controller:TrianguloCtrl
 * @description
 * # TrianguloCtrl
 * Controller of the frontEndApp
 */
angular.module('frontEndApp')
  .controller('TrianguloCtrl', function ($scope, $http, $filter,$timeout,$q,componente) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var vm = this;
    vm.menuTemplate = {
    	url: 'views/menu.html'
    };

    $scope.ma = [];
    $scope.ma.min = 0;
    $scope.ma.med = 0;
    $scope.ma.max = 0;
    $scope.chart = []
    $scope.nombreFactores = [
            {id:1,nombre:'Tiempo de respuesta'},
            {id:2,nombre:'Disponibilidad'},
            {id:3,nombre:'Rendimiento'},
            {id:4,nombre:'Confiabilidad'},
            {id:5,nombre:'Latencia'}
        ];

    //Se inicializan variables
    $scope.query = {};
    $scope.queryBy = '$'; //implica buscar en todo
    $scope.ordenarPor = 'rendimiento';
    $scope.factores = [
        {factor: 3, tipo_de_medida: "menor"}, //Rendimiento
        {factor: 5, tipo_de_medida: "menor"}, //Latencia
        {factor: 1, tipo_de_medida: "menor"}, //Tiempo de respuesta
        {factor: 2, tipo_de_medida: "mayor"}, //Disponibilidad
        {factor: 4, tipo_de_medida: "mayor"}, //Confiabilidad
    ]
    $scope.ApisQuality = []

    $scope.cambiar = function(nombre){
        if($scope.ordenarPor === nombre){
            $scope.ordenarPor = "-"+nombre
        }else{
            $scope.ordenarPor = nombre
        }
    }
    $scope.verificar = function(api){
        if(api != undefined){
            return true
        }
        return false
    }

    $scope.inicio = function(){
        componente.apisDataTest()
        .then(function(response) {
            // $scope.respuesta = response.data.api
        }, 
        function(response) { // optional
            console.log(response)
        });

        componente.categoriaApis()
        .then(function(response) {
            $scope.respuesta = response.data.categorias
            $timeout(function() { 
                for (var i = 0; i < $scope.respuesta.length; i++) { 
                    $scope.ApisQuality.push(
                           $scope.respuesta[i][0]
                    )
                    console.log($scope.respuesta)
                }
            console.log("paso")
            }, 500);
        }, 
        function(response) { // optional
            console.log(response)
        });
    };

    $scope.getnombre  = function(idFactor){ 
        angular.forEach($scope.nombreFactores,function(element) {
            if(element.id == idFactor){
                return element.nombre
            }

        });
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
                        $scope.chart[posicion].data.rows[0].c[0].v = value.minimo
                        $scope.chart[posicion].data.rows[1].c[0].v = value.medio
                        $scope.chart[posicion].data.rows[2].c[0].v = value.maximo
                    }
                    if(value.nivel_factor == "Aceptable"){
                        $scope.chart[posicion].data.rows[3].c[0].v = value.minimo
                        $scope.chart[posicion].data.rows[4].c[0].v = value.medio
                        $scope.chart[posicion].data.rows[5].c[0].v = value.maximo
                    }
                    if(value.nivel_factor == "Normal"){
                        $scope.chart[posicion].data.rows[6].c[0].v = value.minimo
                        $scope.chart[posicion].data.rows[7].c[0].v = value.medio
                        $scope.chart[posicion].data.rows[8].c[0].v = value.maximo
                    }
                    if(value.nivel_factor == "Poco Aceptable"){
                        $scope.chart[posicion].data.rows[9].c[0].v = value.minimo
                        $scope.chart[posicion].data.rows[10].c[0].v = value.medio
                        $scope.chart[posicion].data.rows[11].c[0].v = value.maximo
                    }
                    if(value.nivel_factor == "Muy poco Aceptable"){
                        $scope.chart[posicion].data.rows[12].c[0].v = value.minimo
                        $scope.chart[posicion].data.rows[13].c[0].v = value.medio
                        $scope.chart[posicion].data.rows[14].c[0].v = value.maximo
                    }
                    $scope.chart[posicion].options.hAxis.direction = -1

                }
                else{
                    if(value.nivel_factor == "Muy Aceptable"){
                        $scope.chart[posicion].data.rows[0].c[0].v = value.minimo
                        $scope.chart[posicion].data.rows[1].c[0].v = value.medio
                        $scope.chart[posicion].data.rows[2].c[0].v = value.maximo
                    }
                    if(value.nivel_factor == "Aceptable"){
                        $scope.chart[posicion].data.rows[3].c[0].v = value.minimo
                        $scope.chart[posicion].data.rows[4].c[0].v = value.medio
                        $scope.chart[posicion].data.rows[5].c[0].v = value.maximo
                    }
                    if(value.nivel_factor == "Normal"){
                        $scope.chart[posicion].data.rows[6].c[0].v = value.minimo
                        $scope.chart[posicion].data.rows[7].c[0].v = value.medio
                        $scope.chart[posicion].data.rows[8].c[0].v = value.maximo
                    }
                    if(value.nivel_factor == "Poco Aceptable"){
                        $scope.chart[posicion].data.rows[9].c[0].v = value.minimo
                        $scope.chart[posicion].data.rows[10].c[0].v = value.medio
                        $scope.chart[posicion].data.rows[11].c[0].v = value.maximo
                    }
                    if(value.nivel_factor == "Muy poco Aceptable"){
                        $scope.chart[posicion].data.rows[12].c[0].v = value.minimo
                        $scope.chart[posicion].data.rows[13].c[0].v = value.medio
                        $scope.chart[posicion].data.rows[14].c[0].v = value.maximo
                    }
                }
                
            }
        })    
        
    }
    $scope.agregar = function(nombreFactor){
        
        var nombre = ""
        angular.forEach($scope.nombreFactores,function(element) {
            if(element.id == nombreFactor){
                nombre= element.nombre
            }
        });
        $scope.chart.push(
            {
              "type": "AreaChart",
              // "cssStyle": "height:200px; width:300px;",
              "data": {
                "cols": [
                    {
                        id: "1",
                        label: nombre,
                        type: "number"
                    },{
                        id: "2",
                        label: "Muy Aceptable",
                        type: "number"
                    },{
                        id: "3",
                        label: "Aceptable",
                        type: "number"
                    },{
                        id: "4",
                        label: "Normal",
                        type: "number"
                    },{
                        id: "5",
                        label: "Poco Acepetable",
                        type: "number"
                    },{
                        id: "6",
                        label: "Muy Poco Aceptable",
                        type: "number"
                    },{
                        id: "7",
                        label: "Mi Componente",
                        type: "number"
                    }
                    ],
                    "rows": [
                    {//Muy Aceptable ===========================================
                        c: [{v: 0}, {v: 0}]//Mininimo
                    },{
                        c: [{v: 0}, {v: 2}]//Medio
                    },{
                        c: [{v: 0}, {v: 0}]//Maximo
                    },{//Aceptable =============================================
                        c: [{v: 0}, {v: 0}, {v: 0}]//Minimo
                    },{
                        c: [{v: 0}, {v: 0}, {v: 2}]//Medio
                    },{
                        c: [{v: 0}, {v: 0}, {v: 0}]//Maximo
                    },{//Normal ================================================
                        c: [{v: 0}, {v: 0}, {v: 0}, {v: 0}]//Minimo
                    },{
                        c: [{v: 0}, {v: 0}, {v: 0}, {v: 2}]//Medio
                    },{
                        c: [{v: 0}, {v: 0}, {v: 0}, {v: 0}]//Maximo
                    },{//Poco Aceptable ========================================
                        c: [{v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0}]//Minimo
                    },{
                        c: [{v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 2}]//Medio
                    },{
                        c: [{v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0}]//Maximo
                    },{//Muy Poco Aceptable ====================================
                        c: [{v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0}]//Minimo
                    },{
                        c: [{v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 2}]//Medio
                    },{
                        c: [{v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0}]//Maximo
                    },{
                        c: [{v: 55}, {v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0}]//NUEVO
                    },{
                        c: [{v: 55}, {v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 2}]//NUEVO
                    },{
                        c: [{v: 55}, {v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0}]//NUEVO
                    }]
              },
              "options": {
                "colors": ['#52C33D', '#87FA03','#FAF903','#FA6403','#FA0303','#0000ff'],
                // "colors": ['#FA0303', '#FA6403','#FAF903','#87FA03','#52C33D'],
                // "title": "Puntos medios",
                "isStacked": "true",
                legend: {position: 'top', maxLines: 6},
                "fill": 20,
                "displayExactValues": true,
                "chartArea": {width: '60%', left: '15%'},
                "vAxis": {
                  // "title": "Puntos medios",
                  "textPosition": 'none',
                  "gridlines": {
                    "color": 'transparent'
                  }
                },
                "hAxis": {
                    // ticks: [100, 200, 300, 400,500,600,700,800,900,1000,1100,1200,1300],
                  // direction: -1,
                  "title": nombre,
                  "gridlines": {
                    count: 12,
                    "color": 'transparent'
                  }
                }
              },
              "formatters": {},
              "displayed": true
            }
        );
        
    }

    $scope.mostrar = function(){
        console.log($scope.chart[0].data.rows);
        console.log($scope.ma.min);
    }

    $scope.seriesSelected = function (selectedItem) {

          // var chartData = $scope.chart.data;
          // var value = chartData.rows[selectedItem.row].c[selectedItem.column].v;
          // var formattedValue = chartData.rows[selectedItem.row].c[selectedItem.column].f;
          // console.log(selectedItem);
      };
  });
