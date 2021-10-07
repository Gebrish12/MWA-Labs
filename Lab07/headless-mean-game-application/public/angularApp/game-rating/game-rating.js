angular.module("meanGamesdb").directive("gameRating",GameRating);

function GameRating(){
    return{
        restrict: "E",
        templateUrl: "angularApp/game-rating/game-rating.html",
        bindToController:true,
        controller:"gameController",
        controllerAs: "vm"
    }
}