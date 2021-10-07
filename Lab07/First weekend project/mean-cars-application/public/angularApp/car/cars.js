angular.module("CarCompany").controller("carsController",carsController);

function carsController (dataFactory,$routeParams){
    const vm = this;
    const companyID = $routeParams.companyID;

    dataFactory.getAllCars(companyID).then(function(response){
        vm.cars =response;
        console.log(vm.cars);
        
    })

}
