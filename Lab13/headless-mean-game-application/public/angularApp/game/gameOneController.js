angular.module("meanGamesdb").controller("gameController", gameController);

function gameController($route, gameDataFactory, $routeParams) {
  const vm = this;
  const gameID = $routeParams.gameID;

  console.log(gameID);
  gameDataFactory.getOneGame(gameID).then(function (response) {
    vm.game = response;
    vm.rating = new Array(response.rate);
  });

  vm.deleteGame = function (id) {
    gameDataFactory.deleteGame(id).then(function () {
      console.log("deleted successfully");
    });
  };
  vm.updateGame = function (id) {
    const updatedGame = {
      title: vm.newgametitle,
      rate: vm.newgamerate,
      price: vm.newgameprice,
      year: vm.newgameyear,
      minPlayers: vm.newgameminPlayers,
      maxPlayers: vm.newgamemaxPlayers,
    };
    gameDataFactory.updateGame(id, updatedGame).then(function () {
      console.log("updated successfully");
      $route.reload();
    });
  };
}
