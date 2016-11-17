
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

