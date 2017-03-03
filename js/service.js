/*!
 * Service where the data from the server is saved
 * Meal plan and price the user choses is saved here
 * This is used to achive multiple pages layout
 */
app.service('dataService',['$http', function($http) {
    this.guests       = null
    this.hotelID      = 61
    this.roomTypeID   = null
    this.data         = null    // Data from server
    this.mealPlan     = null    // Mealplan chosen in 2nd step
    this.price        = null    // Price of mealplan
    this.start_date   = null    // checkIn
    this.end_date     = null    // checkOut

    this.searchHotels = function(search) {
        var headers = {headers:{'Content-Type': 'application/json'}}

        var promise = $http.post(URL + "general-availability", search, headers)

        .then(function success(response) {
            this.data = response.data
            return this.data
        })

        return promise
    }

        // Object to send for search
    this.search = {
        start_date            : null,
        end_date              : null,
        rooms: [{
            adults            : 0,
            children          : 0,
            quantity          : 0
        }],
        username              : "apostolos.vratsiotis@kentavrostours.com",
        otagDestinationCode   : "Corfu Island",
    }
    
}]);
