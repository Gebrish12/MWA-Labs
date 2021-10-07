

angular.module("meanGamesdb").factory("gameDataFactory",gameDataFactory);

function gameDataFactory($http){
    return {
        getAllGames :getAll,
        getOneGame :getOne
    }

    function getOne (gameID){
        return $http.get("/api/games/"+ gameID).then(complete).catch(failed);
    }
    function getAll(){  
    return $http.get("/api/games").then(complete).catch(failed)
    }
    function complete(response){
        return response.data;
    }
    function failed(){
        return "failed";
    }
    }
