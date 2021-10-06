angular.module("FreeOnlineGames").controller("MainController",MainController);


function MainController($http){
         var vm = this;
         $http.get("https://www.freetogame.com/api/games")
         .then(function(response){
             vm.games = response.data;
             console.log(vm.games);
         })}