angular.module("meanGamesdb", ["ngRoute"]).config(config);

function config($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "angularApp/main/welcome.html",
      controller: "MainController",
      controllerAs: "vm",
    })
    .when("/games", {
      templateUrl: "angularApp/game-list/gameList.html",
      controller: "gameListController",
      controllerAs: "vm",
    })
    .when("/game/:gameID", {
      templateUrl: "angularApp/game/gameOne.html",
      controller: "gameController",
      controllerAs: "vm",
    });
}
