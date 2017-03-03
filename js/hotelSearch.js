app.controller('myCtrl', ['$scope', '$http', 'dataService', '$location', function($scope, $http, dataService, $location) {
    // For datepicker button
    $(".rq-search-toggle button").on("click", function() {
        $(this).toggleClass("active"), $(".rq-search-container").slideToggle(300)
    })

    $scope.search = dataService.search

    $scope.search.start_date        = moment("2017-07-20").format("YYYY-MM-DD")
    $scope.search.end_date          = moment("2017-07-27").format("YYYY-MM-DD")
    $scope.search.rooms[0].adults   = 2
    
    $scope.getSerachResults = function() {
        dataService.start_date      = $scope.search.start_date
        dataService.end_date        = $scope.search.end_date
        dataService.guests          = $scope.search.rooms[0].adults
        dataService.search          = $scope.search
        return $location.path('/hotel-listing')
    }
}]);

