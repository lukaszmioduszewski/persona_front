// main.js

// create the module

	var app = angular.module('PersonaApp', []);

	app.run(function($rootScope){
		$rootScope.name = "Honey Luke TestApp";
	});

	app.controller('MyController', function($scope){
		$scope.person = {
			name : 'Ari Lerenr'
		};
		$scope.test = "*";
	});


	app.controller('ParentController', function($scope) {
  		$scope.person = {greeted: false};
	});

	app.controller('ChildController', function($scope) {
  		$scope.sayHello = function() {
    		$scope.person.greeted = true;
  		}
	});
	// configure our routes

	// app.config(function($routeProvider){
	// 		$routeProvider

	// 		// route for the home page
	// 		.when('/', {
	// 			templateUrl : 'home.html',
	// 			controller : 'mainController'
	// 		})

	// 		// route for the home page
	// 		.when('/about', {
	// 			templateUrl : 'about.html',
	// 			controller : 'aboutController'
	// 		})

	// 		// route for the contact page
	// 		.when('/contact', {
	// 			templateUrl : 'contact.html',
	// 			conrtoller : 'contactController'
	// 		})

	// });
	// // create the conrtoller na inject angular's $scope
	// app.controller('mainController', function($scope){
	// 	$scope.message = 'Simple message from myself !'
	// });

	// app.controller('aboutController', function($scope){
	// 	$scope.message = 'About me !'
	// });

	// app.controller('contactController', function($scope){
	// 	$scope.message = 'Contact me !'
	// });