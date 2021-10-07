angular.module("CarCompany",['ngRoute']).config(config);

function config($routeProvider){
    $routeProvider.when("/",{
          templateUrl : "angularApp/main/mainPage.html",
          controller : "MainController",
          controllerAs : "vm"
    })




}