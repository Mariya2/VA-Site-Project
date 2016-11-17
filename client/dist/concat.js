var citroenApp = angular.module('citroenApp',['ngRoute'])

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

citroenApp.factory('carService', ['$http',
                                  function($http) {
	 
	var carsInfo = {};

	function getData(){
		
		return $http({
			url: '../JSON/site_content.json',
			method: 'GET'}).then(function(response) {
				carsInfo = response.data;
			return carsInfo;
			}, function(response) {
				$scope.error = response;
			});
	}
	
	return {
		getData: getData
	};
	
}]);   



citroenApp.controller("FavoriteController", 
		['$scope', 'carService', '$http', '$location', '$timeout', '$rootScope',
		 function LoginUserController($scope, carService, $http, $location, $timeout, $rootScope){
	
}])

citroenApp.controller("HomeController", 
		['$scope', 'carService', '$http', '$location', '$timeout', '$rootScope',
		 function HomeController($scope, carService, $http, $location, $timeout, $rootScope){

}])
