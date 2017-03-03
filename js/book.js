app.controller('book', ['$scope', '$http', '$routeParams', 'dataService', '$location', function($scope, $http, $routeParams, dataService, $location) {
    // if (!dataService.start_date) return $location.path('/')

    $scope.booking                  = {}
    $scope.booking.leadCustomer     = {}
    $scope.booking.remarks          = {}
    $scope.booking.start_date       = dataService.start_date
    $scope.booking.end_date         = dataService.end_date
    $scope.booking.bookingPrice     = dataService.price
    $scope.booking.hotelID          = $routeParams.hotelID
    $scope.booking.roomTypeID       = $routeParams.roomID
    $scope.booking.mealPlan         = "Room Only"
    $scope.booking.bookingOrigin    = "idealskopelos.com"

 
    $scope.submitBooking = function() {
        var headers       = {headers:{'Content-Type': 'application/json'}}
        console.log($scope.booking)

        $http.post(URL + 'reservation', $scope.booking, headers)

        .then(function success(response) {
            console.log(response)
            $scope.response = response.data
        })
    }
}]);