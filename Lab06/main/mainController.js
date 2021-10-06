angular.module("FreeOnlineGames").controller("MainController",MainController);

function MainController($http){
    var vm =this;

    $http.get("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
    .then(function(response){
        
        vm.games = response.data;
    });
}

