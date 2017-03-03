app.controller('hotelInfo', ['$scope', '$http', '$routeParams', 'dataService', '$location', function($scope, $http, $routeParams, dataService, $location) {
    
    $scope.hotelID          = $routeParams.hotelID
    $scope.roomTypeID       = $routeParams.roomID
    $scope.start_date       = dataService.start_date
    $scope.end_date         = dataService.end_date


    // Called when controller initiates
    getRoomInfo = function(id) {
        var data          = {hotelID: id}
        var headers       = {headers:{'Content-Type': 'application/json'}}

        $http.post(URL + 'information', data, headers)
        
        .then( function(response) {
            $scope.moreInfo = response.data
            $scope.coordinates = $scope.moreInfo.loc.coordinates.reverse()
        })
    }
    
    // Called when controller initiates
    getRoomInfo($routeParams.hotelID)
}]);