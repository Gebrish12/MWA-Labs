angular
  .module("meanGamesdb")
  .controller("gameListController", gameListController);

function gameListController($route, gameDataFactory) {
  const vm = this;
  vm.title = "List of games";
  gameDataFactory.getAllGames().then(function (response) {
    vm.games = response;
  });

  vm.addGame = function () {
    const newGame = {
      title: vm.newgametitle,
      rate: vm.newgamerate,
      price: vm.newgameprice,
      year: vm.newgameyear,
      minPlayers: vm.newgameminPlayers,
      maxPlayers: vm.newgamemaxPlayers,
    };

    gameDataFactory.addGame(newGame).then(function (newgame) {
      console.log(newgame);
      console.log("added successfully");
      $route.reload();
    });
  };
}
