var citroenApp = angular.module('citroenApp',['ngRoute'])
//va-next-2-1
.config(['$locationProvider', '$routeProvider',
          function($locationProvider, $routeProvider){
	
	$routeProvider
	.when('/home', {
		templateUrl: "app/routes/home/home.html",
		controller: 'HomeController'
	})
	.when('/favorite', {
		templateUrl:"./app/routes/favorite/favorite.html",
		controller:'FavoriteController'
	})
	.otherwise({redirectTo: '/home'})
}])

.run(['$rootScope', '$location', function($rootScope, $location) {
	var path = function() { return $location.path();};
	$rootScope.$watch(path, function(newVal, oldVal){
	  $rootScope.activetab = newVal;
	});
} ])

.controller('PageController', function($rootScope, $scope, $location, carService) {
	var carData = {};
	$rootScope.getAllData = (function() {
		carService.getData()
		.then(function(response){
			if (response != 'error') {
				$rootScope.carData = response;	
			}
		})
	})();
});