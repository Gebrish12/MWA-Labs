angular.module("FreeOnlineGames",['ngRoute']).config(config);

function config($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl:"main/main.html",
        controller:"MainController",
        controllerAs:"mainCtrl"
    })
    .otherwise({
        redirectTo:"/"
    });
}
