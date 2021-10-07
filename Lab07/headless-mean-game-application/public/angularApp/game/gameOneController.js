angular.module("meanGamesdb").controller("gameController",gameController);

function gameController(gameDataFactory,$routeParams){
    const vm = this;
    const gameID = $routeParams.gameID;
   
    console.log(gameID)
    gameDataFactory.getOneGame(gameID).then(function(response){
        vm.game =response;
        vm.rating= new Array(response.rate);
    })


}