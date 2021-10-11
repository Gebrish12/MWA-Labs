angular.module("Trip", ["ngRoute"]).config(config);

function config($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "angularapp/main/main.html",
    })
    .when("/trip", {
      templateUrl: "angularapp/trip/trip.html",
      controller: "TripController",
      controllerAs: "vm",
    })
    .when("/trip/:id", {
      templateUrl: "angularapp/tripDetail/tripDetail.html",
      controller: "detailController",
      controllerAs: "vm",
    });
}
