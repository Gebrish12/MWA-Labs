angular.module("CarCompany", ["ngRoute"]).config(config);

function config($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "angularApp/main/mainPage.html",
    })
    .when("/company", {
      templateUrl: "angularApp/carCompany/carCompany.html",
      controller: "carCompanyController",
      controllerAs: "vm",
    })
    .when("/company/:companyID", {
      templateUrl: "angularApp/car/cars.html",
      controller: "carsController",
      controllerAs: "vm",
    })
    .when("/register", {
      templateUrl: "angularApp/Register/register.html",
      controller: "RegisterController",
      controllerAs: "vm",
    });
}
