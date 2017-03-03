app.controller('hotelListing', ['$scope', '$http', 'dataService', '$location', function($scope, $http, dataService, $location) {
    $scope.search = dataService.search
    $scope.loading = true
    
    // Get hotels
    dataService.searchHotels(dataService.search)
    
    // When results arrive
    .then(function(data) {
        $scope.loading = false
        if (data.length) $scope.hotels = data;
        if (data.length) $scope.map = {
            zoom: 10,
            center: $scope.hotels[0].location
        };
    });

    // Get price
    $scope.hotelSelect = function(hotelID, roomID, price) {
        dataService.price = price
        $location.path('/hotel-info/' + hotelID + "/" + roomID)
    }

    // Search other dates
    $scope.getSerachResults = function() {
        $scope.loading = true
        dataService.start_date      = $scope.search.start_date
        dataService.end_date        = $scope.search.end_date
        dataService.guests          = $scope.search.rooms[0].adults
        
        // Get hotels
        dataService.searchHotels(dataService.search)
        
        .then(function(data) {
            $scope.loading = false
            if (data.length) $scope.hotels = data;
            if (data.length) $scope.map = {
                zoom: 10,
                center: $scope.hotels[0].location
            };
        });
    }
}]);