angular.module("FreeOnlineGames",['ngRoute']).config(config);

function config($routerProvider){
    $routerProvider
    .when("/",{
        templateUrl :"main/main.html",
        controller :"MainController",
        controllerAs :"mainCtrl"
    }).otherwise({
        redirectTo:("/")
    });
    
}