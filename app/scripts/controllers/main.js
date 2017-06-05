'use strict';

/**
 * @ngdoc function
 * @name frontEndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontEndApp
 */
angular.module('frontEndApp')
  .controller('MainCtrl', function ($scope, $route, firebase, mashup, toastr) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var vm = this;
    vm.menuTemplate = {
    	url: 'views/menu.html'
    };

    $scope.mashup = {};
    $scope.mashup.apis = [];
    $scope.categorias = [
    	{"categoria":"3D"},
		{"categoria":"Accessibility"},
		{"categoria":"Accounting"},
		{"categoria":"Accounts"},
		{"categoria":"Activity Streams"},
		{"categoria":"Actors"},
		{"categoria":"Addresses"},
		{"categoria":"Adoption"},
		{"categoria":"Adult"},
		{"categoria":"Advertising"},
		{"categoria":"Aes"},
		{"categoria":"African"},
		{"categoria":"Agents"},
		{"categoria":"Aggregation"},
		{"categoria":"Agile"},
		{"categoria":"Agriculture"},
		{"categoria":"Air Travel"},
		{"categoria":"Alcohol"},
		{"categoria":"Algorithms"},
		{"categoria":"Analytics"},
		{"categoria":"Animals"},
		{"categoria":"Animation"},
		{"categoria":"Annotations"},
		{"categoria":"Announcements"},
		{"categoria":"API"},
		{"categoria":"API Description Languages"},
		{"categoria":"API Design"},
		{"categoria":"API Education"},
		{"categoria":"API Management"},
		{"categoria":"API Strategy"},
		{"categoria":"APIcon"},
		{"categoria":"Application Development"},
		{"categoria":"Applications"},
		{"categoria":"Art"},
		{"categoria":"Artificial Intelligence"},
		{"categoria":"Asia"},
		{"categoria":"Astrology"},
		{"categoria":"Astronomy"},
		{"categoria":"Atlas"},
		{"categoria":"Attractions"},
		{"categoria":"Auctions"},
		{"categoria":"Audio"},
		{"categoria":"Augmented Reality"},
		{"categoria":"Australian"},
		{"categoria":"Austrian"},
		{"categoria":"Authentication"},
		{"categoria":"Authorization"},
		{"categoria":"Auto"},
		{"categoria":"Automation"},
		{"categoria":"Availability"},
		{"categoria":"Avatars"},
		{"categoria":"B2B"},
		{"categoria":"B2D"},
		{"categoria":"Babies"},
		{"categoria":"Backend"},
		{"categoria":"Backend-as-a-Service"},
		{"categoria":"Background"},
		{"categoria":"Backup"},
		{"categoria":"Badges"},
		{"categoria":"Banking"},
		{"categoria":"Barcodes"},
		{"categoria":"Bars"},
		{"categoria":"Beauty"},
		{"categoria":"Beer"},
		{"categoria":"Belgian"},
		{"categoria":"Best Practices"},
		{"categoria":"Big Data"},
		{"categoria":"Billing"},
		{"categoria":"Bitcoin"},
		{"categoria":"Blogging"},
		{"categoria":"Bluetooth"},
		{"categoria":"Boating"},
		{"categoria":"Booking"},
		{"categoria":"Bookmarks"},
		{"categoria":"Books"},
		{"categoria":"Bots"},
		{"categoria":"Brazilian"},
		{"categoria":"Breweries"},
		{"categoria":"Browsers"},
		{"categoria":"Budget"},
		{"categoria":"Business"},
		{"categoria":"Caching"},
		{"categoria":"Calendars"},
		{"categoria":"Cameras"},
		{"categoria":"Campaigns"},
		{"categoria":"Canadian"},
		{"categoria":"Captcha"},
		{"categoria":"Catalogs"},
		{"categoria":"Celebrities"},
		{"categoria":"Charity"},
		{"categoria":"Charts"},
		{"categoria":"Chat"},
		{"categoria":"Check-In"},
		{"categoria":"Chemistry"},
		{"categoria":"Chinese"},
		{"categoria":"Cities"},
		{"categoria":"Civics"},
		{"categoria":"Classification"},
		{"categoria":"Classifieds"},
		{"categoria":"Climate"},
		{"categoria":"Clothing"},
		{"categoria":"Cloud"},
		{"categoria":"Collaboration"},
		{"categoria":"Collecting"},
		{"categoria":"Colors"},
		{"categoria":"Community"},
		{"categoria":"Comparisons"},
		{"categoria":"Competitions"},
		{"categoria":"Compliance"},
		{"categoria":"Contacts"},
		{"categoria":"Content"},
		{"categoria":"Content Management"},
		{"categoria":"Contracts"},
		{"categoria":"Conversions"},
		{"categoria":"Copyright"},
		{"categoria":"Countries"},
		{"categoria":"Coupons"},
		{"categoria":"Credit Cards"},
		{"categoria":"Crime"},
		{"categoria":"Crowdsourcing"},
		{"categoria":"Cryptocurrency"},
		{"categoria":"Currency"},
		{"categoria":"Customer Relationship Management"},
		{"categoria":"Customer Service"},
		{"categoria":"Customization"},
		{"categoria":"Cycling"},
		{"categoria":"Dashboards"},
		{"categoria":"Data"},
		{"categoria":"Data Mining"},
		{"categoria":"Data-as-a-Service"},
		{"categoria":"Database"},
		{"categoria":"Database-as-a-Service"},
		{"categoria":"Datacenter"},
		{"categoria":"Dating"},
		{"categoria":"Demographics"},
		{"categoria":"Design"},
		{"categoria":"Developer Relations"},
		{"categoria":"Developers"},
		{"categoria":"DevOps"},
		{"categoria":"Diagrams"},
		{"categoria":"Dictionary"},
		{"categoria":"Dieting"},
		{"categoria":"Directories"},
		{"categoria":"Discounts"},
		{"categoria":"DNA"},
		{"categoria":"Documents"},
		{"categoria":"Domains"},
		{"categoria":"Drawing"},
		{"categoria":"Drugs"},
		{"categoria":"Earthquakes"},
		{"categoria":"eBooks"},
		{"categoria":"eCommerce"},
		{"categoria":"Economics"},
		{"categoria":"Editing"},
		{"categoria":"Education"},
		{"categoria":"Electronic Signature"},
		{"categoria":"Email"},
		{"categoria":"Emergency"},
		{"categoria":"Encoding"},
		{"categoria":"Energy"},
		{"categoria":"Engagement"},
		{"categoria":"England"},
		{"categoria":"Enterprise"},
		{"categoria":"Entertainment"},
		{"categoria":"Environment"},
		{"categoria":"ERP"},
		{"categoria":"European"},
		{"categoria":"Events"},
		{"categoria":"Extraction"},
		{"categoria":"Family"},
		{"categoria":"Fantasy Sports"},
		{"categoria":"Fashion"},
		{"categoria":"Fax"},
		{"categoria":"Feedback"},
		{"categoria":"Feeds"},
		{"categoria":"File Sharing"},
		{"categoria":"Financial"},
		{"categoria":"Fitness"},
		{"categoria":"Flowers"},
		{"categoria":"Fonts"},
		{"categoria":"Food"},
		{"categoria":"Forms"},
		{"categoria":"Forums"},
		{"categoria":"Framework"},
		{"categoria":"French"},
		{"categoria":"Funding"},
		{"categoria":"Gadgets"},
		{"categoria":"Gambling"},
		{"categoria":"Games"},
		{"categoria":"Genealogy"},
		{"categoria":"Genetics"},
		{"categoria":"Geography"},
		{"categoria":"Geology"},
		{"categoria":"German"},
		{"categoria":"Gestures"},
		{"categoria":"Gifts"},
		{"categoria":"Goals"},
		{"categoria":"Government"},
		{"categoria":"Graphics"},
		{"categoria":"Greek"},
		{"categoria":"Grocery"},
		{"categoria":"Guatemalan"},
		{"categoria":"Guides"},
		{"categoria":"Hacking"},
		{"categoria":"Haitian"},
		{"categoria":"Hardware"},
		{"categoria":"Health"},
		{"categoria":"Healthcare"},
		{"categoria":"History"},
		{"categoria":"Hobbies"},
		{"categoria":"Holidays"},
		{"categoria":"Home Automation"},
		{"categoria":"Hosting"},
		{"categoria":"Hotels"},
		{"categoria":"Housing"},
		{"categoria":"HTML5"},
		{"categoria":"Human Resources"},
		{"categoria":"Humor"},
		{"categoria":"IDE"},
		{"categoria":"Identity"},
		{"categoria":"Images"},
		{"categoria":"Indian"},
		{"categoria":"Infrastructure-as-a-Service"},
		{"categoria":"Insurance"},
		{"categoria":"Integration"},
		{"categoria":"Intelligence"},
		{"categoria":"International"},
		{"categoria":"Internet of Things"},
		{"categoria":"Inventory"},
		{"categoria":"Invoicing"},
		{"categoria":"iPaaS"},
		{"categoria":"Israeli"},
		{"categoria":"Italian"},
		{"categoria":"Italy"},
		{"categoria":"Japanese"},
		{"categoria":"Jobs"},
		{"categoria":"Keywords"},
		{"categoria":"Korean"},
		{"categoria":"Language"},
		{"categoria":"Languages"},
		{"categoria":"Law"},
		{"categoria":"Learning Management Systems"},
		{"categoria":"Library"},
		{"categoria":"Licensing"},
		{"categoria":"Linked Data"},
		{"categoria":"Lists"},
		{"categoria":"Localization"},
		{"categoria":"Location"},
		{"categoria":"Logistics"},
		{"categoria":"Loyalty"},
		{"categoria":"Lyrics"},
		{"categoria":"Machine Learning"},
		{"categoria":"Machine-to-Machine"},
		{"categoria":"Magazines"},
		{"categoria":"Mail"},
		{"categoria":"Management"},
		{"categoria":"Manufacturing"},
		{"categoria":"Mapping"},
		{"categoria":"Marine"},
		{"categoria":"Marketing"},
		{"categoria":"Marketplace"},
		{"categoria":"Mashups"},
		{"categoria":"Math"},
		{"categoria":"Measurements"},
		{"categoria":"Media"},
		{"categoria":"Medical"},
		{"categoria":"Medical Records"},
		{"categoria":"Medicine"},
		{"categoria":"Meetings"},
		{"categoria":"Meme"},
		{"categoria":"Merchants"},
		{"categoria":"Messaging"},
		{"categoria":"Metadata"},
		{"categoria":"Mexican"},
		{"categoria":"Microformat"},
		{"categoria":"Microservices"},
		{"categoria":"Migration"},
		{"categoria":"Military"},
		{"categoria":"Mobile"},
		{"categoria":"Models"},
		{"categoria":"Modules"},
		{"categoria":"Monetization"},
		{"categoria":"Monitoring"},
		{"categoria":"Motion"},
		{"categoria":"Mountains"},
		{"categoria":"Movies"},
		{"categoria":"Museums"},
		{"categoria":"Music"},
		{"categoria":"Names"},
		{"categoria":"Natural Language Processing"},
		{"categoria":"Nature"},
		{"categoria":"Networking"},
		{"categoria":"New York City"},
		{"categoria":"News Services"},
		{"categoria":"Newsletter"},
		{"categoria":"Newsletters"},
		{"categoria":"Non-Profit"},
		{"categoria":"Nordic"},
		{"categoria":"North America"},
		{"categoria":"NoSQL"},
		{"categoria":"Notes"},
		{"categoria":"Notifications"},
		{"categoria":"Nutrition"},
		{"categoria":"OAuth"},
		{"categoria":"OCR"},
		{"categoria":"Office"},
		{"categoria":"Open Data"},
		{"categoria":"Open Graph"},
		{"categoria":"Open Source"},
		{"categoria":"Optimization"},
		{"categoria":"Ordering"},
		{"categoria":"Organization"},
		{"categoria":"Other"},
		{"categoria":"Pakistani"},
		{"categoria":"Panorama"},
		{"categoria":"Parking"},
		{"categoria":"Parsing"},
		{"categoria":"Passports"},
		{"categoria":"Passwords"},
		{"categoria":"Pastebin"},
		{"categoria":"Patents"},
		{"categoria":"Payments"},
		{"categoria":"PDF"},
		{"categoria":"Performance"},
		{"categoria":"Personal Information Management"},
		{"categoria":"Pets"},
		{"categoria":"Photos"},
		{"categoria":"Planning"},
		{"categoria":"Platform-as-a-Service"},
		{"categoria":"Plugins"},
		{"categoria":"Podcasts"},
		{"categoria":"Police"},
		{"categoria":"Politics"},
		{"categoria":"Polls"},
		{"categoria":"Postal"},
		{"categoria":"Postcards"},
		{"categoria":"Postcodes"},
		{"categoria":"Predictions"},
		{"categoria":"Presentations"},
		{"categoria":"Prices"},
		{"categoria":"Printing"},
		{"categoria":"Privacy"},
		{"categoria":"Products"},
		{"categoria":"Profiles"},
		{"categoria":"Project Management"},
		{"categoria":"Protocol"},
		{"categoria":"Prototype"},
		{"categoria":"Publishing"},
		{"categoria":"Purchasing"},
		{"categoria":"Q&amp;A"},
		{"categoria":"QR Codes"},
		{"categoria":"Quantified Self"},
		{"categoria":"RAML"},
		{"categoria":"Random"},
		{"categoria":"Ratings"},
		{"categoria":"RDF"},
		{"categoria":"Real Estate"},
		{"categoria":"Real Time"},
		{"categoria":"Recognition"},
		{"categoria":"Recommendations"},
		{"categoria":"Recreation"},
		{"categoria":"Reference"},
		{"categoria":"Referrals"},
		{"categoria":"Refunds"},
		{"categoria":"Registration"},
		{"categoria":"Registry"},
		{"categoria":"Religion"},
		{"categoria":"Rentals"},
		{"categoria":"Reporting"},
		{"categoria":"Reputation"},
		{"categoria":"Reservations"},
		{"categoria":"REST"},
		{"categoria":"Restaurants"},
		{"categoria":"Rewards"},
		{"categoria":"Robots"},
		{"categoria":"Romanian"},
		{"categoria":"Russian"},
		{"categoria":"Safety"},
		{"categoria":"Sales"},
		{"categoria":"Satellites"},
		{"categoria":"Scanning"},
		{"categoria":"Scheduling"},
		{"categoria":"Science"},
		{"categoria":"Scottish"},
		{"categoria":"Screenshots"},
		{"categoria":"SDK"},
		{"categoria":"Search"},
		{"categoria":"Security"},
		{"categoria":"Semantic Web"},
		{"categoria":"Semantics"},
		{"categoria":"Sentiment"},
		{"categoria":"SEO"},
		{"categoria":"Shipping"},
		{"categoria":"Smartphone"},
		{"categoria":"SOA"},
		{"categoria":"Social"},
		{"categoria":"Software-as-a-Service"},
		{"categoria":"Solar"},
		{"categoria":"Spam"},
		{"categoria":"Spanish"},
		{"categoria":"Spelling"},
		{"categoria":"Sports"},
		{"categoria":"Spreadsheets"},
		{"categoria":"SQL"},
		{"categoria":"Standards"},
		{"categoria":"Statistics"},
		{"categoria":"Stocks"},
		{"categoria":"Storage"},
		{"categoria":"Streaming"},
		{"categoria":"Subscriptions"},
		{"categoria":"Subtitles"},
		{"categoria":"Summary"},
		{"categoria":"Supernatural"},
		{"categoria":"Supply Chain"},
		{"categoria":"Support"},
		{"categoria":"Surveys"},
		{"categoria":"Sustainability"},
		{"categoria":"Swagger (OpenAPI)"},
		{"categoria":"Syncing"},
		{"categoria":"Tagging"},
		{"categoria":"Tasks"},
		{"categoria":"Taxes"},
		{"categoria":"Teleconferencing"},
		{"categoria":"Telephony"},
		{"categoria":"Testing"},
		{"categoria":"Text"},
		{"categoria":"Text-to-Speech"},
		{"categoria":"Tickets"},
		{"categoria":"Time"},
		{"categoria":"Time Tracking"},
		{"categoria":"Tools"},
		{"categoria":"Torrents"},
		{"categoria":"Tourism"},
		{"categoria":"Training"},
		{"categoria":"Transactions"},
		{"categoria":"Transcoding"},
		{"categoria":"Transcription"},
		{"categoria":"Translation"},
		{"categoria":"Transparency"},
		{"categoria":"Transportation"},
		{"categoria":"Travel"},
		{"categoria":"Trivia"},
		{"categoria":"TV"},
		{"categoria":"Tweets"},
		{"categoria":"Typography"},
		{"categoria":"Upload"},
		{"categoria":"URL Shortener"},
		{"categoria":"URLs"},
		{"categoria":"USA"},
		{"categoria":"Validation"},
		{"categoria":"Verification"},
		{"categoria":"Video"},
		{"categoria":"Viewer"},
		{"categoria":"Virtualization"},
		{"categoria":"Visas"},
		{"categoria":"Visualizations"},
		{"categoria":"Voice"},
		{"categoria":"VoIP"},
		{"categoria":"Voting"},
		{"categoria":"Water"},
		{"categoria":"Weapons"},
		{"categoria":"Wearable"},
		{"categoria":"Weather"},
		{"categoria":"Web Site Management"},
		{"categoria":"Webcams"},
		{"categoria":"Webhooks"},
		{"categoria":"WebRTC"},
		{"categoria":"Weddings"},
		{"categoria":"Wholesale"},
		{"categoria":"Wi-Fi"},
		{"categoria":"Widgets"},
		{"categoria":"Wiki"},
		{"categoria":"Wine"},
		{"categoria":"Wireless"},
		{"categoria":"Word Processing"},
		{"categoria":"Words"},
		{"categoria":"Writing"},
		{"categoria":"Zip Codes"}
	];

    $scope.factores = [
	    {
	    	nombre: 'Tiempo de Respuesta'
	    },
	    {
	    	nombre: 'Disponibilidad'
	    },
	    {
	    	nombre: 'Rendimiento'
	    },
	    {
	    	nombre: 'Confiabilidad'
	    },
	    {
	    	nombre: 'Latencia'
	    }
    ];

    $scope.nivel_de_factor = [
	    {
	    	nombre: 'Muy Aceptable'
	    },
	    {
	    	nombre: 'Aceptable'
	    },
	    {
	    	nombre: 'Normal'
	    },
	    {
	    	nombre: 'Poco Aceptable'
	    },
	    {
	    	nombre: 'No Aceptable'
	    }
    ];

    $scope.add = function () {
      $scope.mashup.apis.push(
	      {
	        nombre: "",
	        descripcion: "",
	        categoria: "",
	        url: "",
	        factores: []
	      }
      );
    };

    $scope.addFactor = function (index) {
      $scope.mashup.apis[index].factores.push(
	      {
	        nombre:"",
	        nivel: "",
	        posicion: "",
	        union: true,
	        tendencia: false
	      }
      );
    };

    $scope.remove = function (index) {
        $scope.mashup.apis.splice(index, 1);
    };

    $scope.agregarPosicion = function (indexApi,indexFactores) {
        $scope.mashup.apis[indexApi].factores[indexFactores].posicion = indexFactores;
        console.log($scope.mashup.apis[indexApi].factores[indexFactores].posicion);
    };

    $scope.removeFactor = function (index, indexFactores) {
        $scope.mashup.apis[index].factores.splice(indexFactores, 1);
    };

	$(document).ready(function() {
		$('select').material_select();

	});

    $(document).ready(function() {
        Materialize.updateTextFields();
    });

    $(document).ready(function() {
        $('input#input_text, textarea#textarea1').characterCounter();
    });

    $(document).ready(function() {
		$('select').material_select();
	});

	$('select').material_select('destroy');

	$scope.test = {id:3};

	$scope.enviar = function(){
   		mashup.ingresarMashup($scope.mashup) //Se hace el Insert a la base de datos
    	.then(function(respuesta) {
        	console.log(respuesta);
        }, 
    	function() { // optional
            toastr.error('Servidor caido', 'Error');
            // $location.path('/');
        });
   		console.log($scope.mashup);

	}

	$scope.recuperar = function(){
		firebase.database().ref().child('-Kg00irlmeDXd5rC42dR')
			.on("child_added", function(data){
			console.log(data.val());
		});
	}




  });
//lineas 56