angular.module("meanGamesdb").controller("gameListController",gameListController);

function gameListController (gameDataFactory){
    const vm = this;
    vm.title = "List of games";
    gameDataFactory.getAllGames().then(function(response){
        vm.games=response;
    })
   
}