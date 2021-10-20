angular.module("meanGamesdb").factory("gameDataFactory", gameDataFactory);

function gameDataFactory($http) {
  return {
    getAllGames: getAll,
    getOneGame: getOne,
    deleteGame: deleteGame,
    addGame: addGame,
  };

  function addGame(game) {
    return $http.post("/api/games", game).then(complete).catch(failed);
  }

  function deleteGame(gameID) {
    return $http
      .delete("/api/games/" + gameID)
      .then(complete)
      .catch(failed);
  }

  function getOne(gameID) {
    return $http
      .get("/api/games/" + gameID)
      .then(complete)
      .catch(failed);
  }
  function getAll() {
    return $http.get("/api/games").then(complete).catch(failed);
  }
  function complete(response) {
    return response.data;
  }
  function failed() {
    return "failed";
  }
}
